import React from "react";
import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-99">
      <PacmanLoader size={60} />
    </section>
  );
};

export default Loader;
