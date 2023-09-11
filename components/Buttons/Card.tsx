"use client"
import { useState } from "react";
import ImageText from "./ImageText";

function CardButton({ data: { content, image, text } }: { data: CardButtonData }) {
    const [showContent, setContent] = useState(false)
    const [animationClass, setAnimationClass] = useState("")

    return (
        <ImageText text={showContent ? content : text} image={image} onclick={() => setContent(!showContent)} />
    )
}

export default CardButton
