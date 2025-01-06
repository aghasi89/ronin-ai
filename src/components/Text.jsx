import React from 'react';
import PropTypes, { string } from 'prop-types';

const styles = {
    yellow: 'text-[#F1C42E]',
    white: 'text-[#FFFFFF]',
    black: 'text-[#000000]',
    gray: 'text-[#667373]',
    default:  `text-[1.7rem] font-normal`,
    title: `text-8xl`,
    xl: `text-xl`,
    lg: `text-lg`,
    normal: `font-normal`,
    small: `text-sm font-normal`,
    middle: `text-3xl font-normal`,
    big:"text-5xl",
    bold:"font-bold",
    base : "font-base",
    upper: "uppercase",
    line33: "leading-[33px]",
};
const Text = ({ children,className, ...rest}) => {
    if (!children) {
        return <div>Error: Text not provided</div>;
    }
    const classNameParams = Object.keys(rest).map((key) => styles[key]).join(' ');
    return <span className={`${classNameParams} ${className}`}>{children}</span>;
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
};

Text.defaultProps = {
    type: 'default',
    color: 'black',
};

export default Text;