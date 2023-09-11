import ButtonGrid from "@/components/Buttons/Template/Grid"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const phrases = [
    "Abeja",
    "Barco",
    "Casa",
    "Dado",
    "Elefante",
    "Fresa",
    "Gato",
    "Helado",
    "Iguana",
    "Jugo",
    "Koala",
    "Lápiz",
    "Mapa",
    "Nido",
    "Oso",
    "Pelota",
    "Queso",
    "Rana",
    "Sandía",
    "Tijeras",
    "Uvas",
    "Vaca",
    "Waffle",
    "Xilófono",
    "Yo-yo",
    "Zapato",
]


function Alphabet() {
    const data: CardButtonData[] = alphabet.split("").map((letter, i) => {
        return {
            text: letter.toUpperCase() + letter,
            image: `alphabet/${letter}.png`,
            content: phrases[i],
        } as CardButtonData;
    })
    return (
        <>
            <Header />
            <ButtonGrid data={data} />
            <Footer />
        </>
    )
}

export default Alphabet