import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

type Props = {
    meetings: SacramentMeeting[];
};

export default function MeetingsPage({ meetings }: Props) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Meetings</h1>
      
        <div className="grid gap-4 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      </main>    
    ); 
}