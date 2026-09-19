type RouteParams = {
  params: Promise<{ id: string }> | { id: string };
};

export async function GET(_request: Request, { params }: RouteParams) {
  const resolvedParams = await Promise.resolve(params);

  return Response.json({
    id: resolvedParams.id,
    message: "Meeting detail endpoint",
  });
}
