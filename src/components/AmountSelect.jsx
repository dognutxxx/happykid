import React from "react";
import { useState } from "react";

function AmountSelect() {
  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  //Set maxMint
  const handleIncrement = () => {
    let newMintAmount = mintAmount + 1;
    // if (newMintAmount > 100) {
    //   newMintAmount = 100;
    // }
    setMintAmount(newMintAmount);
  };

  return (
    <div className="my-6">
      <p>Quantity</p>
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
