export default defineEventHandler(async (event) => {
  return useDrizzle()
    .insert(tables.posts)
    .values({
      title: "",
      body: "",
      createdAt: new Date(),
      modifiedAt: new Date(),
    })
    .returning({ id: tables.posts.id });
});
