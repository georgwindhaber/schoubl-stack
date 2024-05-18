import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
export { sql, eq, and, or } from "drizzle-orm";

import * as schema from "../database/schema";

export const tables = schema;

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

export function useDrizzle() {
  if (!url) {
    throw new Error("TURSO_DATABASE_URL is not defined");
  }
  if (!authToken) {
    throw new Error("TURSO_AUTH_TOKEN is not defined");
  }

  return drizzle(createClient({ url, authToken }), { schema });
}

export type User = typeof schema.users.$inferSelect;
