import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className=" w-[350px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className=" h-full flex items-center justify-center md:text-sm text-xs">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart
              size={30}
              className="absolute top-4 left-4 text-gray-400"
            />
          ) : (
            <FaRegHeart
              size={30}
              className="absolute top-4 left-4 text-gray-400"
            />
          )}
        </p>
      </div>
    </div>
  );
};
