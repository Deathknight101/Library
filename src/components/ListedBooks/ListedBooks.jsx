import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredBooks, getStoredWishlistBooks } from "../../utility/localStorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {

    const books = useLoaderData();
    const navigate = useNavigate();
    const [listedBooks, setListedBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    const [disReadlist, setDisReadlist] = useState([])
    const [disWishlist, setDisWishlist] = useState([])

    const liSort = type => {
        if (type === 'rating') {
            const tempReadlist = [...listedBooks];
            console.log(tempReadlist);
            setDisReadlist(tempReadlist.sort((x, y) =>
                y.rating - x.rating
            ))
            const tempwishtlist = [...wishlistBooks];
            console.log(tempwishtlist);
            setDisWishlist(tempwishtlist.sort((x, y) =>
                y.rating - x.rating
            ))

        }
        if (type === 'pages') {
            const tempReadlist = [...listedBooks];
            console.log(tempReadlist);
            setDisReadlist(tempReadlist.sort((x, y) =>
                y.totalPages - x.totalPages
            ))
            const tempwishtlist = [...wishlistBooks];
            console.log(tempwishtlist);
            setDisWishlist(tempwishtlist.sort((x, y) =>
                y.totalPages - x.totalPages
            ))

        }
        if (type === 'year') {
            const tempReadlist = [...listedBooks];
            console.log(tempReadlist);
            setDisReadlist(tempReadlist.sort((x, y) =>
                y.yearOfPublishing - x.yearOfPublishing
            ))
            const tempwishtlist = [...wishlistBooks];
            console.log(tempwishtlist);
            setDisWishlist(tempwishtlist.sort((x, y) =>
                y.yearOfPublishing - x.yearOfPublishing
            ))

        }
        if (type === 'reset') {
            setDisReadlist(listedBooks);
            setDisWishlist(wishlistBooks);
        }
    }

    useEffect(() => {

        const storedBookIds = getStoredBooks();

        if (books.books.length > 0) {
            const bookListed = books.books.filter(book => storedBookIds.includes(book.bookId))
            setListedBooks(bookListed);
            setDisReadlist(bookListed);
        }
        const storedWishlistBookIds = getStoredWishlistBooks();

        if (books.books.length > 0) {
            const wishlistbookListed = books.books.filter(book => storedWishlistBookIds.includes(book.bookId))
            setWishlistBooks(wishlistbookListed);
            setDisWishlist(wishlistbookListed);
        }
    }, [])

    return (
        <div className="p-4">

            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-600 text-white">Sort By <IoIosArrowDown className="text-lg" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">

                        <li onClick={() => { liSort('rating') }}><a>Rating</a></li>
                        <li onClick={() => { liSort('pages') }}><a>Number of Pages</a></li>
                        <li onClick={() => { liSort('year') }}><a>Publisher year</a></li>
                        <li onClick={() => { liSort('reset') }}><a>Reset</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className="flex flex-col gap-6">
                        {
                            disReadlist.map(book => <div key={book.bookId} className="card card-side bg-base-100 shadow-xl">
                                <figure className="p-4"><img className="h-56 rounded-lg" src={book.image} alt="Cover" /></figure>
                                <div className="flex flex-col gap-3 w-full p-4">
                                    <h2 className="card-title">{book.bookName}</h2>
                                    <p>by : {book.author}</p>
                                    <div className="flex flex-col lg:flex-row
                        gap-3 lg:items-center">
                                        <p className="font-bold">Tag: </p>
                                        {
                                            book.tags.map(tag => <div key={tag} className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                                <p className="text-green-600">{tag} </p>
                                            </div>)
                                        }
                                        <div className="flex lg:flex-row 
                                         items-center gap-2">
                                            <IoLocationOutline className="text-xl" />
                                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <GoPeople />
                                            <p>Publisher: {book.publisher} </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <IoDocumentTextOutline />
                                            <p>Page {book.totalPages}</p>
                                        </div>
                                    </div>
                                    <hr className="w-full" />
                                    <div className="flex flex-col lg:flex-row gap-3">
                                        <div className="w-44 h-10 px-5 py-2.5 bg-blue-500 bg-opacity-20 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-center text-blue-500 text-base font-normal font-['Work Sans']">Category: {book.category}</div>
                                        </div>
                                        <div className="w-32 h-10 px-5 py-2.5 bg-amber-400 bg-opacity-20 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-center text-amber-400 text-base font-normal font-['Work Sans']">Rating: {book.rating}</div>
                                        </div>
                                        <Link to={`/book/${book.bookId}`}>
                                            <button  className=" btn-primary w-36 h-10 px-5 py-2.5 bg-green-600 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                                                <div className="text-center text-white text-lg font-medium ">View Details</div>
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col gap-6">
                        {
                            disWishlist.map(book => <div key={book.bookId} className="card card-side bg-base-100 shadow-xl">
                                <figure className="p-4"><img className="h-56 rounded-lg" src={book.image} alt="Cover" /></figure>
                                <div className="flex flex-col gap-3 w-full p-4">
                                    <h2 className="card-title">{book.bookName}</h2>
                                    <p>by : {book.author}</p>
                                    <div className="flex flex-col lg:flex-row
                        gap-3 lg:items-center">
                                        <p className="font-bold">Tag: </p>
                                        {
                                            book.tags.map(tag => <div key={tag} className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                                <p className="text-green-600">{tag} </p>
                                            </div>)
                                        }
                                        <div className="flex lg:flex-row 
                                         items-center gap-2">
                                            <IoLocationOutline className="text-xl" />
                                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <GoPeople />
                                            <p>Publisher: {book.publisher} </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <IoDocumentTextOutline />
                                            <p>Page {book.totalPages}</p>
                                        </div>
                                    </div>
                                    <hr className="w-full" />
                                    <div className="flex flex-col lg:flex-row gap-3">
                                        <div className="w-44 h-10 px-5 py-2.5 bg-blue-500 bg-opacity-20 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-center text-blue-500 text-base font-normal font-['Work Sans']">Category: {book.category}</div>
                                        </div>
                                        <div className="w-32 h-10 px-5 py-2.5 bg-amber-400 bg-opacity-20 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-center text-amber-400 text-base font-normal font-['Work Sans']">Rating: {book.rating}</div>
                                        </div>
                                        <div className="w-36 h-10 px-5 py-2.5 bg-green-600 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-center text-white text-lg font-medium font-['Work Sans']">View Details</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default ListedBooks;