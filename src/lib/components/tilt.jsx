import React from 'react'
import './styles.css'

const Tilt = (
    {
        flip,
        magnitude,
        flattenTop,
        flattenBottom,
        containerTopBackgroundColor, 
        containerBottomBackgroundColor, 
        containerBackground, 
        spacingAfter,
        background, 
        children
    }) => {
    const rootBackgroundColor = containerTopBackgroundColor && containerBottomBackgroundColor
    ? 
        `linear-gradient(0deg, ${flattenBottom ? background : containerBottomBackgroundColor} 50%, ${flattenTop ? background : containerTopBackgroundColor} 50%)` 
    : 
    flattenTop && flattenBottom
    ?
        background
    :
    flattenTop || flattenBottom
    ?
        `linear-gradient(0deg, ${flattenBottom ? background : containerBackground} 0%, ${flattenBottom ? background : containerBackground} 50%, ${flattenTop ? background : containerBackground} 50%, ${flattenTop ? background : containerBackground} 0%)`
    :
    containerBackground
    ?
        containerBackground
    :
        `transparent`
    const flipClass = flip ? " flip" : ""
    const magClass = magnitude ? " " + magnitude : ""
    const cropTop = flattenTop ? " cropTop" : ""
    const cropBottom = flattenBottom ? " cropBottom" : ""
    return (
        <>
        <div style={{background:rootBackgroundColor}} className={"root" + cropTop + cropBottom}>
            <div style={{background:background}} className={"content-container" + flipClass + magClass} >
                <div className={"content" + flipClass + magClass}>
                    {children}  
                </div>  
            </div>        
        </div>
        <div style={{backgroundColor:containerBottomBackgroundColor ? containerBottomBackgroundColor : containerBackground, height:spacingAfter, color:"white"}}/>
        </>
    )
}

export default Tilt