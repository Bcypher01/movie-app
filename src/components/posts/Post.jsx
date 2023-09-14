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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
      Options
    )
      .then((response) => response.json())
      .then((response) => {
        let results = response.results;
        // get top 10 from data
        let topTen = results.slice(0, 10);
        setData(topTen);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    // display movie cards
    <Cards data={data} />
  );
};

export default Post;
