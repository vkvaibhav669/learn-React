import PropTypes from 'prop-types'
 const Button = ({ color,text ,onClick}) => {
    //  const onClick = (e) =>{
    //      console.log(e);
    //  }
  return <button onClick = {onClick} style={{ background:color}} className='btn'>{text}</button>
  //onClick is taken as a prop  
  
}

Button.defaultProps = {
    color : 'steelblue',
}
Button.propType = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button;