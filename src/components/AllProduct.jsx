import React from "react";
import ProductItems from "./ProductItems";
import { useStore } from "../context/StoreContext";

const AllProduct = () => {
  const { newProduct } = useStore();

  return (
    <>
      <div className="sm:grid grid-cols-2 lg:grid grid-cols-3 gap-4">
        {newProduct.map((item, id) => {
          return (
            <div key={id}>
              <ProductItems item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProduct;
