import { Book } from '@/Types'
import Image from 'next/image'
import React from 'react'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div>
        {/* <Image src={book.coverImage} alt={book.title} width={200} height={300}/> */}
        {
            book.title
        }
    </div>
  )
}

export default BookCard