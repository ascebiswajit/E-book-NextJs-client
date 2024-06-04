import { Book } from "@/Types";
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
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
