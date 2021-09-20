import { useState } from "react";
import Bar from "../Bar/Bar";
import Box from "../Box/Box";
import Button from "../Button/Button";

export default function Theme() {
    const [theme, setTheme] = useState('')

    const handleClick = () => {
        setTheme(prev => prev === 'dark' ? 'light': 'dark' )
    }

    return (
        <>
            <Button text="Toggle" click={handleClick}/>
            <Box theme={theme} />
            <Bar theme={theme}/>
        </>
    )
}
