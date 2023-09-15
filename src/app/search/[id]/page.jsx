"use client";
import Cards from "@/components/cards/Cards";
import { Options } from "@/components/options/Options";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1`,
      Options
    )
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setResults(response.results);
      })
      .catch((err) => setError(true));
  }, []);

  if (error) {
    return (
      <h1 className="text-2xl text-center mt-[50vh]">
        Something went wrong, Please check your connection
      </h1>
    );
  }
  if (loading) {
    return <h1 className="text-2xl text-center mt-[50vh]">Loading...</h1>;
  } else {
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
  }
};

export default SearchPage;
