import PropTypes from  'prop-types'
import Button from './Button'

const Header = ( {  title ,onAdd ,showAdd } ) => {
    const onClick = () => {
        console.log('Clicked in ');
    }
  return (
    <header className='header'>
        {/* <h1 style ={ HeadingStyle }>Task Tracker says {title} ! </h1> */}
        <h1>Task Tracker says {title} ! </h1>
        <Button  color={showAdd ? 'red':'green'} text ={showAdd ? 'Close':'Add'}  onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title : 'hello world',
}
Header.propType = {
    title : PropTypes.string.isRequired ,
}
//inline CSS
// const HeadingStyle = {color : 'red' , backgroundColor : 'black'}; 



//create a type for prop value and make it required 
//if not passed correct value , it will render but it will also throw warning 
//isRequired is used to make sure it gets its value 


export default Header