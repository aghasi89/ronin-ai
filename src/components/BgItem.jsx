import React from 'react';

const BgItem = ({children, item, className,wrapper}) => {
   
            return (
                <div className={`relative ${wrapper}`}>
                    {children}
                    <img src={item} className={`absolute ${className}`}/>
                </div>
            );
        }
   
export default BgItem;