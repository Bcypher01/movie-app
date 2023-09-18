"use client";
import Cards from "@/components/cards/Cards";
import Loader from "@/components/loader/Loader";
import { Options } from "@/components/options/Options";
import { useParams } from "next/navigation";
import useSWR from "swr";

const SearchPage = () => {
  const params = useParams();
  const fetcher = (...args) =>
    fetch(...args, Options).then((response) => response.json());
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1`,
    fetcher
  );
  let results = data && data.results;

  if (error)
    return (
      <h1 className="text-2xl text-center mt-[50vh]">
        Something went wrong, Please check your connection
      </h1>
    );

  if (isLoading) return <Loader uniqueKey="movies" />;
  return (
    <div className="justify-center items-center">
      <h3 className="text-center text-2xl font-semibold mt-8">
        We found {results && results.length} results
      </h3>
      <div className="my-6">
        <Cards data={results && results} />
      </div>
    </div>
  );
};

export default SearchPage;
