import { useState } from 'react';
import luna from '../assets/icons/luna.svg';
import sol from '../assets/icons/sol.svg';

function useDarkMode() {
    const [mode, setMode] = useState(() => {
        const html = document.querySelector("html");
        return html?.classList.contains('dark') ? sol : luna;
    });

    const toggleMode = () => {
        const html = document.querySelector("html");
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            setMode(luna);
        } else {
            html.classList.add('dark');
            setMode(sol);
        }
    };

    return [mode, toggleMode];
}

export default useDarkMode;
