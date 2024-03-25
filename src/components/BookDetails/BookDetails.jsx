import { useLoaderData, useParams } from
    "react-router-dom";
import { Link } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.books.find(book => book.bookId === id);
    
    if (book) {
        return (
            <>
                <div>
                    <h1>book details of: {id}</h1>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <h1>Book not Found</h1>
                    <Link to="/">Go Home</Link>
                </div>
            </>
        )
    }
};

export default BookDetails;