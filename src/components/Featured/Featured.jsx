
import { CiStar } from "react-icons/ci";
const Featured = () => {
    return (
        <div className="p-4 lg:p-0">
            <div className="flex justify-center mt-5 mb-5">
                <h1 className="font-heading text-5xl font-bold text-center lg:text-start">Our Featured Books</h1>
            </div>
            <div className="grid lg:grid-cols-4 gap-6 mb-10">
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl border-gray-200 border-2 h-full">
                    <figure className="px-10 pt-10 h-full">
                        <img src="https://i.ibb.co/JBdy697/Dune.webp" alt="cover" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <div className="flex gap-3">

                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Space Opera</p>
                            </div>
                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Politics</p>
                            </div>


                        </div>

                        <h2 className="card-title text-2xl font-bold font-heading">Dune</h2>
                        <p>By: Frank Herbert</p>
                        <hr className="w-full" />
                        <div className="flex justify-between">
                            <div>
                                <p>Sci-Fi</p>
                            </div>
                            <div className="flex items-center">
                                <CiStar className="text-xl" />
                                <p>4.8</p>
                            </div>


                        </div>
                        <div>
                            <h2><span className="font-bold">Review:</span> A monumental work of science fiction, blending politics, religion, and ecology on a desert planet.</h2>
                        </div>
                        <div>
                            <p><span className="font-bold">Year of Publish:</span>  1965</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 shadow-xl border-gray-200 border-2 h-full">
                    <figure className="px-10 pt-10 h-full">
                        <img src="https://i.ibb.co/QmNmYJh/kkhp1-lg-c1cba98da86a4d8fb6a476876b072744.webp" alt="cover" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <div className="flex gap-3">

                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Magic</p>
                            </div>
                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Coming-of-Age</p>
                            </div>


                        </div>

                        <h2 className="card-title text-2xl font-bold font-heading">Harry Potter and the Sorcerer's Stone</h2>
                        <p>By: J.K. Rowling</p>
                        <hr className="w-full" />
                        <div className="flex justify-between">
                            <div>
                                <p>Fantasy</p>
                            </div>
                            <div className="flex items-center">
                                <CiStar className="text-xl" />
                                <p>4.8</p>
                            </div>


                        </div>
                        <div>
                            <h2><span className="font-bold">Review:</span> The magical journey begins with Harry Potter discovering his wizarding heritage and attending Hogwarts School of Witchcraft and Wizardry.</h2>
                        </div>
                        <div>
                            <p><span className="font-bold">Year of Publish:</span>  1997</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 shadow-xl border-gray-200 border-2 h-full">
                    <figure className="px-10 pt-10 h-full">
                        <img src="https://i.ibb.co/hRgn2pn/7d1e34b7acfa1c89eca265f15a641aee.jpg" alt="cover" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <div className="flex gap-3">

                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Conspiracy</p>
                            </div>
                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Vatican</p>
                            </div>


                        </div>

                        <h2 className="card-title text-2xl font-bold font-heading">Angels & Demons</h2>
                        <p>By: Dan Brown</p>
                        <hr className="w-full" />
                        <div className="flex justify-between">
                            <div>
                                <p>Thriller</p>
                            </div>
                            <div className="flex items-center">
                                <CiStar className="text-xl" />
                                <p>4.3</p>
                            </div>


                        </div>
                        <div>
                            <h2><span className="font-bold">Review:</span> Robert Langdon is thrust into a thrilling race against time and the Illuminati to prevent a catastrophic event.</h2>
                        </div>
                        <div>
                            <p><span className="font-bold">Year of Publish:</span>  2000</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card bg-base-100 shadow-xl border-gray-200 border-2 h-full">
                    <figure className="px-10 pt-10 h-full">
                        <img src="https://i.ibb.co/5syZn5m/44492285.jpg" alt="cover" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <div className="flex gap-3">

                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Dystopian</p>
                            </div>
                            <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-3xl">
                                <p className="text-green-600">Space Opera</p>
                            </div>


                        </div>

                        <h2 className="card-title text-2xl font-bold font-heading">Dune Messiah</h2>
                        <p>By: Frank Herbert</p>
                        <hr className="w-full" />
                        <div className="flex justify-between">
                            <div>
                                <p>Science Fiction</p>
                            </div>
                            <div className="flex items-center">
                                <CiStar className="text-xl" />
                                <p>4.4</p>
                            </div>


                        </div>
                        <div>
                            <h2><span className="font-bold">Review:</span> The saga continues as Paul Atreides wrestles with the consequences of his actions and faces new challenges.</h2>
                        </div>
                        <div>
                            <p><span className="font-bold">Year of Publish:</span>  1969</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Featured;