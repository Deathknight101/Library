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
                
                <div className="flex gap-12 lg:flex-row flex-col 
                ">
                    <div className="flex-1">
                        <img className="" src={book.image} alt="" />
                    </div>
                    <div className="flex-1 p-4">
                        <h1 className="mb-4 text-4xl font-bold">
                            {book.bookName}
                        </h1>
                        <hr className="mb-4" />
                        <p className="mb-4">
                            By : {book.author}
                        </p>
                        <hr className="mb-4" />
                        <p className="mb-4">
                            <span className="font-bold">Review</span>  : {book.review}
                        </p>
                        <div className="flex
                        gap-3 items-center mb-4">
                            <p className="font-bold">Tag: </p>
                            {
                                book.tags.map(tag => <div key={tag} className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                    <p className="text-green-600">{tag} </p>
                                </div>)
                            }

                        </div>
                        <hr className="mb-4" />
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}

                                <tbody>
                                    {/* row 1 */}
                                    <tr>

                                        <td>Number of Pages:</td>
                                        <td className="font-bold">{book.totalPages}</td>

                                    </tr>
                                    {/* row 2 */}
                                    <tr>

                                        <td>Publisher:</td>
                                        <td className="font-bold">{book.publisher}</td>

                                    </tr>
                                    {/* row 3 */}
                                    <tr>

                                        <td>Year of Publishing:</td>
                                        <td className="font-bold">{book.yearOfPublishing}</td>

                                    </tr>
                                    <tr>

                                        <td>Rating:</td>
                                        <td className="font-bold">{book.rating}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-3">
                            <button className="btn bg-white border-gray-200">
                                Read
                            </button>
                            <button className="btn bg-teal-400 text-white">
                                Wishlist
                            </button>
                        </div>
                    </div>
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