import React from 'react';
import { useStore } from '../../store/StoreProvider';
import Section from '../Section/Section';
import ImgWalletProduct from '../../content/images/walletProduct.png';
import Product from './Product';
import Search from '../Search';
import Card from '../Card/Card';

const ProductList = () => {
  const { products } = useStore();

  return (
    <>
      <div className="row">
        <Card>
          <Section imgSrc={ImgWalletProduct} title="Search products" />
          <Search />
        </Card>
      </div>

      {products.length > 0 && (
        <div className="row">
          <Card>
            <div className="row">
              {products.map(product => (
                <div key={product.id} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <Product key={product.id} product={product} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProductList;
