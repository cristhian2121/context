import { MouseEventHandler } from "react";

export default function Button({ text, click }: { text: string, click: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <div>
            <button onClick={click}>{text}</button>
        </div>
    )
}
