import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Define Users Table
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").unique().notNull(),
  passwordHash: text("passwordHash").notNull(),
});