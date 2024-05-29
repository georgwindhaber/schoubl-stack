import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1).max(255),
  body: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    postSchema.safeParse(body)
  );

  if (!result.success) {
    return {
      status: 400,
      body: result.error,
    };
  }

  return useDrizzle()
    .insert(tables.posts)
    .values({
      title: result.data.title,
      body: result.data.body,
      createdAt: new Date(),
      modifiedAt: new Date(),
    })
    .returning()
    .get();
});
