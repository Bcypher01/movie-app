import { Jumbotron } from "@/components/jumbotron/Jumbotron";
import Image from "next/image";

export default function Home() {
  return (
    <main className="block h-screen w-screen">
      <Jumbotron />
      <div className="flex px-16 py-8">
        <h1 className="text-3xl font-semibold">Featured Posts</h1>
        <span className="flex space-x-2 ml-auto">
          <p>See more</p>
          <svg
            width="9"
            height="15"
            className="mt-1"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 1.66668L7.33333 7.50001L1.5 13.3333"
              stroke="#B91C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-4 px-16">
        <div class="max-w-[250px] rounded overflow-hidden">
          <div
            className="relative bg-center h-[370px]"
            style={{ backgroundImage: "url('/images/post.png')" }}></div>

          <p className="text-gray-700 font-semibold py-2 text-xs uppercase">
            usa 2018 - current
          </p>
          <div class="py-2">
            <div class="font-bold text-xl mb-2">Stranger Things</div>
            <div className="flex">
              <span className="flex space-x-2 py-4">
                <Image
                  src="/images/imdb.png"
                  alt="logo"
                  height={17}
                  width={35}
                />

                <p className="text-sm font-extralight tracking-wide">
                  86.0/100
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
          </div>
        </div>
      </div>
    </main>
  );
}
