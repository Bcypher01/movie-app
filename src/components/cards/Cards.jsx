import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./card.module.css";

const Cards = ({ data }) => {
  const [active, setActive] = useState(null);
  function like(elem) {
    // add 'active' classs to the element that was clicked
    elem.classList.add("liked");
  }

  return (
    <div className="w-full md:grid md:grid-cols-4 md:gap-4 px-16">
      {data?.map((movie) => {
        let movieImage =
          "https://image.tmdb.org/t/p/original" + movie.poster_path;

        return (
          <div
            className="max-w-[250px] rounded overflow-hidden cursor-pointer"
            data-testid="movie-card"
            key={movie.id}>
            <div className="relative">
              <Image
                height="200"
                width="200"
                alt="poster"
                className="w-full h-[370px]"
                src={movie.poster_path && movieImage}
                data-testid="movie-poster"
              />
              <span>
                <svg
                  width="30"
                  height="30"
                  className="absolute top-2 right-2"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_19260_78)">
                    <ellipse
                      cx="15"
                      cy="15.1842"
                      rx="15"
                      ry="14.6053"
                      fill="#F3F4F6"
                      fillOpacity="0.5"
                    />
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    onClick={() => setActive(movie)}
                    className={`${active == movie && styles.liked}`}
                    d="M8.17157 10.4828C9.73367 8.96185 12.2663 8.96185 13.8284 10.4828L15 11.6236L16.1716 10.4828C17.7337 8.96185 20.2663 8.96185 21.8284 10.4828C23.3905 12.0038 23.3905 14.4698 21.8284 15.9908L15 22.6396L8.17157 15.9908C6.60948 14.4698 6.60948 12.0038 8.17157 10.4828Z"
                    fill="#D1D5DB"
                  />
                  <defs>
                    <filter
                      id="filter0_b_19260_78"
                      x="-2"
                      y="-1.42105"
                      width="34"
                      height="33.2105"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="1"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_19260_78"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_19260_78"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </div>
            <p
              className="text-gray-400 dark:text-white font-semibold py-2 text-xs uppercase"
              data-testid="movie-release-date">
              {movie.release_date}
            </p>
            <div className="py-2">
              <Link href={"/movies/" + movie.id}>
                <div
                  className="font-bold dark:text-white text-xl mb-2"
                  data-testid="movie-title">
                  {movie.title}
                </div>
              </Link>
              <div className="flex">
                <span className="flex space-x-2 py-4">
                  <Image
                    src="/images/imdb.png"
                    alt="logo"
                    height={17}
                    width={35}
                  />

                  <p className=" dark:text-white text-sm font-extralight tracking-wide">
                    {movie.vote_average}/100
                  </p>
                </span>
                <span className="flex space-x-2 py-4 ml-24">
                  <Image
                    src="/images/tomato.png"
                    alt="logo"
                    height={10}
                    width={17}
                  />
                  <p className="text-sm font-extralight tracking-wide">97%</p>
                </span>
              </div>
              <p className="dark:text-white text-gray-400 py-2 text-xs">
                Action, Adventure, Mystery
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
