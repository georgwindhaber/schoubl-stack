export default defineEventHandler(async (event) => {
  const { postId } = getRouterParams(event);

  return useDrizzle()
    .select()
    .from(tables.posts)
    .where(eq(tables.posts.id, Number(postId)));
});
