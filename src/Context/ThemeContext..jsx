import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
export const GlobalThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

	function getThemeFromLocalStorage() {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}

	function toggleTheme() {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}

	useEffect(() => {
		getThemeFromLocalStorage();
	}, [theme]);
    
    return(
        <GlobalThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </GlobalThemeContext.Provider>
    )
}