"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Conversation } from "@elevenlabs/client";

export type ConversationStatus = "disconnected" | "connecting" | "connected";
export type ConversationMode = "listening" | "speaking";

function fetchSignedUrl(agentId: string): Promise<string> {
  return fetch(`/experiences/nba/api/signed-url?agentId=${agentId}`)
    .then((r) => {
      if (!r.ok) throw new Error(`Signed URL fetch failed: ${r.status}`);
      return r.json();
    })
    .then((j) => j.signedUrl as string);
}

export function useConversation(agentId: string) {
  const [status, setStatus] = useState<ConversationStatus>("disconnected");
  const [mode, setMode] = useState<ConversationMode>("listening");
  const [inputVolume, setInputVolume] = useState(0);
  const [outputVolume, setOutputVolume] = useState(0);

  const conversationRef = useRef<Conversation | null>(null);
  const rafRef = useRef<number>(0);
  const signedUrlRef = useRef<Promise<string> | null>(null);

  useEffect(() => {
    signedUrlRef.current = fetchSignedUrl(agentId);
    return () => {
      signedUrlRef.current = null;
    };
  }, [agentId]);

  const pollVolume = useCallback(() => {
    const conv = conversationRef.current;
    if (!conv) return;

    const inp = conv.getInputVolume();
    const out = conv.getOutputVolume();
    setInputVolume(typeof inp === "number" ? inp : 0);
    setOutputVolume(typeof out === "number" ? out : 0);

    rafRef.current = requestAnimationFrame(pollVolume);
  }, []);

  const start = useCallback(async () => {
    if (conversationRef.current) return;

    setStatus("connecting");

    try {
      if (!signedUrlRef.current) {
        signedUrlRef.current = fetchSignedUrl(agentId);
      }
      const signedUrl = await signedUrlRef.current;

      const conversation = await Conversation.startSession({
        signedUrl,
        onConnect: () => {
          setStatus("connected");
          rafRef.current = requestAnimationFrame(pollVolume);
        },
        onDisconnect: () => {
          setStatus("disconnected");
          setMode("listening");
          setInputVolume(0);
          setOutputVolume(0);
          cancelAnimationFrame(rafRef.current);
          conversationRef.current = null;
        },
        onModeChange: ({ mode: m }) => {
          setMode(m as ConversationMode);
        },
        onError: (error) => {
          console.error("Conversation error:", error);
        },
      });

      conversationRef.current = conversation;
    } catch (e) {
      console.error("Failed to start conversation:", e);
      setStatus("disconnected");
    } finally {
      signedUrlRef.current = null;
    }
  }, [agentId, pollVolume]);

  const stop = useCallback(async () => {
    cancelAnimationFrame(rafRef.current);
    if (conversationRef.current) {
      await conversationRef.current.endSession();
      conversationRef.current = null;
    }
    setStatus("disconnected");
    setMode("listening");
    setInputVolume(0);
    setOutputVolume(0);
    signedUrlRef.current = fetchSignedUrl(agentId);
  }, [agentId]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      conversationRef.current?.endSession();
    };
  }, []);

  return { status, mode, inputVolume, outputVolume, start, stop };
}
