import Link from "next/link";
import { notFound } from "next/navigation";
import { getMeetingById } from "@/lib/meetings-db";

export default async function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);
  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  const meetingDate = new Date(meeting.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/meetings"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          ← Back to meetings
        </Link>
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {meeting.meetingType}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          {meetingDate}
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
              Opening prayer
            </dt>
            <dd className="mt-1 text-base text-slate-900">
              {meeting.openingPrayer}
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
          <div>
            <dt className="text-sm font-medium text-slate-500">Closing hymn</dt>
            <dd className="mt-1 text-base text-slate-900">
              {meeting.closingHymn.number} — {meeting.closingHymn.title}
            </dd>
          </div>
        </dl>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Speakers</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {meeting.speakers.map((speaker) => (
                <li
                  key={`${meeting.id}-${speaker.name}`}
                  className="rounded-lg bg-slate-50 p-3"
                >
                  <p className="font-medium text-slate-900">{speaker.name}</p>
                  {speaker.topic ? (
                    <p className="text-sm">{speaker.topic}</p>
                  ) : null}
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                    {speaker.type}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Ward business
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {meeting.wardBusiness.length > 0 ? (
                meeting.wardBusiness.map((item, index) => (
                  <li
                    key={`${item.description}-${index}`}
                    className="rounded-lg bg-slate-50 p-3"
                  >
                    {item.description}
                  </li>
                ))
              ) : (
                <li className="rounded-lg bg-slate-50 p-3">
                  No ward business items listed.
                </li>
              )}
            </ul>

            <div className="mt-6">
              <p className="text-sm font-medium text-slate-500">
                Closing prayer
              </p>
              <p className="mt-1 text-base text-slate-900">
                {meeting.closingPrayer}
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
