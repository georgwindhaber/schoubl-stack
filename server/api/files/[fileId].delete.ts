export default defineEventHandler(async (event) => {
  const fileId = getRouterParam(event, "fileId");

  if (!fileId) {
    return new Response("fileId is required", { status: 400 });
  }

  return useDrizzle()
    .delete(tables.files)
    .where(eq(tables.files.fileId, fileId));
});
