import { useEffect } from "react"
import { useContextSelector } from "use-context-selector"
import { ThemeContext } from "../../context/theme"

export default function Other(): JSX.Element {
    const color = 'useContextSelector(ThemeContext, v => v.backGround)'

    useEffect(() => {
        console.log('***');
    })

    return <div>*{color}</div>
}