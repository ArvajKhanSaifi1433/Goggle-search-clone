import React from "react";

function SearchedImageItemTemplate({ item }) {
  return (
    <div
      onClick={() => window.open(item.image.contextLink)}
      className="group flex flex-col py-3 cursor-pointer"
    >
      <div className="rounded-xl overflow-hidden bg-black/[0.03] h-96  group-hover:shadow-c">
        <img src={item.link} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="text-sm text-[#70757a] pt-1">{item.displayLink}</div>
      <div className="text-sm text-[#3c4043] truncate pt-1 group-hover:underline">
        {item.title}
      </div>
    </div>
  );
}

export default SearchedImageItemTemplate;
