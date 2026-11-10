export default function Button({text, onClick}) {
    return (
        <Button onClick={onClick}>
            {text}
        </Button>
    )
}