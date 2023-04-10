import { createContext, useState } from "react";

const TmeContext = createContext();

export default function ThemeContext({ children }) {
    const [theme, setTheme] = useState('themeOne');

    const defaultContext = {
        theme,
        setTheme,
    };

    return (
        <TmeContext.Provider value={defaultContext}>
            {children}
        </TmeContext.Provider>
    )
}