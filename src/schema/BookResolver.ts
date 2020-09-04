import { Resolver, Query } from "type-graphql";
import { Book } from "./Book";
@Resolver(Book)
export class BookResolver {
  @Query((returns) => Book)
  async book() {
    const book = new Book();
    book.title = "Title Test";
    book.id = "fakeid";
    return book;
  }
  @Query((returns) => [Book])
  async books() {
    const book1 = new Book();
    const book2 = new Book();
    const book3 = new Book();
    book1.title = "Title1";
    book2.title = "Title2";
    book3.title = "Title3";
    book1.id = "id1";
    book2.id = "id2";
    book3.id = "id3";
    return [book1, book2, book3];
  }
}
