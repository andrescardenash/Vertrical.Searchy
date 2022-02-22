import React, { useState } from 'react';
import types from '../store/types';
import { useStore, useDispatch } from '../store/StoreProvider';

const Search = () => {
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const { getProducts } = useStore();
  const dispatch = useDispatch();

  const handleFilter = async () => {
    if (search.trim() === '') {
      setError('The title is required.');
      setTimeout(() => setError(null), 2000);
    } else {
      const listProducts = await getProducts(search);

      dispatch({
        type: types.GET_PRODUCTS,
        payload: listProducts,
      });
    }
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      setSearch(e.target.value);
      handleFilter();
    }
  };
  return (
    <>
      <div className="row">
        <div className="input-group">
          <div className="col-3">
            <div className="form-outline">
              <input
                className="form-control"
                id="searchId"
                placeholder="type the title's product here"
                type="search"
                value={search}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <button className="btn btn-outline-primary" onClick={async () => await handleFilter()}>
            search
          </button>
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Search;
