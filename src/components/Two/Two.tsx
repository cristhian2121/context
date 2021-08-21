// Libs
import { useContext, useEffect } from "react"
// Contexts
import { ThemeContext } from "../../context/theme";
import { useContextSelector } from "use-context-selector";
// Components
import Three from "../Three/Three";


export default function Two(): JSX.Element {

    const {color, update} = useContextSelector(ThemeContext, v => v)

    const updateContext = () => {
        console.log('click');
        if(update){
            update({
                backGround: 'pepe'
            })
        }
    }

    useEffect(() => {
        console.log('Component Two');
    })

    return(
        <>
            <div onClick={updateContext}>
                Component Two {color}
            </div>
            <Three />
        </>
    )
}