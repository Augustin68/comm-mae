import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('themeOne');

    const defaultContext = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={defaultContext}>
            <div className={`${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}