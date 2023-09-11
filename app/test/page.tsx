"use client"
import DragDropTest from "@/components/DragDropTest/DragDropTest"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function TestPage() {
    return (
        <div>
            <Header />
            <DragDropTest test={{
                text: ["Juanito", "de Colombia"],
                answers: [1],
                options: ["es", "come", "juega", "bebe"]
            }} />
            <Footer />
        </div>
    )
}