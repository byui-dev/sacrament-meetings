import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

type MeetingCardProps = {
  meeting: SacramentMeeting;
};

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const formattedDate = new Date(meeting.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {meeting.meetingType}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        {formattedDate}
      </h2>
      <p className="mt-3 text-sm text-slate-600">
        Presiding: {meeting.presiding}
      </p>
      <p className="mt-1 text-sm text-slate-600">
        Conducting: {meeting.conducting}
      </p>
    </Link>
  );
}
