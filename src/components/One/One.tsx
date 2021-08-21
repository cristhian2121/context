// Libs
import { useContext, useEffect } from "react"
import { useContextSelector } from "use-context-selector";
// Contexts
import { ThemeContext } from "../../context/theme";
// Components
import Two from "../Two/Two";

export default function One(): JSX.Element {

    const {color} = useContextSelector(ThemeContext, v => v)

    useEffect(() => {
        console.log('Component One', color);
    })

    return(
        <>
            <div>
                Component One {color}
            </div>
            <Two />
        </>
    )
}