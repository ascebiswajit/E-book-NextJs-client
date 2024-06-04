import { Book } from "@/Types";
import React from "react";
import BookCard from "./BookCard";

const BookList = async() => {

  const response = await fetch(`${process.env.BACKEND_URL}/BOOKS`,{
    // cache:"no-store"
    next:{
      revalidate:3600
    }
  });

  if(!response.ok){
    throw new Error ('Error occured while Data fetching')
  }
  const books = await response.json();
  console.log(books)
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

      {books.map((book:Book) => (
        <BookCard key={book._id} book={book}/>
      ))}
    </div>
  );
};

export default BookList;
