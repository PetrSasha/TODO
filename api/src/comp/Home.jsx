import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0 ">
          <img src="https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg" className="card-img" alt='bg'/>
        <div className="card-img-overlay d-flex flex-column justify-content-center h90">
          <div className="container">
            <h5 className="card-title display-3 fw-bold mb-0">New Season</h5>
            <p className="card-text lead fs-2">
                Grab gear now 
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
