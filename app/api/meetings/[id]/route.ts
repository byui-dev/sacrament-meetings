import { getMeetingById } from "@/lib/meetings-db";

type RouteParams = {
  params: Promise<{ id: string }> | { id: string };
};

export async function GET(_request: Request, { params }: RouteParams) {
  const resolvedParams = await Promise.resolve(params);
  const meetingId = Number(resolvedParams.id);

  if (!Number.isInteger(meetingId)) {
    return Response.json(
      { error: "Meeting id must be a valid number" },
      { status: 400 },
    );
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    return Response.json({ error: "Meeting not found" }, { status: 404 });
  }

  return Response.json(meeting);
}
