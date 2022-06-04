function Header(props){
   return(
    <>
    <h1>{props.title}</h1>
    </>
   );
  
}

Header.defaultProps = {
   title: 'Task tracker'
}

export default Header;