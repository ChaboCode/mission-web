import { DnDTypes } from "@/app/interfaces/test"
import { StringifyOptions } from "querystring"
import { useDrag } from "react-dnd"

interface Params {
    text: string
    id: number
}

export default function Answer({ text, id }: Params) {
    const [{ isDragging, }, drag] = useDrag(() => ({
        type: DnDTypes.OPTION,
        item: {
            id,
            text,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} className="inline-block px-4 m-4 rounded-full border-black border">
            {text}
        </div>
    )
}