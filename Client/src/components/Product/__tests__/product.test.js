import React from 'react';
import Product from '../Product';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Product component --> <Product />', () => {
  const product = {
    id: '2fcd68fd-31fa-43d1-9e78-95a0ebb403a0',
    photo: 'http',
    title: 'TestTitle',
    shortDescription: 'TestShortDescription',
    description: 'TestDescription',
  };
  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Product product={product} />
      </BrowserRouter>
    );
  });

  it('should not render the description in the component', () => {
    expect(component.container).not.toHaveTextContent(product.description);
  });

  it('should render the title property in the component', () => {
    expect(component.container).toHaveTextContent(product.title);
  });

  it('should render the short description in the component', () => {
    expect(component.container).toHaveTextContent(product.shortDescription);
  });
});
