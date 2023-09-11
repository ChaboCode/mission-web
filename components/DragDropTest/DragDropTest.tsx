"use client"
import arrayShuffle from 'array-shuffle'
import Answer from "./Answer"
import Slot from "./Slot"
import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DragDropTest } from '@/app/interfaces/test'

interface Props {
    test: DragDropTest
}

export default function DragDropTest({ test }: Props) {
    const [testElement, setTestElement] = useState<JSX.Element[]>([])
    const [options, setOptions] = useState<JSX.Element[]>([])

    useState(() => {
        setTestElement(test.text.map((el, i) => {
            if (i < test.text.length - 1) return <>
                <span key={`text${i}`}>{el}</span>
                <Slot key={`slot${i}`} />
            </>
            return <span key={i}>{el}</span>
        }))

        setOptions(arrayShuffle(test.options.map((el, i) => {
            return <Answer key={`options${i}`} text={el} id={i} />
        })))
    })


    return (
        <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-start-2 row-span-2 text-lg font-sans self-center">
                    {testElement}
                </div>
                <div>
                    <span className="text-blue-950 font-bold text-xl">Options</span>
                    <div className="p-6 rounded-lg border-2 border-slate-600">
                        {options}
                    </div>
                </div>
                <button className="col-start-3 p-1 bg-blue-600 text-slate-200 rounded-full">Check answers</button>
            </div>
        </DndProvider>
    )
}