export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "postId");

  return useDrizzle()
    .delete(tables.posts)
    .where(eq(tables.posts.id, Number(postId)));
});
