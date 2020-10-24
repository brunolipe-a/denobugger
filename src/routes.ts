import { Router } from "https://deno.land/x/oak/mod.ts";
import BooksController from './app/controllers/BooksController.ts'


const router = new Router();  

router.get("/", ({ request, response, params }) => {
  response.body = { message: "hello world" };
})

router.get("/books", BooksController.index)
router.post("/books", BooksController.store);
router.get("/books/:id", BooksController.show);

export { router }