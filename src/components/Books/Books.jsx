import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data.books));
    }, [])
    return (



        <div className="mt-24 ">
            <div className="flex justify-center bg-gray-100 rounded-lg mb-4">
                <h2 className="text-neutral-900 text-5xl font-bold font-heading p-4 ">Books</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mb-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }

            </div>
        </div>
    );
};

export default Books;