"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Post = () => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWM1YzdmZWE3Y2QwMDk2YzFjODAzMzMwOWFjOTM4OCIsInN1YiI6IjY1MDA4YjNmZGI0ZWQ2MTA0MzA5MjVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TEyXUh-T49YkTFYozQwKSDlsmVKq8lJ7ordh1RF6ebw",
    },
  };
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full md:grid md:grid-cols-4 md:gap-4 px-16">
      {data.map((movie) => {
        let movieImage =
          "https://image.tmdb.org/t/p/original" + movie.poster_path;

        return (
          <div className="max-w-[250px] rounded overflow-hidden" key={movie.id}>
            <div
              className="relative bg-center bg-cover h-[370px]"
              style={{ backgroundImage: `url(${movieImage})` }}>
              <span>
                <svg
                  width="30"
                  height="30"
                  className="ml-auto mr-2"
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

            <p className="text-gray-400 font-semibold py-2 text-xs uppercase">
              {movie.release_date}
            </p>
            <div className="py-2">
              <div className="font-bold text-xl mb-2">{movie.title}</div>
              <div className="flex">
                <span className="flex space-x-2 py-4">
                  <Image
                    src="/images/imdb.png"
                    alt="logo"
                    height={17}
                    width={35}
                  />

                  <p className="text-sm font-extralight tracking-wide">
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
              <p className="text-gray-400 py-2 text-xs">
                Action, Adventure, Mystery
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
