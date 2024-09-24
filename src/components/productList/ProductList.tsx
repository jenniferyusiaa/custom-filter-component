// import { Product } from "../../types/product";

import { Product } from "../../types/product";

// type ProductListProps = {
//   products: Product[];
// };

// const ProductList = ({ products }: ProductListProps) => {
//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <div>
//             <h2>Name: {product.name}</h2>
//             <p>Price: ${product.price}</p>
//           </div>
//           <p>Category: {product.category}</p>
//           <img src={product.image} alt={product.name} />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ProductList;

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <h2>Name: {product.name}</h2>
            <p>Price: {product.price}</p>
          </div>
          <p>Category: {product.category}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};
export default ProductList;
