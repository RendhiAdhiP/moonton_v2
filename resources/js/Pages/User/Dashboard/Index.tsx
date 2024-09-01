import React from "react";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard"; 

type Props = {
    auth: any,
    featuredMovies: any,
    movies: any
}



const Dashboard: React.FC<Props> = ({auth, featuredMovies, movies}) => {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }

    console.log(featuredMovies)
    console.log(movies)
    return (

        <Authenticated auth={auth.user} >
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div className="">
                <div className="font-semibold text-[22px] text-black mb-4 ">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions} >
                    {featuredMovies.map((featMovie) => (
                        <FeaturedMovie key={featMovie.id}
                            name={featMovie.name}
                            category={featMovie.category}
                            thumbnail={featMovie.thumbnail}
                            rating={featMovie.rating}
                            slug={featMovie.slug}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                            slug={movie.slug}
                        />
                    ))}
                </Flickity>

            </div>
        </Authenticated>
    )

}

export default Dashboard