import { queryAllFiles } from "./index.get";

export default defineEventHandler(async (event) => {
  const fileId = getRouterParam(event, "fileId");

  if (!fileId) {
    return new Response("fileId is required", { status: 400 });
  }

  await useDrizzle()
    .delete(tables.files)
    .where(eq(tables.files.fileId, fileId));

  return await queryAllFiles();
});
