import Button from './Button'

function Header(props){
   const onClick = () => {
   console.log('click')
   }
   return(
    <>
    <h1>{props.title}</h1>
    <Button onClick = {onClick} text='ADD'/>
   
    </>
   );
  
}

Header.defaultProps = {
   title: 'Task tracker'
}

export default Header;