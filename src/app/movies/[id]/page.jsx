import Image from "next/image";
import React from "react";

const Posts = () => {
  return (
    <>
      <div className="flex w-screen gap-6">
        <div className="w-3/12 bg-white border-r rounded-3xl h-screen">
          <div className="flex space-x-4 cursor-pointer">
            <Image src="/images/tv.png" alt="logo" height={50} width={50} />
            <h1 className="text-white font-semibold text-white text-[24px] pt-2 hidden sm:flex">
              MovieBox
            </h1>
          </div>
        </div>
        <div className="w-9/12">Post details</div>
      </div>
    </>
  );
};

export default Posts;
