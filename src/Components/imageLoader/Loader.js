import React from "react";
import { MoonLoader } from "react-spinners";
import override from "./style";

function ImageLoader({ loading, size }) {
  return (
    <MoonLoader
      loading={loading}
      size={size || 60}
      css={override}
      color="#2D4059"
    />
  );
}

export default ImageLoader;
