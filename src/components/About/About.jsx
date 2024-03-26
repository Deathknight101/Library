

const About = () => {
    return (
        <div>
            <div className="p-3 flex lg:flex-row flex-col gap-3
           ">
                {/* left */}
                <div className="flex-1 h-full">
                    <div className="border-2 rounded-lg shadow-lg mb-9">
                        <h1 className="lg:text-start text-center lg:text-9xl text-6xl text p-4 ">Our Dream is Knowledge Without Bounds</h1>
                    </div>

                    <div className="border-2 rounded-lg shadow-lg mb-5">
                        <p className="text-center lg:text-start p-4">
                            "Our Dream is Knowledge Without Bounds" encapsulates the ethos of our book webpage, where the pursuit of knowledge is not confined by limitations. Rooted in a passion for literature and learning, our platform aspires to transcend boundaries, offering a diverse array of books that cater to the intellectual curiosity of readers worldwide. Here, literature serves as a gateway to limitless exploration, inviting individuals to immerse themselves in captivating narratives, profound insights, and transformative ideas. Our commitment to fostering a community of lifelong learners is evident in our carefully curated selection of titles, which spans across genres, cultures, and perspectives. Whether it's uncovering hidden gems, delving into timeless classics, or engaging with contemporary works, our webpage endeavors to ignite curiosity, inspire discovery, and cultivate a shared appreciation for the boundless power of knowledge found within the pages of a book.
                        </p>
                    </div>

                </div>
                {/* right */}
                <div className="flex-1 flex flex-col gap-5">
                    <div className=" rounded-lg shadow-lg ">
                        <img className="rounded-lg shadow-lg" src="/images/pexels.jpg" alt="" />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-3">
                        <div className="card  bg-base-100 shadow-xl border-2">
                            <div className="card-body">
                                <h2 className="card-title text-7xl">3.5</h2>
                                <p>Years of Experience</p>

                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl border-2">
                            <div className="card-body">
                                <h2 className="card-title text-7xl">100K</h2>
                                <p>Trusted Subscribers</p>

                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl border-2">
                            <div className="card-body">
                                <h2 className="card-title text-7xl">4K+</h2>
                                <p>Collection of top notch books</p>

                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl border-2">
                            <div className="card-body">
                                <h2 className="card-title text-7xl">3.5</h2>
                                <p>Years of Experience</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;