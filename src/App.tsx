// import { useQuery } from "@tanstack/react-query";
// import ProductList from "./components/productList/ProductList";
// import { fetchProducts, ProductFilters } from "./api/products";
// import { useState } from "react";
// import ProductListFilters from "./components/productList/ProductListFilters";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts, ProductFilters } from "./api/products";
import ProductList from "./components/productList/ProductList";
import ProductListFilters from "./components/productList/ProductListFilters";
import { useState } from "react";

// const App = () => {
//   const [category, setCategory] = useState<ProductFilters["category"]>();
//   const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();
//   const [search, setSearch] = useState<ProductFilters["search"]>("");

//   const { data, isLoading } = useQuery({
//     queryKey: ["products", { category, maxPrice, search }],
//     queryFn: () => fetchProducts({ category, maxPrice, search }),
//   });

//   return (
//     <div>
//       <h1>Products</h1>
//       <ProductListFilters
//         onChange={(filters) => {
//           setCategory(filters.category);
//           setMaxPrice(filters.maxPrice);
//           setSearch(filters.search);
//         }}
//       />

//       {isLoading && <p>Loading...</p>}
//       {data && <ProductList products={data} />}
//     </div>
//   );
// };
// export default App;

const App = () => {
  const [category, setCategory] = useState<ProductFilters["category"]>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();
  const [search, setSearch] = useState<ProductFilters["search"]>();

  const { data, isLoading } = useQuery({
    queryKey: ["products", { category, maxPrice, search }],
    queryFn: () => fetchProducts({ category, maxPrice, search }),
  });

  return (
    <div>
      <h1>Products</h1>

      <ProductListFilters
        onChange={(filters) => {
          setCategory(filters.category);
          setMaxPrice(filters.maxPrice);
          setSearch(filters.search);
        }}
      />
      {isLoading && <div>Loading...</div>}
      {data && <ProductList products={data} />}
    </div>
  );
};
export default App;
