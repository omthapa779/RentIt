import React from 'react';
import '../../styles/Global.css';

const PrimaryButton = ({ children, onClick, className = '', size = 'large' }) => {
  return (
    <button
      onClick={onClick}
      className={`text_white border_none bg_primary ${size === 'small' ? 'padding_button_small' : 'padding_button'} ${className}`}
    >
      <h4>{children}</h4>
    </button>
  );
};

export default PrimaryButton;
