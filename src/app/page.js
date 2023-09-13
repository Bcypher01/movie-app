import Footer from "@/components/footer/Footer";
import { Jumbotron } from "@/components/jumbotron/Jumbotron";
import Post from "@/components/posts/Post";
import Image from "next/image";
import { Suspense } from "react";

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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <Suspense fallback={<h1 className="text-4xl">Loading...</h1>}>
        <Post />
      </Suspense>

      <Footer />
    </main>
  );
}
