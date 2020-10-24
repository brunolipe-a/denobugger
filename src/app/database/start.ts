import { Database } from "https://deno.land/x/denodb/mod.ts";
import { Book } from "../models/Book.ts";

export async function startDB() {
  const db = new Database("sqlite3", {
    filepath: "./database.sqlite",
  });

  db.link([Book]);

  await db.sync();
}
