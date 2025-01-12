import React from "react";
import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <PacmanLoader size={60} />
      <div>
        <h1>Loading... Please Wait</h1>
      </div>
    </section>
  );
};

export default Loader;
