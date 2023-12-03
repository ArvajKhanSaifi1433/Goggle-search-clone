import React, { useEffect, useState } from "react";
import SearchResultHeader from "../Components/SearchResultHeader";
import SearchedImageItemTemplate from "../Components/SearchedImageItemTemplate";
import SEarchedItemTemplate from "../Components/SEarchedItemTemplate";
import Pagination from "../Components/Pagination";
import { useParams } from "react-router-dom";
import { useGoggleContext } from "../utils/ContextApi";
import { fetchDataFromApi } from "../utils/Api";
function SearchResult() {
  const [result, setResult] = useState({});
  const { query, startIndex } = useParams();
  const { imageSearch } = useGoggleContext();

  useEffect(() => {
    fetchSearchResults();
  }, [query, startIndex, imageSearch]);

  const fetchSearchResults = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      setResult(res);
    });
  };

  const { searchInformation, items, queries } = result;

  return Object.keys(result).length === 0 ? (
    "Loading..."
  ) : (
    <div className="flex flex-col min-h-screen">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#78757a] mb-3">
          {`About ${searchInformation?.formattedTotalResults} Results in ${searchInformation?.formattedSearchTime}`}
        </div>
        {imageSearch ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => {
              return (
                <SearchedImageItemTemplate
                  item={item}
                  key={crypto.randomUUID()}
                />
              );
            })}
          </div>
        ) : (
          <>
            {items.map((item) => {
              return (
                <SEarchedItemTemplate item={item} key={crypto.randomUUID()} />
              );
            })}
          </>
        )}
        <Pagination queries={queries} />
      </main>
    </div>
  );
}

export default SearchResult;
