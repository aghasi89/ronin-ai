import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  yelloFull: 'bg-[#F1C42E] rounded-[10px] text-[#000] font-bold text-lg py-[12px] px-[32px] hover:bg-[#FFD74F] hover:text-[#000]',
};
const Button = ({ onClick, children, type = 'button', className = '' }) => {
    return (
        <button type={type} className={`${styles.yelloFull} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
};

export default Button;