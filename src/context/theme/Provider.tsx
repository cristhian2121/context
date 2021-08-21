import { ReactNode, useState } from "react";
import { State, ThemeContext } from ".";

type Props = {
    children: ReactNode
}

const initial = { 
    color:'red',
    backGround: 'blue'
}

export default function Provider(props: Props): JSX.Element {

    const [theme, setTheme] = useState<State>(initial)

    const handleUpdate = (data: State) => {
        setTheme(data)
    }

    return (
        <ThemeContext.Provider value={{...theme, update: handleUpdate}}>
            {props.children}
        </ThemeContext.Provider>
    )
} 