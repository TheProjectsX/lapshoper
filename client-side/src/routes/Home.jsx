import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { Pagination } from "flowbite-react";

const Home = () => {
  const [productsDataMain, filterData] = useLoaderData();
  const [pageLoading, setPageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 15;

  // Filters
  const [priceSortBy, setPriceSortBy] = useState("");
  const [newestFirst, setNewestFirst] = useState(false);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterBrands, setFilterBrands] = useState([]);
  const [priceRangeMin, setPriceRangeMin] = useState(0);
  const [priceRangeMax, setPriceRangeMax] = useState(filterData.maxPrice ?? 0);

  if (!productsDataMain.success) {
    return <div>ERROR!</div>;
  }

  const [productsData, setProductsData] = useState(productsDataMain);
  useEffect(() => {
    if (productsData && productsData.count !== undefined) {
      const count =
        productsData.count < itemsPerPage ? itemsPerPage : productsData.count;
      setTotalPages(Math.ceil(count / itemsPerPage));
    }
  }, [productsData]);

  useEffect(() => {
    const loadData = async () => {
      setPageLoading(true);
      const priceRange = `${priceRangeMin}-${priceRangeMax}`;
      const categories = filterCategories.join(",");
      const brands = filterBrands.join(",");

      const skip = itemsPerPage * (currentPage - 1);
      const res = await fetch(
        `${
          import.meta.env.VITE_SERVER_URL
        }/products?skip=${skip}&limit=${itemsPerPage}&priceSortBy=${priceSortBy}&newestFirst=${newestFirst}&priceRange=${priceRange}&categories=${categories}&brands=${brands}`
      );

      const data = await res.json();
      setProductsData(data);
      setPageLoading(false);
      setTotalPages(data.count ?? 0);
    };
    loadData();
  }, [currentPage, priceSortBy, newestFirst]);

  const applyFilter = async () => {
    const priceRange = `${priceRangeMin}-${priceRangeMax}`;
    const categories = filterCategories.join(",");
    const brands = filterBrands.join(",");

    setPageLoading(true);
    setCurrentPage(1);

    const skip = 0;
    const res = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }/products?skip=${skip}&limit=${itemsPerPage}&priceSortBy=${priceSortBy}&newestFirst=${newestFirst}&priceRange=${priceRange}&categories=${categories}&brands=${brands}`
    );

    const data = await res.json();
    setProductsData(data);
    setPageLoading(false);
    setTotalPages(data.count ?? 0);

    document.getElementById("my_modal_2").close();
  };

  const Checkbox = ({ label, state, setState }) => {
    return (
      <label className="flex items-center gap-2.5">
        <input
          type="checkbox"
          // name="category"
          onChange={(e) => {
            if (e.target.checked) {
              setState([...state, label]);
            } else {
              setState(state.filter((item) => item !== label));
            }
          }}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
          checked={state.includes(label)}
        />
        {label}
      </label>
    );
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h5 className="text-center font-semibold text-2xl dark:text-white underline underline-offset-4 mb-5">
            Filter Products
          </h5>
          <div className="p-4 rounded-lg min-w-72 max-h-[600px] overflow-auto">
            <div>
              <p className="text-xl font-semibold dark:text-white">Price:</p>
              <label>
                <p className="flex justify-between items-center">
                  <span>Min:</span>
                  <input
                    type="number"
                    className="bg-transparent text-right"
                    style={{
                      border: "none",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    min={0}
                    max={filterData.maxPrice - 1}
                    value={priceRangeMin}
                    onChange={(e) => setPriceRangeMin(e.target.value)}
                  />
                </p>
                <input
                  type="range"
                  min={0}
                  max={filterData.maxPrice - 1}
                  value={priceRangeMin}
                  onChange={(e) => setPriceRangeMin(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
              </label>
              <label>
                <p className="flex justify-between items-center">
                  <span>Max:</span>
                  <input
                    type="number"
                    className="bg-transparent text-right"
                    style={{
                      border: "none",
                      boxShadow: "none",
                      outline: "none",
                    }}
                    min={1}
                    max={filterData.maxPrice}
                    value={priceRangeMax}
                    onChange={(e) => setPriceRangeMax(e.target.value)}
                  />
                </p>
                <input
                  type="range"
                  min={1}
                  max={filterData.maxPrice}
                  value={priceRangeMax}
                  onChange={(e) => setPriceRangeMax(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
              </label>
            </div>
            <div className="divider"></div>
            <div>
              {" "}
              {/* Categories */}
              <p className="text-xl font-semibold dark:text-white mb-4">
                Category:
              </p>
              <div className="px-5 space-y-2">
                {filterData.categories?.map((item) => (
                  <Checkbox
                    label={item}
                    state={filterCategories}
                    setState={setFilterCategories}
                    key={item}
                  />
                ))}
              </div>
            </div>
            <div className="divider"></div>
            <div>
              {" "}
              {/* Categories */}
              <p className="text-xl font-semibold dark:text-white mb-4">
                Brand:
              </p>
              <div className="px-5 space-y-2">
                {filterData.brands?.map((item) => (
                  <Checkbox
                    label={item}
                    state={filterBrands}
                    setState={setFilterBrands}
                    key={item}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pt-6 flex justify-center">
            <button className="btn btn-primary" onClick={applyFilter}>
              Apply
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <h4 className="text-center text-2xl font-semibold dark:text-white mb-7 underline underline-offset-4">
        Choose your PC parts easily!
      </h4>
      <div className="mb-6 flex justify-between gap-5 items-center">
        <button
          className="btn btn-neutral"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Filter
          <svg
            className="w-5"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>Filter</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Filter">
                <rect
                  id="Rectangle"
                  fillRule="nonzero"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                ></rect>
                <line
                  x1="4"
                  y1="5"
                  x2="16"
                  y2="5"
                  id="Path"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="4"
                  y1="12"
                  x2="10"
                  y2="12"
                  id="Path"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="14"
                  y1="12"
                  x2="20"
                  y2="12"
                  id="Path"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="8"
                  y1="19"
                  x2="20"
                  y2="19"
                  id="Path"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></line>
                <circle
                  id="Oval"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  cx="18"
                  cy="5"
                  r="2"
                ></circle>
                <circle
                  id="Oval"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  cx="12"
                  cy="12"
                  r="2"
                ></circle>
                <circle
                  id="Oval"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  cx="6"
                  cy="19"
                  r="2"
                ></circle>
              </g>
            </g>
          </svg>
        </button>
        {/* <div className="dropdown">
          <div tabIndex={0} className="dropdown-content z-[1] pt-2 -left-24">
            
          </div>
        </div> */}

        {/* Sort by Price */}
        <div className="flex items-center gap-5">
          <label className="flex gap-5 items-center">
            Sort By:
            <select
              value={priceSortBy}
              onChange={(e) => setPriceSortBy(e.target.value)}
              className="dark:bg-gray-800"
            >
              <option value="">Default</option>
              <option value="high">High &gt; Low</option>
              <option value="low">Low &gt; High</option>
            </select>
          </label>
          {/* Sort by Newest */}
          <button
            className="btn btn-neutral"
            onClick={() => setNewestFirst(!newestFirst)}
          >
            {newestFirst ? "Default" : "Newest First"}
          </button>
        </div>
      </div>
      <div className="grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between mb-10">
        {productsData.data.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))}
      </div>

      <div className="flex overflow-x-auto justify-center gap-3">
        <span
          className={`loading ${pageLoading ? "visible" : "invisible"}`}
        ></span>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          showIcons
        />
        <span className="loading invisible"></span>{" "}
      </div>
    </div>
  );
};

export default Home;
