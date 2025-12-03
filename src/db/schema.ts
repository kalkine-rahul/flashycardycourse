import { pgTable, serial, text, timestamp, varchar, integer } from "drizzle-orm/pg-core";

export const decks = pgTable("decks", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  userId: varchar("user_id", { length: 256 }).notNull(), // Clerk user ID
  createdAt: timestamp("created_at").defaultNow(),
});

export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
  deckId: integer("deck_id").references(() => decks.id).notNull(),
  front: text("front").notNull(),
  back: text("back").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
