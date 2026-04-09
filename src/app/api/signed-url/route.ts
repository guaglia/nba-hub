import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const agentId = req.nextUrl.searchParams.get("agentId");
  if (!agentId) {
    return NextResponse.json({ error: "Missing agentId" }, { status: 400 });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  const resp = await fetch(
    `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${agentId}`,
    { headers: { "xi-api-key": apiKey } }
  );

  if (!resp.ok) {
    return NextResponse.json(
      { error: "Failed to get signed URL" },
      { status: resp.status }
    );
  }

  const { signed_url } = await resp.json();
  return NextResponse.json({ signedUrl: signed_url });
}
