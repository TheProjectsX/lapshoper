import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import { Pagination } from "flowbite-react";

const Home = () => {
  const productsDataMain = useLoaderData();
  const [pageLoading, setPageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 15;

  // Filters
  const [priceSortBy, setPriceSortBy] = useState("");
  const [newestFirst, setNewestFirst] = useState(false);

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
      const skip = itemsPerPage * (currentPage - 1);
      const res = await fetch(
        `${
          import.meta.env.VITE_SERVER_URL
        }/products?skip=${skip}&limit=${itemsPerPage}&priceSortBy=${priceSortBy}&newestFirst=${newestFirst}`
      );

      const data = await res.json();
      setProductsData(data);
      setPageLoading(false);
    };
    loadData();
  }, [currentPage, priceSortBy, newestFirst]);

  return (
    <div>
      <div className="mb-6 flex justify-end gap-5 items-center">
        {/* Sort by Price */}
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
