import React from 'react';

const BgItem = ({children, item, className,wrapper,over}) => {
   
            return (
                <div className={`relative ${wrapper}`}>
                    {!over && <img src={item} className={`absolute ${className}`}/>}
                    {children}
                    {over && <img src={item} className={`absolute ${className}`}/>}
                </div>
            );
        }
   
export default BgItem;