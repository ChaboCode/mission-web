"use client"
import Image from "next/image"
import { useEffect } from "react"


function AlphabetLetter({ params }: { params: { letter: string } }) {
    const { letter } = params

    useEffect(() => { })

    return (
        <>
            <Image src={`http://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/web/letter_${letter}.jpg`} alt="XD" height={100} width={300} />
            Displaying {letter}
        </>
    )
}

export default AlphabetLetter
