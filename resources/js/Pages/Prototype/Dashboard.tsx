import React from "react";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie"
import MovieCard from "@/Components/MovieCard";

const Dashboard: React.FC = () => {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return (

        <Authenticated>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div className="">
                <div className="font-semibold text-[22px] text-black mb-4 ">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions} >
                    {[1, 2, 3, 4].map(i => (
                        <FeaturedMovie key={i}
                            name="The Flash"
                            category="Action"
                            thumbnail="/images/featured-1.png"
                            rating={4.5}
                            slug="the-flash"
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                        <MovieCard key={i}
                            name="The Flash"
                            category="Action"
                            thumbnail="/images/browse-1.png"
                            slug="the-flash"
                        />
                    ))}
                </Flickity>

            </div>
        </Authenticated>


    )

}

export default Dashboard