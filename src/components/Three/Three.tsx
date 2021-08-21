import { useEffect } from "react"

export default function Three(): JSX.Element {

    useEffect(() => {
        console.log('Component Three');
    })

    return(
        <div>
            Component Three
        </div>
    )
}