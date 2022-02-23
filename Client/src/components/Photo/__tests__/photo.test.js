import React from 'react';
import Photo from '../Photo';
import { render, fireEvent, queryByAttribute } from '@testing-library/react';
import ImgUser from './files/users.png';

describe('Photo component --> <Photo />', () => {
  let component;
  let id = 'testID';
  let title = 'testTitle';
  const getById = queryByAttribute.bind(null, 'id');

  beforeEach(() => {
    component = render(<Photo id={id} photo={ImgUser} title={title} />);
  });

  it('should render the component hiding the div modal.', () => {
    const element = getById(component.container, `${id}-modal`);

    expect(element).toHaveStyle('display: none');
  });

  it('should show the modal after clicking the image', () => {
    const mainImgElement = getById(component.container, `${id}-main`);
    const modalElement = getById(component.container, `${id}-modal`);

    fireEvent.click(mainImgElement);
    expect(modalElement).toHaveStyle('display: block');
  });

  it('should hide the modal after clicking the large image', () => {
    const mainImgElement = getById(component.container, `${id}-main`);
    const largeImgElement = getById(component.container, `${id}-largeImg`);
    const modalElement = getById(component.container, `${id}-modal`);

    fireEvent.click(mainImgElement);
    fireEvent.click(largeImgElement);
    expect(modalElement).toHaveStyle('display: none');
  });
});
