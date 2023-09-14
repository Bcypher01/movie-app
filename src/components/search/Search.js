"use client";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWM1YzdmZWE3Y2QwMDk2YzFjODAzMzMwOWFjOTM4OCIsInN1YiI6IjY1MDA4YjNmZGI0ZWQ2MTA0MzA5MjVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TEyXUh-T49YkTFYozQwKSDlsmVKq8lJ7ordh1RF6ebw",
    },
  };

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query.trim());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <div className="flex pt-2 pl-2 lg:pl-[14vw]">
      <form onSubmit={onSubmit}>
        <label className="relative block">
          <input
            className="appearance-none border border-white text-white rounded bg-transparent w-[65vw] lg:w-[525px] py-2 px-3 text-gray-700 leading-tight bg-[#F2F2F2] focus:outline-none focus:shadow-outline"
            type="text"
            onChange={onChange}
            placeholder="What do you want to watch?"
          />
          <button
            className="absolute inset-y-0 right-2 flex items-center pl-3"
            type="submit">
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
          </button>
        </label>
      </form>
    </div>
  );
}
