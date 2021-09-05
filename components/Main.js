import Image from "next/image"
import SlipFall from "../public/Images/Slip1.png";
function Main() {
    return (
    <div>
        <div className="md:relative bg-white overflow-hidden ">
            <div className="mx-auto"> {/* max-w-7xl */}
                <div className="md:relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">
                                    Slip &amp; Fall Prevention? 
                                </span>{' '}
                            </h1>
                            <span className="block text-red-500 font-bold text-2xl xl:inline">
                                    Signage placement is part of safety but not a solution
                                </span>
                            <p className="mt-2 text-md text-gray-500">
                            Alpha Grip floor treatment that never let you fall on your existing slippery floors!
                            </p>
                            <p className="mt-2 text-md text-gray-500">
                            Accident prone zones that arise at home and work area are; bathrooms, staircase, tiled
open area, etc. These accidents generally are crippling and in some cases, life
threatening, due to slip &amp; fall and ignorance. The victims end up with twisted and
damaged limbs, fractures, and many cases head and impact injuries.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Know More
                                </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                >
                                    Apply for demo
                                </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3 sm:text-center">
                <Image
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={SlipFall}
                alt=""
                />
            </div>
        </div>
    </div>
    )
}

export default Main