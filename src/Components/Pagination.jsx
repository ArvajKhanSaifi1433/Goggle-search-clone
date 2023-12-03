import React, { useEffect, useState } from "react";
import { Paginations } from "../utils/Constants";
import googlePagination from "../Assets/google-pagination-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination({ queries }) {
  const { query } = useParams();
  const [page, setPage] = useState(Paginations[0].startIndex);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(Paginations[0].startIndex);
    navigate(`/${query}/${1}`);
  }, [query]);

  const paginationClickHandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };
  
  return (
    <div className="flex flex-col items-center py-14 max-w-2xl">
      <div className="relative text-[#4285f4]">
        {queries.previousPage && (
          <div
            className="absolute left-[-25px] md:left-[-40px] top-[10px]"
            onClick={() =>
              paginationClickHandler(queries.previousPage[0].startIndex)
            }
          >
            <FiChevronLeft size={20} className="cursor-pointer" />
            <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              prev
            </div>
          </div>
        )}
        <img src={googlePagination} alt="" className="w-60 md:w-80" />
        {queries.nextPage && (
          <div
            className="absolute right-[-25px] md:right-[-40px] top-[10px]"
            onClick={() =>
              paginationClickHandler(queries.nextPage[0].startIndex)
            }
          >
            <FiChevronRight size={20} className="cursor-pointer" />
            <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              next
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-3 text-[#4285f4] text-sm">
        {Paginations.map((p) => {
          return (
            <span
              className={`cursor-pointer hover:text-black ${
                page === p.startIndex ? "text-black" : ""
              }`}
              key={crypto.randomUUID()}
              onClick={() => paginationClickHandler(p.startIndex)}
            >
              {p.page}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
