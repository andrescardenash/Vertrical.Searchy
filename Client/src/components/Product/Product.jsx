import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../Photo/Photo';

const Product = ({ product }) => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <Photo id={product.id} photo={product.photo} title={product.title} />
        </div>
        <div className="col-8">
          <Link to={`/product/detail/${product.id}`}>
            <small className="card-title text-left">{product.title}</small>
          </Link>
          <p className="card-title text-right">{product.shortDescription}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
