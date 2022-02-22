import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStore, useDispatch } from '../../../store/StoreProvider';
import types from '../../../store/types';
import Card from '../../Card/Card';
import Section from '../../Section/Section';
import Photo from '../../Photo/Photo';

const ProductDetail = () => {
  const { product } = useStore();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: types.GET_PRODUCT_BY_ID,
      payload: id,
    });
  }, [dispatch, id]);

  return (
    <>
      <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
        Back
      </button>
      <Card>
        <Section title={product.title} />
        <div className="row">
          <div className="col-4">
            <Photo photo={product.photo} title={product.title} />
          </div>
          <div className="col-8">
            <h5>Description.</h5>
            <span>{product.description}</span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductDetail;
