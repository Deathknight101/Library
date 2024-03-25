import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="p-2 lg:p-0">
            <div className="hero h-96 bg-center rounded-xl" style={{ backgroundImage: 'url(../src/assets/images/Cover.jpg)' }}>
                <div className="hero-overlay rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md">
                        <h1 className="text-neutral-900 text-6xl font-bold ">Books to freshen up your bookshelf</h1>

                        <Link to='/listedbooks'><button className="btn btn-primary mt-6 bg-green-600">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;