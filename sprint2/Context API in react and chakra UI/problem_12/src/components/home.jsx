import { useTheme } from "../themeContext";
import { About } from "./about";

export const Home = ()=>{
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <About/>
        </div>
    );
}