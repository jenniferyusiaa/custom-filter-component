// import { useEffect, useState } from "react";
// import { ProductFilters } from "../../api/products";
// import { useDebounce } from "../../hooks/useDebounce";

import { useEffect, useState } from "react";
import { ProductFilters } from "../../api/products";
import { useDebounce } from "../../hooks/useDebounce";

// type ProductListFiltersProps = {
//   onChange: (filters: ProductFilters) => void;
// };

// const ProductListFilters = ({ onChange }: ProductListFiltersProps) => {
//   const [category, setCategory] = useState<ProductFilters["category"]>();
//   const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();
//   const [search, setSearch] = useState<ProductFilters["search"]>("");

//   const debouncedSearch = useDebounce(search);

//   useEffect(() => {
//     onChange({ category, maxPrice, search: debouncedSearch });
//   }, [category, maxPrice, debouncedSearch]);

//   return (
//     <div>
//       <select
//         value={category}
//         onChange={(e) =>
//           setCategory(e.target.value as ProductFilters["category"])
//         }
//       >
//         <option value="">None</option>
//         <option value="first">First</option>
//         <option value="second">Second</option>
//         <option value="third">Third</option>
//       </select>

//       <select
//         value={maxPrice || ""}
//         onChange={(e) =>
//           setMaxPrice(e.target.value ? Number(e.target.value) : undefined)
//         }
//       >
//         <option value="">None</option>
//         <option value="100">$100</option>
//         <option value="200">$200</option>
//         <option value="300">$300</option>
//       </select>

//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search product..."
//       />
//     </div>
//   );
// };
// export default ProductListFilters;

type ProductListFiltersProps = {
  onChange: (filters: ProductFilters) => void;
};

const ProductListFilters = ({ onChange }: ProductListFiltersProps) => {
  const [category, setCategory] = useState<ProductFilters["category"]>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();
  const [search, setSearch] = useState<ProductFilters["search"]>("");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    onChange({ category, maxPrice, search: debouncedSearch });
  }, [category, maxPrice, debouncedSearch]);

  return (
    <div>
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as ProductFilters["category"])
        }
      >
        <option value="">None</option>
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>

      <select
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      >
        <option value="">None</option>
        <option value="100">$100</option>
        <option value="200">$200</option>
        <option value="300">$300</option>
      </select>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search product..."
      />
    </div>
  );
};
export default ProductListFilters;
