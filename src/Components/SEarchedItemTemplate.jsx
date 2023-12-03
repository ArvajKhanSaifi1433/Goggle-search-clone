import React from "react";

function SEarchedItemTemplate({ item }) {
  function createMarkup(htm) {
    return { __html: htm };
  }
  return (
    <div className="flex flex-col py-3 max-w-2xl">
      <div className="group cursor-pointer" onClick={() => window.open(item.link)}>
        <div className="text-sm truncate text-[#202124]">
          {item.formattedUrl}
        </div>
        <div className="group-hover:underline text-xl text-[#1a0dab] p1-2">
          {item.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] leading-snug pt-1"
        dangerouslySetInnerHTML={createMarkup(item.htmlSnippet)}
      />
    </div>
  );
}

export default SEarchedItemTemplate;
