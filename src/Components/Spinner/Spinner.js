import React from "react";
import { CircleLoader } from "react-spinners";
import override from "./style";

function Spinner({ loading, size }) {
  return (
    <CircleLoader
      loading={loading}
      size={size || 250}
      css={override}
      color="#2D4059"
    />
  );
}

export default Spinner;
