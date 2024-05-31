export default defineEventHandler(async (event) => {
  const { postId } = getRouterParams(event);

  const post = await useDrizzle()
    .select()
    .from(tables.posts)
    .where(eq(tables.posts.id, Number(postId)));

  if (!post.length) {
    throw createError({
      statusCode: 404,
      statusMessage: `No post with id ${postId} found`,
    });
  }

  return post[0];
});
