import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

type MeetingDetailProps = {
  meeting: SacramentMeeting;
};

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const formattedDate = new Date(meeting.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <Link
          href="/meetings"
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          ← Back to meetings
        </Link>
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {meeting.meetingType}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          {formattedDate}
        </h1>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-slate-500">Presiding</dt>
            <dd className="mt-1 text-base text-slate-900">
              {meeting.presiding}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-slate-500">Conducting</dt>
            <dd className="mt-1 text-base text-slate-900">
              {meeting.conducting}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-slate-500">Opening hymn</dt>
            <dd className="mt-1 text-base text-slate-900">
              {meeting.openingHymn.number} — {meeting.openingHymn.title}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-slate-500">
              Sacrament hymn
            </dt>
            <dd className="mt-1 text-base text-slate-900">
              {meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}
            </dd>
          </div>
        </dl>
      </article>
    </main>
  );
}
