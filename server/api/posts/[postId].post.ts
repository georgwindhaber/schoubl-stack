export default defineEventHandler(async (event) => {
  return useDrizzle().delete(tables.posts).values({
    title: "",
    body: "",
    createdAt: new Date(),
    modifiedAt: new Date(),
  });
});
