import axios from "axios";
import Item from "./Item";
import Loader from "./Loader";
import { useState } from "react";
import useSize from "../../hooks/useSize";
import ENDPOINT_URL from "./../../config/endpoint";
import resetIcon from "../../assets/icons/reset.svg";
import searchIcon from "../../assets/icons/search.svg";

const Search = () => {
  const { width } = useSize();
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a valid username.");
      return;
    }
    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await axios.get(`${ENDPOINT_URL}${query.trim()}`);
      if (response.status === 200) {
        if (response.data.items.length === 0) {
          setError("No results found.");
        } else {
          setData(response.data);
        }
      } else {
        throw new Error("Unexpected response status.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setQuery("");
    setData(null);
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center gap-[26px] w-full">
        <div
          className={`flex justify-between ${
            width < 580 && "flex-col"
          } w-full gap-[24px] mt-[60px] px-[2%]`}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter github username"
            className="min-w-[200px] min-h-[60px] w-[100%] text-[22px] p-2 rounded-lg px-[16px] outline-none bg-slate-400 text-black placeholder:text-gray-700"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-[20px] px-4 py-2 bg-blue-600 h-[60px] min-w-[160px] rounded-lg hover:bg-blue-700 outline-none"
          >
            <p className="text-white text-[22px]">Search</p>
            <img src={searchIcon} alt="Search" className="w-[27px]" />
          </button>
        </div>
        {data && (
          <div className="w-full px-[2%]">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-[20px] px-4 py-2 bg-gray-700 h-[60px] min-w-[140px] rounded-lg hover:bg-gray-800 outline-none"
            >
              <p className="text-white text-[22px]">Reset</p>
              <img src={resetIcon} alt="Reset" className="w-[27px]" />
            </button>
          </div>
        )}
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-[30px] font-semibold text-red-600 mt-[200px]">
          {error}
        </div>
      ) : data?.items?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] w-full my-[50px] px-[2%]">
          {data.items.map((user) => (
            <Item key={user.id} data={user} />
          ))}
        </div>
      ) : (
        <div className="md:text-[25px] sm:text-[18px] text-[16px] text-gray-400 mt-[200px]">
          Search a Github username to search
        </div>
      )}
    </div>
  );
};

export default Search;
