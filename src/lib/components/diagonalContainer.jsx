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
    const cropTop = flattenTop ? " crop-top" : ""
    const cropBottom = flattenBottom ? " crop-bottom" : ""
    const boxShadow = shadow && !flattenTop && !flattenBottom ? " shadow" : ""
    const borderRadius = roundedCorners && !flattenTop && !flattenBottom ? " rounded" : ""
    const tiltedContent = tiltContent ? " tilt" : ""

    const skewedBorderClasses = "skewed-border" + magClass + flipClass + cropTop + cropBottom + borderRadius + boxShadow
    const unskedBorderClasses = "unskewed-border" + flipClass + cropTop + cropBottom + borderRadius
    
    if(flattenTop && flattenBottom)return(
        <>
            <div style={{border:`${parseInt(borderWidth)}px solid ${borderColor}`, background:background}} className="root no-skew">{children}</div>
        </>
    )
    return (
        <>
        <div style={{background:rootBackgroundColor}} className={"root" + cropTop + cropBottom}>
            <div style={{borderWidth:borderWidth, borderColor:borderColor}} className={skewedBorderClasses}/>
            { flattenTop || flattenBottom ? <div style={{borderWidth:borderWidth, borderColor:borderColor}} className={unskedBorderClasses}/> : null}
            <div style={{background:background}} className={"content-container" + flipClass + magClass + boxShadow + borderRadius} >
                <div className={"content" + tiltedContent + flipClass + magClass}>
                    {children}  
                </div>
                { tiltContent && (flattenTop || flattenBottom) ? <div className={"border-middle"}/> : null}  
            </div>
        </div>
        <div style={{backgroundColor:containerBottomBackgroundColor ? containerBottomBackgroundColor : containerBackground, height:spacingAfter, color:"transparent"}}/>
        </>
    )
}

export default DiagonalContainer