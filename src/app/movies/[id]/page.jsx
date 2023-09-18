"use client";
import { Sidebar } from "@/components/sidebar/Sidebar";
// import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Options } from "@/components/options/Options";
import useSWR from "swr";
import ContentLoader from "react-content-loader";

const Posts = () => {
  const params = useParams();

  // get id from url
  const path = "https://api.themoviedb.org/3/movie/" + params.id;

  const fetcher = (...args) =>
    fetch(...args, Options).then((response) => response.json());
  const { data, error, isLoading } = useSWR(path, fetcher);

  let movieImage =
    data && "https://image.tmdb.org/t/p/original" + data.backdrop_path;
  let genres = data && data.genres;
  let date = data && new Date(data.release_date);
  let utc = data && date.toUTCString();

  if (error) {
    return (
      <h1 className="text-2xl text-center mt-[50vh]">
        Something went wrong, Please check your connection
      </h1>
    );
  }
  if (isLoading)
    return (
      <div className="grid ml-[30%] place-items-center">
        <ContentLoader
          speed={2}
          width={1000}
          height={560}
          viewBox="0 0 1000 560"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          uniqueKey="movies">
          <rect x="6" y="358" rx="2" ry="2" width="183" height="13" />
          <rect x="6" y="337" rx="2" ry="2" width="50" height="9" />
          <rect x="0" y="60" rx="2" ry="2" width="496" height="256" />
          <rect x="7" y="379" rx="2" ry="2" width="30" height="15" />
          <rect x="147" y="378" rx="2" ry="2" width="30" height="15" />
        </ContentLoader>
      </div>
    );

  return (
    <>
      <div className="flex w-screen">
        <Sidebar />
        <div className="w-full">
          <div className="my-8 mx-4">
            <div
              className="relative overflow-hidden bg-cover bg-center w-full rounded-lg h-[449px] "
              style={{ backgroundImage: `url(${movieImage})` }}></div>

            <div className="md:flex w-full gap-2 p-4">
              <div className="md:w-9/12">
                <div className="flex">
                  <span className="md:flex">
                    <h1
                      className="font-bold md:text-xl"
                      data-testid="movie-title">
                      {data.title}
                    </h1>
                  </span>

                  <div className="flex ml-auto md:px-12 pt-1 space-x-3">
                    {genres?.map((genre) => (
                      <h4
                        className="text-sm font-semibold text-[#b91c1c]"
                        key={genre.id}>
                        {genre.name}
                      </h4>
                    ))}
                  </div>
                </div>
                <span className="flex mt-1.5">
                  <h1
                    className="text-xs md:text-sm"
                    data-testid="movie-release-date">
                    {utc.slice(0, 16)}
                  </h1>
                  {"•"}
                  <h1
                    className="text-xs md:text-sm"
                    data-testid="movie-runtime">
                    {data.runtime} minutes
                  </h1>
                </span>
                <p className="py-6 md:text-lg" data-testid="movie-overview">
                  {data.overview}
                </p>

                <div className="space-y-6">
                  <span className="flex space-x-2">
                    <h3 className="text-sm md:text-lg">Director:</h3>
                    <h3 className="text-sm md:text-lg text-[#b91c1c]">
                      Joseph Kosinski
                    </h3>
                  </span>
                  <span className="flex space-x-2">
                    <h3 className="text-sm md:text-lg">Writers:</h3>
                    <h3 className="text-sm md:text-lg text-[#b91c1c]">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </h3>
                  </span>
                  <span className="flex space-x-2">
                    <h3 className="text-sm md:text-lg">Stars:</h3>
                    <h3 className="text-sm md:text-lg text-[#b91c1c]">
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </h3>
                  </span>
                </div>

                <div className="flex my-6">
                  <div className="relative">
                    <div className="absolute top-0 left-0 text-lg">
                      <button className="h-[55px] w-48 text-white rounded-lg bg-[#bE123c]">
                        Top rated movie #85
                      </button>
                    </div>
                    <input
                      type="text"
                      className="h-[55px] w-full md:w-[50vw] pl-56 pr-20 rounded-lg z-0 border focus:shadow focus:outline-none"
                      placeholder="Search anything..."
                    />
                    <div className="absolute top-3 right-3">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 -4.5 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>arrow_down [#338]</title>
                          <desc>Created with Sketch.</desc> <defs> </defs>
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd">
                            <g
                              id="Dribbble-Light-Preview"
                              transform="translate(-220.000000, -6684.000000)"
                              fill="#000000">
                              <g
                                id="icons"
                                transform="translate(56.000000, 160.000000)">
                                <path
                                  d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                                  id="arrow_down-[#338]"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block md:w-3/12">
                <div className="flex pb-4">
                  <span className="ml-auto space-x-2">
                    <h3 className="text-sm md:text-lg">8.3 | 350k</h3>
                  </span>
                </div>
                <div className="block space-y-4">
                  <button className="flex justify-center items-center py-2 md:h-[55px] w-full text-white space-x-2 rounded-lg bg-[#bE123c]">
                    <svg
                      viewBox="-2 0 32 32"
                      height="16px"
                      width="16px"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#ffffff">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>clipboard</title>
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd">
                          <g
                            id="Icon-Set"
                            transform="translate(-466.000000, -99.000000)"
                            fill="#fff">
                            <path
                              d="M487,113 L473,113 C472.447,113 472,113.448 472,114 C472,114.553 472.447,115 473,115 L487,115 C487.553,115 488,114.553 488,114 C488,113.448 487.553,113 487,113 L487,113 Z M492,127 C492,128.104 491.104,129 490,129 L470,129 C468.896,129 468,128.104 468,127 L468,107 C468,105.896 468.896,105 470,105 L473,105 L473,109 L487,109 L487,105 L490,105 C491.104,105 492,105.896 492,107 L492,127 L492,127 Z M475,103 L477.223,103 C477.223,101.896 478.466,101 480,101 C481.534,101 482.777,101.896 482.777,103 L485,103 L485,107 L475,107 L475,103 L475,103 Z M490,103 L487,103 L487,101 L484.307,101 C483.44,99.81 481.846,99 480,99 C478.154,99 476.56,99.81 475.693,101 L473,101 L473,103 L470,103 C467.791,103 466,104.791 466,107 L466,127 C466,129.209 467.791,131 470,131 L490,131 C492.209,131 494,129.209 494,127 L494,107 C494,104.791 492.209,103 490,103 L490,103 Z M487,123 L473,123 C472.447,123 472,123.448 472,124 C472,124.553 472.447,125 473,125 L487,125 C487.553,125 488,124.553 488,124 C488,123.448 487.553,123 487,123 L487,123 Z M487,118 L473,118 C472.447,118 472,118.448 472,119 C472,119.553 472.447,120 473,120 L487,120 C487.553,120 488,119.553 488,119 C488,118.448 487.553,118 487,118 L487,118 Z"
                              id="clipboard"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h4 className="dark:text-white text-lg">See Showtimes</h4>
                  </button>
                  <button className="flex justify-center items-center md:h-[55px] py-4 w-full text-white space-x-2 rounded-lg bg-[#be123c1a]">
                    <svg
                      viewBox="0 -1 28 28"
                      height="16px"
                      width="16px"
                      className="ml-2"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#000000">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>align-left</title>
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd">
                          <g
                            id="Icon-Set"
                            transform="translate(-308.000000, -206.000000)"
                            fill="#000000">
                            <path
                              d="M335,222 L309,222 C308.447,222 308,222.448 308,223 C308,223.553 308.447,224 309,224 L335,224 C335.553,224 336,223.553 336,223 C336,222.448 335.553,222 335,222 L335,222 Z M324,230 L309,230 C308.447,230 308,230.447 308,231 C308,231.553 308.447,232 309,232 L324,232 C324.553,232 325,231.553 325,231 C325,230.447 324.553,230 324,230 L324,230 Z M309,208 L335,208 C335.553,208 336,207.553 336,207 C336,206.448 335.553,206 335,206 L309,206 C308.447,206 308,206.448 308,207 C308,207.553 308.447,208 309,208 L309,208 Z M309,216 L327,216 C327.553,216 328,215.553 328,215 C328,214.448 327.553,214 327,214 L309,214 C308.447,214 308,214.448 308,215 C308,215.553 308.447,216 309,216 L309,216 Z"
                              id="align-left"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h4 className="text-black dark:text-white text-lg">
                      More watch options
                    </h4>
                  </button>
                </div>
                <div
                  className="relative overflow-hidden bg-cover bg-center w-full rounded-lg h-[229px] my-8"
                  style={{
                    backgroundImage: "url('/Rectangle-sm.png')",
                  }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
