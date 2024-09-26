export default defineEventHandler(async (event) => {
  const fileId = getRouterParam(event, "fileId");

  const body = await readBody<{ displayName: string }>(event);

  if (!fileId) {
    return new Response("fileId is required", { status: 400 });
  }

  await useDrizzle()
    .update(tables.files)
    .set({ displayName: body.displayName })
    .where(eq(tables.files.fileId, fileId));
});
