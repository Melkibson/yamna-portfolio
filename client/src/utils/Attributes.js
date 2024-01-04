export const colorAttrs =  props => ({color : props.color, stroke : props.stroke})
export const hoverAttrs = props => ({background : props.bgColor || props.lightBgColor, color: props.txtColor})
export const svgAttrs = props => ({width : props.width, height : props.height, 'margin-bottom': `${props.margin}` || 0})
