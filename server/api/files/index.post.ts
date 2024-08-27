import { v4 as uuid } from "uuid";
const FILE_PATH = "/public/userFiles";

export default defineEventHandler(async (event) => {
  const { files } = await readBody<{ files: File[] }>(event);

  for (const file of files) {
    const savedFile = await storeFileLocally(file, 32, FILE_PATH);

    const fileId = uuid();
    await useDrizzle()
      .insert(tables.files)
      .values({
        fileId,
        displayName: file.name,
        fileUrl: `${FILE_PATH}/${savedFile}`,
        localPath: `${process.env.FILE_STORAGE_PATH}${FILE_PATH}/${savedFile}`,
        createdAt: new Date(),
        modifiedAt: new Date(),
      })
      .returning({ id: tables.files.id });
  }

  return "success!";
});

interface File {
  name: string;
  content: string;
  type: string;
  lastModified: string;
  size: string;
}
