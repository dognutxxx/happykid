import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function AmountSelect({ quanlity, setQuanlity, setTotalItem, totalItem }) {


  const { cart } = useSelector((state) => state);
  
  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {

    const newMintAmount = mintAmount - 1;
    if(newMintAmount < 1){
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
    setQuanlity((prev) => (prev -= 1));

  };


  const handleIncrement = () => {

    const newMintAmount = mintAmount + 1;
    setMintAmount(newMintAmount);
    setQuanlity((prev) => (prev += 1));

  };

  return (
    <div className="my-6">
      <div>Quantity</div>
      <button onClick={handleDecrement} className="text-2xl mr-2">
        -
      </button>
      {mintAmount}
      <button onClick={handleIncrement} className="text-2xl ml-2">
        +
      </button>
    </div>
  );
}

export default AmountSelect;
