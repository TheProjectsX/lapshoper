import { useRef } from "react";
import { MdOutlineStarBorder } from "react-icons/md";

const ProductCard = ({ item }) => {
    const modalRef = useRef();

    const dt = (
        <>
            {" "}
            <p className="flex justify-between items-center gap-2 flex-wrap mb-3">
                <span className="underline underline-offset-4 font-semibold">
                    Description:
                </span>
                <span>({new Date(item.createdAt).toLocaleString()})</span>
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
                <span className="flex gap-1 items-center">
                    <MdOutlineStarBorder className="text-yellow-200 text-lg" />{" "}
                    {item.ratings} /5.0
                </span>
            </h4>
            <div className="flex justify-between gap-2">
                <p>
                    <span className="font-semibold">Category: </span>{" "}
                    {item.category}
                </p>
                <p>
                    <span className="font-semibold">Brand: </span> {item.brand}
                </p>
            </div>
        </>
    );

    return (
        <>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <div className="w-full flex justify-center items-center bg-white">
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-[228px] h-[228px]"
                        />
                    </div>
                    <div className="divider mt-0 mb-1"></div>
                    <h3 className="font-lato font-semibold dark:text-white mb-3">
                        {item.name}
                    </h3>
                    <p className="flex justify-between items-center gap-2 flex-wrap mb-3">
                        <span className="underline underline-offset-4 font-semibold">
                            Description:
                        </span>
                        <span>
                            ({new Date(item.createdAt).toLocaleString()})
                        </span>
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
                        <span className="flex gap-1 items-center">
                            <MdOutlineStarBorder className="text-yellow-200 text-lg" />{" "}
                            {item.ratings} /5.0
                        </span>
                    </h4>
                    <div className="flex justify-around gap-2">
                        <p>
                            <span className="font-semibold">Category: </span>{" "}
                            {item.category}
                        </p>
                        <p>
                            <span className="font-semibold">Brand: </span>{" "}
                            {item.brand}
                        </p>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div key={item._id} className="p-3 bg-slate-800 flex flex-col">
                <div className="w-full flex justify-center items-center bg-white">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-[228px] h-[228px]"
                    />
                </div>
                <div className="divider mt-0 mb-1"></div>
                <h3 className="font-lato font-semibold dark:text-white mb-1 line-clamp-2 overflow-hidden">
                    {item.name}
                </h3>

                <p className="italic text-sm mb-2"># {item.category}</p>
                <p className="text-xl font-semibold text-[dodgerBlue]">
                    {item.price} tk
                </p>
                <div className="divider m-0 mb-2"></div>

                <button
                    className="btn btn-info btn-sm"
                    onClick={(e) => modalRef.current.showModal()}
                >
                    View Details
                </button>
            </div>
        </>
    );
};

export default ProductCard;
