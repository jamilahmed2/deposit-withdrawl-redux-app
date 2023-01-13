import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
    const amount = useSelector((state) => state.amount)
  return (
    <>
      <button type="button" disabled className="btnd">
        Your Balance ${amount}
      </button>
    </>
  );
};

export default Balance;
