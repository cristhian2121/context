import './styles.css'

export default function Bar({ theme }: { theme: string }) {
    return (
        <div className={`container-bar ${theme}`}>
            Other text
        </div>
    )
}
