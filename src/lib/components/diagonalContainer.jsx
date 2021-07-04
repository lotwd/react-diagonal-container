import React from 'react'
import './styles.css'

const DiagonalContainer = (
    {
        flip=false,
        magnitude='small',
        flattenTop=false,
        flattenBottom=false,
        containerTopBackgroundColor = null, 
        containerBottomBackgroundColor = null, 
        containerBackground = 'transparent', 
        spacingAfter='150px',
        background = 'black', 
        shadow = false,
        borderWidth = '0px',
        borderColor = 'transparent',
        roundedCorners = false,
        tiltContent = false,
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
    const boxShadow = shadow && !flattenTop && !flattenBottom ? " shadow" : ""
    const borderRadius = roundedCorners && !flattenTop && !flattenBottom ? " rounded" : ""
    const border = borderWidth && borderColor && !flattenTop && !flattenBottom ? `${borderWidth} solid ${borderColor}` : ""
    const tiltedContent = tiltContent ? " tilt" : ""
    return (
        <>
        <div style={{background:rootBackgroundColor}} className={"root" + cropTop + cropBottom}>
            <div style={{background:background, border:border}} className={"content-container" + flipClass + magClass + boxShadow + borderRadius} >
                <div className={"content" + tiltedContent + flipClass + magClass}>
                    {children}  
                </div>  
            </div>        
        </div>
        <div style={{backgroundColor:containerBottomBackgroundColor ? containerBottomBackgroundColor : containerBackground, height:spacingAfter, color:"white"}}/>
        </>
    )
}

export default DiagonalContainer