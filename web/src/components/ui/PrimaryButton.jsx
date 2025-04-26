import React from 'react';
import '../../styles/Global.css';

const PrimaryButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`text_white padding_button bg_primary border_none`}
    >
      <h4>{children}</h4>
    </button>
  );
};

export default PrimaryButton;
