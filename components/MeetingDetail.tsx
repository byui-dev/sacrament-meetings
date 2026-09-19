import type { SacramentMeeting } from "@/lib/types";

type MeetingDetailProps = {
  meeting: SacramentMeeting;
};

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const meetingDate = new Date(meeting.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <header className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
          {meeting.meetingType}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {meetingDate}
        </h1>

        <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          <p>
            <span className="font-medium text-slate-900">Presiding:</span>{" "}
            {meeting.presiding}
          </p>
          <p>
            <span className="font-medium text-slate-900">Conducting:</span>{" "}
            {meeting.conducting}
          </p>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Hymns</h2>

          <div className="mt-4 space-y-3">
            <p>
              <span className="font-medium text-slate-900">Opening hymn:</span>{" "}
              #{meeting.openingHymn.number} - {meeting.openingHymn.title}
            </p>
            <p>
              <span className="font-medium text-slate-900">
                Sacrament hymn:
              </span>{" "}
              #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
            </p>
            <p>
              <span className="font-medium text-slate-900">Closing hymn:</span>{" "}
              #{meeting.closingHymn.number} - {meeting.closingHymn.title}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Prayers</h2>

          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-medium text-slate-900">
                Opening prayer:
              </span>{" "}
              {meeting.openingPrayer}
            </p>
            <p>
              <span className="font-medium text-slate-900">
                Closing prayer:
              </span>{" "}
              {meeting.closingPrayer}
            </p>
          </div>
        </div>
      </section>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Announcements
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {meeting.announcements.map((announcement, index) => (
              <li key={`${announcement}-${index}`}>{announcement}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Speakers</h2>

        <div className="mt-4 space-y-4">
          {meeting.speakers.map((speaker, index) => (
            <div
              key={`${speaker.name}-${index}`}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <p className="font-medium text-slate-900">{speaker.name}</p>
              <p className="text-sm uppercase tracking-wide text-slate-500">
                {speaker.type === "musical-number"
                  ? "Musical Number"
                  : "Speaker"}
              </p>
              {speaker.topic && (
                <p className="mt-2 text-sm text-slate-700">{speaker.topic}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Ward Business</h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {meeting.wardBusiness.map((item, index) => (
              <li key={`${item.description}-${index}`}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-slate-600">No ward business noted.</p>
        )}

        {meeting.stakeBusiness && (
          <p className="mt-4 text-sm font-medium text-slate-700">
            Stake business was included in this meeting.
          </p>
        )}
      </section>
    </article>
  );
}
