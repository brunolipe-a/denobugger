import { RouterContext } from "https://deno.land/x/oak@v6.3.1/mod.ts"
import { Book } from "../models/Book.ts"

class BooksController {
  public async index({ request, response }: RouterContext) {
    const books = await Book.all()

    response.body = books
  }

  public async show({ request, response, params }: RouterContext) {
    if (!params || !params.id) {
      response.status = 400
      response.body = { message: "Bad Request" }
      return
    }

    const book = await Book.find(params.id)

    if (!book) {
      response.status = 401
      response.body = { message: "No Book" }
      return
    }

    response.body = book
  }

  public async store({ request, response }: RouterContext) {
    const { pages, name, author } = await request.body().value

    const book = new Book()
    Object.assign(book, { pages, name, author })
    await book.save()

    response.body = book
  }
}

export default new BooksController()