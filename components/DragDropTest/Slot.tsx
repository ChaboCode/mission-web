import { DnDTypes } from "@/app/interfaces/test"
import { useState } from "react"
import { useDrop } from "react-dnd"

interface Id {
    id: number
    text: string
}

export default function Slot() {
    const [answerId, setAnswerId] = useState<number>(-1)
    const [answer, setAnswer] = useState<string>("XD")
    const [bgColor, setBgColor] = useState<string>("bg-slate-400")
    const [textColor, setTextColor] = useState<string>("text-slate-400")

    const [XD, drop] = useDrop(
        () => ({
            accept: DnDTypes.OPTION,
            drop: (item, monitor) => updateAnswer(item as Id),
            collect: ( monitor) => ({
                isOver: !!monitor.isOver()
            })
        }),
    )

    const updateAnswer = (item: Id) => {
        console.log(item)
        setAnswerId(item.id)
        setAnswer(item.text)
        setTextColor("text-slate-300")
    }

    return (
        <div ref={drop} className={`inline-block w-32 h-8 mx-5 px-2 rounded-full ${bgColor} ${textColor}`}>
            {answer}
        </div>
    )
}