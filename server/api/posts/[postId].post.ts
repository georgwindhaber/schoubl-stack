import { z } from "zod";

const postSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "postId");
  const result = await readValidatedBody(event, (body) =>
    postSchema.safeParse(body)
  );

  return useDrizzle()
    .update(tables.posts)
    .set({
      title: result.data?.title,
      body: result.data?.body,
      modifiedAt: new Date(),
    })
    .where(eq(tables.posts.id, Number(postId)));
});
