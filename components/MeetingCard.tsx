import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

type MeetingCardProps = {
  meeting: SacramentMeeting;
};

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const meetingDate = new Date(meeting.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            {meeting.meetingType}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            {meetingDate}
          </h2>
        </div>

        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
          #{meeting.id}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-700">
        <p>
          <span className="font-medium text-slate-900">Presiding:</span>{" "}
          {meeting.presiding}
        </p>
        <p>
          <span className="font-medium text-slate-900">Conducting:</span>{" "}
          {meeting.conducting}
        </p>
        <p>
          <span className="font-medium text-slate-900">Opening Hymn:</span>{" "}
          {meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>
      </div>
    </Link>
  );
}
