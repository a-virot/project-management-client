const { createContext, useState } = require("react");

const ThemeContext = createContext();

// To easily wrap the Provider around other compo and expose the values from it, I create a wrapper component.
function ThemeProviderWrapper(props){
    const [theme, setTheme] = useState("light");

    const toggleTheme = ()=>{
        if(theme ==='light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}> {/*  <== I set up the provider inside */}
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProviderWrapper};
/*
I exported the "ThemeProviderWrapper" as I will use it to wrap other compo.
Inside "ThemeProviderWrapper" compo I set up the Provider "ThemeContext.Provider" 

To enable access to the data stored in the Context I have to wrap my app with the Provider.
So let's import the "ThemeProviderWrapper" to index.js and wrap it around the <App />
*/