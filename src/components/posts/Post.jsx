"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import { Options } from "../options/Options";

const Post = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      Options
    )
      .then((response) => response.json())
      .then((response) => {
        let results = response.results;
        // get top 10 from data
        let topTen = results && results.slice(0, 10);
        setData(topTen);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    // display movie cards
    <div className="justify-center items-center">
      <Cards data={data} />
    </div>
  );
};

export default Post;
