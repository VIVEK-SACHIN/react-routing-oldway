import { NavLink } from "react-router-dom";
export default Navbar;
function Navbar(){
    return(
        <>
        <NavLink to='/'>homewe</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/something">dfdsfsdfsdfs</NavLink>
        </>
    );
}