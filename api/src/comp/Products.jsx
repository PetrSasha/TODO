import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
        console.log(filter)
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return(
      <>
        Loading...
      </>
    )
  }

  const ShowProducts = () => {
    return(
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <bitton className="btn btn-outline-dark active me-2">All</bitton>
          <bitton className="btn btn-outline-dark me-2">Men's Clothing</bitton>
          <bitton className="btn btn-outline-dark me-2">Women's Clothing</bitton>
          <bitton className="btn btn-outline-dark me-2">Kid's Clothing</bitton>
        </div>

        {filter.map((product) => {
          return(
            <>
            <div className="col-md-3 mb-4 ">
              <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height={'150px'} />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                    <p className="card-text">${product.price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
            </div>
            </>
          )
        })}
      </>
    )
  }

  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bold text-center">Latest Products </h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                  {loading? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
};

export default Products;
