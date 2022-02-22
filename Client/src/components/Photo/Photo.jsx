import React, { useState } from 'react';
import Styles from './Photo.module.css';

const Photo = ({ title, photo }) => {
  const [show, setShow] = useState(false);
  const modalStyle = show ? { display: 'block' } : { display: 'none' };

  return (
    <div>
      <img
        alt={title}
        className={`${Styles.cursorInfo} img-fluid img-thumbnail`}
        src={photo}
        onClick={() => setShow(!show)}
      ></img>

      <div className={Styles.modal} style={modalStyle} onClick={() => setShow(false)}>
        <div className={Styles.modalImage}>
          <img alt={title} className="img-fluid img-thumbnail w-100" src={photo}></img>
        </div>
      </div>
    </div>
  );
};
export default Photo;
