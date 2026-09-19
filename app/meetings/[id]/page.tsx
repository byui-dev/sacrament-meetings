import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

async function getMeeting(id: string) {
  const res = await fetch(`http://localhost:3000/api/meetings/${id}`);

  if (!res.ok) {
    return null;
  }

  return (await res.json()) as SacramentMeeting;
}

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}
