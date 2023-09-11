interface ButtonData {
    text: string
}

interface ImageButtondata extends ButtonData {
    image: string
}

interface CardButtonData extends ImageButtondata {
    content: string
}