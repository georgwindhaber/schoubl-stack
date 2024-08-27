export default defineEventHandler(async (event) => {
  const { files } = await readBody<{ files: File[] }>(event);

  for (const file of files) {
    await storeFileLocally(file, 8, "/userFiles");
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
