import React from 'react';
import PropTypes from 'prop-types';


const InputComponent = ({type, id, placeholder, onChange}) => {
  return (
    <>
      <input type={type} id={id} placeholder={placeholder} onChange={onChange} 
      
        />
    </>
  );
}
export default InputComponent;
