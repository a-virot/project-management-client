import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function Navbar(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <nav className={"Navbar " +  theme}>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/projects">
                <button>Projects</button>
            </Link>

            <button className="theme-btn" onClick={toggleTheme}>
                {theme ==='light' ? 'dark ' : 'light'}
            </button>
        </nav>
    );
}
export default Navbar;
/*
To start consuming the value={"light"} coming from the ThemeContext.Provider, 
I need to import the useContext Hook and the Context object ThemeContext
*/
