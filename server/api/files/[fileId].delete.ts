import { files } from "~/server/database/schema";
import { queryAllFiles } from "./index.get";
import fs from "fs/promises";

export default defineEventHandler(async (event) => {
  const fileId = getRouterParam(event, "fileId");

  if (!fileId) {
    return new Response("fileId is required", { status: 400 });
  }

  const deleteFile = await useDrizzle()
    .delete(tables.files)
    .where(eq(tables.files.fileId, fileId))
    .returning({ localPath: files.localPath });

  if (deleteFile[0].localPath) {
    await fs.unlink(deleteFile[0].localPath);
  }

  return await queryAllFiles();
});
