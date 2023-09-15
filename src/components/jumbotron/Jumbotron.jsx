import Image from "next/image";
import { NavBar } from "../navbar/NavBar";

export const Jumbotron = () => {
  return (
    // main page banner
    <div
      className="relative overflow-hidden bg-cover bg-center w-screen h-[600px] "
      style={{ backgroundImage: "url('/poster.png')" }}>
      <NavBar />
      <div className="text-white block absolute top-32 px-8 md:px-16 md:w-5/12">
        <h1 className="text-6xl font-semibold">John Wick 3: Parabellum</h1>
        <div className="flex w-full space-x-4">
          <span className="flex w-6/12 space-x-2 py-4">
            <Image src="/imdb.png" alt="logo" height={17} width={35} />
            <p className="text-lg font-extralight tracking-wide">7.4/100</p>
          </span>
          <span className="flex w-6/12 space-x-2 py-4">
            <Image src="/tomato.png" alt="logo" height={10} width={17} />
            <p className="text-lg font-extralight tracking-wide">97%</p>
          </span>
        </div>
        <p className="py-4 text-lg font-extralight tracking-wide">
          John Wick is on the run after killing a member of the international
          assassins guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="flex uppercase px-6 py-2 rounded bg-[#BE123C] space-x-2 border border-[#BE123C]">
          <svg
            width="16"
            height="16"
            className="mt-1"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5547 5.16795C7.24784 4.96338 6.8533 4.94431 6.52814 5.11833C6.20298 5.29235 6 5.63121 6 6V10C6 10.3688 6.20298 10.7077 6.52814 10.8817C6.8533 11.0557 7.24784 11.0366 7.5547 10.8321L10.5547 8.83205C10.8329 8.64659 11 8.33435 11 8C11 7.66565 10.8329 7.35342 10.5547 7.16795L7.5547 5.16795Z"
              fill="white"
            />
          </svg>
          <h2>Watch trailer</h2>
        </button>
      </div>
    </div>
  );
};
