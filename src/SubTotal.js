import React, { useState } from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function SubTotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      {/* button */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items: {basket.price})<strong></strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={""}
        displayType={"text"}
        thousandSeperator={true}
        prefiex={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
