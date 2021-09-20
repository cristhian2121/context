import './styles.css'

export default function Box({ theme }: { theme: string }) {
    return (
        <div className={`container ${theme}`}>
            Custom theme
        </div>
    )
}
