import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-2xl bg-slate-900 px-6 py-10 text-white shadow-lg sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
          Ward Resources
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Sacrament Meeting Schedule
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200">
          Find the upcoming meeting, review the agenda, and stay connected to
          this week&apos;s ward worship service.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/meetings"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View all meetings
          </Link>
          <Link
            href="/meetings/current"
            className="rounded-full border border-slate-600 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-700"
          >
            See current meeting
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Weekly program
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Review the order of worship, speakers, prayer, and hymns for each
            sacrament meeting.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Fast access</h2>
          <p className="mt-2 text-sm text-slate-600">
            Jump to the meeting page for the current Sunday or browse past
            programs by date.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Ward updates</h2>
          <p className="mt-2 text-sm text-slate-600">
            Keep track of announcements, business items, and key meeting details
            in one place.
          </p>
        </div>
      </section>
    </main>
  );
}
