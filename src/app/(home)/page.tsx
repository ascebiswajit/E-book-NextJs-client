// import Banner from "./components/Banner";
// you can do it both way
import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
import Loading from "@/components/Loading";
import { Suspense } from "react";


export default async function Home() {

  //data fetching

  // const response = await fetch(`${process.env.BACKEND_URL}/BOOKS`,{
  //   cache:"no-store"
  // });

  // if(!response.ok){
  //   throw new Error ('Error occured while Data fetching')
  // }
  // const books = await response.json();
  // console.log(books)
  // we using data cacheing so do not use props
  return (
    <>
      <div>
        <Banner />
        {/* <BookList books = {books}/> */}
        <Suspense fallback={<Loading/>} >

        <BookList />
        </Suspense>

      </div>
    </>
  );
}
