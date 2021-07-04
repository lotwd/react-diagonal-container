# This package provides a container that can be skewed

### Click [Here](https://lotwd.github.io/react-diagonal-container-demo/) for a demonstration

### Usage:

`npm install react-diagonal-container`

`import { DiagonalContainer } from 'react-diagonal-container'`

`<DiagonalContainer background="green" flattenBottom spacingAfter="200px">`
`   {content}`
`</DiagonalContainer>`


### Props:

Name | Type | Default | Purpose 
-----|-------|--------|-------
background | string | 'black' | sets the background color of the tilted element
borderColor | 'string' | 'transparent' | sets the border color
borderHeight | 'string' | '0px' | sets the border height
containerBackground | string | 'transparent' | changes the background color of the container
containerBottomBackgroundColor | string | null | sets a linear gradient top value for the container color
containerTopBackgroundColor | string | null | sets a linear gradient bottom value for the container color
flattenBottom | boolean | false | removes tilt from bottom of the element
flattenTop | boolean | false | removes tilt from top of the element
flip | boolean | false | flips the element horizontally
magnitude | string | small | determines the slop of the tilt ('tiny', 'small', 'medium', 'large', 'extreme')
roundedCorners | boolean | false | adds a 10px border radius
shadow | boolean | false | adds box shadow
spacingAfter | string | '150px' | sets the spacing between two tilted elements
tiltedContent | boolean | false | skews the content with the container

#### Updates

### 0.2.0
1. shadow prop to add box shadow effect
2. borderColor and borderWidth props to add a border
3. roundedCorners prop to add a border radius
4. tiltedContent prop to allow for content to be tilted


#### Note:

flattenTop and flattenBottom produces issues when used with borders, shadow and roundedCorners. Currently the flatten props disables the usage of these other three props.








