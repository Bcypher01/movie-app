import Image from "next/image";

export const NavBar = () => {
  return (
    <div className="w-full absolute flex px-2 lg:px-16 py-4 h-[80px]">
      <div className="flex space-x-4 cursor-pointer">
        <Image src="/images/tv.png" alt="logo" height={50} width={50} />
        <h1 className="text-white font-semibold text-white text-[24px] pt-2 hidden sm:flex">
          MovieBox
        </h1>
      </div>
      <div className="flex pt-2 pl-4 lg:pl-[8vw]">
        <label className="relative block">
          <input
            className="appearance-none border border-white text-white rounded bg-transparent lg:w-[525px] py-2 px-3 text-gray-700 leading-tight bg-[#F2F2F2] focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="What do you want to watch?"
          />
          <span className="absolute inset-y-0 right-2 flex items-center pl-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </label>
      </div>

      <div className="flex ml-auto pt-1 text-white space-x-3">
        <h1 className="text-sm pt-2 hidden md:flex cursor-pointer">Sign In</h1>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          className="cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="18" fill="#BE123C" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.59998 14.4C9.59998 13.7373 10.1372 13.2 10.8 13.2H25.2C25.8627 13.2 26.4 13.7373 26.4 14.4C26.4 15.0628 25.8627 15.6 25.2 15.6H10.8C10.1372 15.6 9.59998 15.0628 9.59998 14.4Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.59998 21.6C9.59998 20.9373 10.1372 20.4 10.8 20.4H25.2C25.8627 20.4 26.4 20.9373 26.4 21.6C26.4 22.2628 25.8627 22.8 25.2 22.8H10.8C10.1372 22.8 9.59998 22.2628 9.59998 21.6Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
