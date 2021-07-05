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
containerBottomBackgroundColor | string | null | sets a linear gradient bottom value for the container color
containerTopBackgroundColor | string | null | sets a linear gradient top value for the container color
flattenBottom | boolean | false | removes skew from bottom of the element
flattenTop | boolean | false | removes skew from top of the element
flip | boolean | false | flips the element horizontally
magnitude | string | small | determines the slop of the tilt ('tiny', 'small', 'medium', 'large', 'extreme')
roundedCorners | boolean | false | adds a 10px border radius
shadow | boolean | false | adds box shadow
spacingAfter | string | '150px' | sets the spacing between two tilted elements
tiltedContent | boolean | false | skews the content with the container

#### Updates


### 0.2.2
* fixed issue with overlapping containers both showing borders

### 0.2.1
* borders now work when using flattenTop or flattenBottom

### 0.2.0
* shadow prop to add box shadow effect
* borderColor and borderWidth props to add a border
* roundedCorners prop to add a border radius
* tiltedContent prop to allow for content to be tilted


#### Note:

flattenTop and flattenBottom produce issues when used with shadow or roundedCorners. Usage of the flatten props disables the usage of these other two props.








