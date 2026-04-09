import { BottomNav } from "@/components/layout/BottomNav";
import { TutorFAB } from "@/components/layout/TutorFAB";

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="pb-24">{children}</main>
      <TutorFAB />
      <BottomNav />
    </>
  );
}
