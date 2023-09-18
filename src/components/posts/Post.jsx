"use client";

import Cards from "../cards/Cards";
import Loader from "../loader/Loader";
import { Options } from "../options/Options";
import useSWR from "swr";

const Post = () => {
  const fetcher = (...args) =>
    fetch(...args, Options).then((response) => response.json());
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated",
    fetcher
  );
  let results = data && data.results;
  let topTen = results && results.slice(0, 10);
  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/top_rated", Options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       let results = response.results;
  //       // get top 10 from data
  //       let topTen = results && results.slice(0, 10);
  //       setData(topTen);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  if (error)
    return (
      <div className="text-3xl font smibold text-center">
        Something went wrong, Please check your connection and try again
      </div>
    );
  if (isLoading) return <Loader uniqueKey="movies" />;

  return (
    // display movie cards
    <div className="justify-center items-center">
      <Cards data={topTen} />
    </div>
  );
};

export default Post;
