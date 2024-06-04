// import Banner from "./components/Banner";
// you can do it both way
import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";


export default async function Home() {

  //data fetching

  const response = await fetch(`${process.env.BACKEND_URL}/BOOKS`);

  if(!response.ok){
    throw new Error ('Error occured while Data fetching')
  }
  const books = await response.json();
  console.log(books)
  return (
    <>
      <div>
        <Banner />
        <BookList books = {books}/>
      </div>
    </>
  );
}
