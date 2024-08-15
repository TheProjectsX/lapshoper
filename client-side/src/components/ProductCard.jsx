import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div key={item._id} className="p-3 bg-slate-800 flex flex-col">
      <div className="w-full h-72 flex justify-center items-center bg-white">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="divider mt-0 mb-1"></div>
      <h3 className="font-lato font-semibold dark:text-white mb-3">
        {item.name}
      </h3>
      <p className="underline underline-offset-4 font-semibold mb-3">
        Description:
      </p>
      <ul className="pl-6 list-disc space-y-2 mb-3 text-sm flex-grow">
        {item.description.map((desc, idx) => (
          <li key={idx} className="ml-2">
            {desc}
          </li>
        ))}
      </ul>
      <div className="divider m-0"></div>
      <h4 className="flex justify-around gap-2 mb-2">
        <p className="text-2xl font-semibold text-[dodgerBlue]">
          {item.price} tk
        </p>{" "}
        <span className="flex gap-2 items-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
          >
            <path
              d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838"
              stroke="yellow"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>{" "}
          {item.ratings} /5.0
        </span>
      </h4>
      <div className="flex justify-between gap-2">
        <p>
          <span className="font-semibold">Category: </span> {item.category}
        </p>
        <p>
          <span className="font-semibold">Brand: </span> {item.brand}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
