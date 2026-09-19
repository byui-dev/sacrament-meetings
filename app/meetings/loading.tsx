export default function MeetingsLoading() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-40 rounded bg-slate-200" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-40 rounded-xl bg-slate-200" />
          <div className="h-40 rounded-xl bg-slate-200" />
        </div>
      </div>
    </main>
  );
}
