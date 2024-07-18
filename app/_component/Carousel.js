import { genreMapping, getNowPlaying } from "../_action/data_service";
import { Button, Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default async function CarouselMovie() {
  const data = await getNowPlaying();
  const genresData = await genreMapping();
  const genres = genresData.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});
  return (
    <div className="relative flex justify-center items-center z-0 top-1 max-w-[1920px] mx-auto h-[721px] ">
      <Carousel slideInterval={5000} indicators={false}>
        {data.results.map((movie) => (
          <div key={movie.id} className="relative h-full w-full">
            <Image
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={movie.title}
              fill
              className="object-cover z-10"
              quality={80}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 z-20 text-white">
              <div className="w-1/3 ml-20">
                <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
                <p className="flex gap-2 mb-5">
                  {movie.genre_ids.map((genreId, index) => (
                    <span key={genreId}>
                      {genres[genreId]}
                      {index !== movie.genre_ids.length - 1 && ", "}
                    </span>
                  ))}
                  <span>|</span>
                  <span>{movie.release_date.split("-")[0]}</span>
                </p>
                <p className="text-slate-50/90 mb-10">{movie.overview}</p>
                <Link
                  href={`/movie/${movie.id}`}
                  className="flex gap-4 px-6 py-3 rounded justify-center items-center w-fit bg-slate-50/20 hover:bg-slate-50/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-red-600 flex justify-center items-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-50 font-medium text-md">Play now</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
