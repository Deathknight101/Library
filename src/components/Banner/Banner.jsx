import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="p-2 lg:p-0">
            <div className="hero h-full rounded-xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/gatsby.png" className="h-80 lg:h-96" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <Link to='/listedbooks'>
                            <button className="btn mt-5 bg-green-600 text-white">View The List</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;