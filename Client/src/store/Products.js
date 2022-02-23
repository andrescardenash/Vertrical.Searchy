const getProducts = async title => {
  const path = `${process.env.REACT_APP_SERVER}/products?title=${title}`;
  const response = await fetch(path);
  const products = await response.json();

  return products;
};

export default getProducts;
