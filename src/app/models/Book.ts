import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";
import { ModelFields } from "https://deno.land/x/denodb@v1.0.12/lib/model.ts";

class Book extends Model {
  static table = "books";
  static timestamps = true;

  static fields: ModelFields = {
    id: { primaryKey: true, type: DataTypes.UUID },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    pages: DataTypes.INTEGER,
  };

  id!: string;
  name!: string;
  author!: string;
  pages!: number;
}

export { Book };
