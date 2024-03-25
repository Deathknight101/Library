
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 shadow-xl border-gray-200 border-2 h-full">
                <figure className="px-10 pt-10 h-full">
                    <img src={image} alt="cover" className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <div className="flex gap-3">
                        {
                            tags.map(tag => <div key={tag} className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">{tag} </p>
                            </div>)
                        }

                    </div>

                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr className="w-full" />
                    <div className="flex justify-between">
                        <div>
                            <p>{category}</p>
                        </div>
                        <div className="flex items-center">
                            <CiStar className="text-xl" />
                            <p>{rating}</p>
                        </div>


                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;