# This package provides a container that can be skewed

### Usage:

`npm install react-diagonal-container`

`import { DiagonalContainer } from 'react-diagonal-container'`

`<DiagonalContainer background="green" flattenBottom spacingAfter="200px">`
`   {content}`
`</DiagonalContainer>`


### Props:

Name | Type | Default | Purpose 
-----|-------|--------|-------
flip | boolean | false | flips the element horizontally
magnitude | string | small | determines the slop of the tilt ('tiny', 'small', 'medium', 'large', 'extreme')
flattenTop | boolean | false | removes tilt from top of the element
flattenBottom | boolean | false | removes tilt from bottom of the element
containerTopBackgroundColor* | string | undefined | changes the background color behind the top of the tilted element
containerBottomBackgroundColor* | string | undefined | changes the background color behind the bottom of the tilted element
containerBackground* | string | undefined | changes the color of the tilted element
spacingAfter | string | '150px' | sets the spacing between two tilted elements
background | string | 'black' | sets the background color behind the tilted element

### Note*:
Either containerBackground or containerTopBackgroundColor and containerBottomBackgroundColor are require

