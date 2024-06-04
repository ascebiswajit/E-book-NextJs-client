import { Book } from "@/Types";
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div>
      {/* {books.map((book) => {
        return (
          <>
            <h1 key={book._id}>{book.title}</h1>
          </>
        );
      })} */}
      {/* is same is the above code */}

      {books.map((book) => (
        <BookCard key={book._id} book={book}/>
      ))}
    </div>
  );
};

export default BookList;
