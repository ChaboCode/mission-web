import Card from "../Card"

function ButtonGrid({ data, component }: { data: CardButtonData[], component?: JSX.Element }) {
    const buttons = data.map(el => (
        <Card data={el} key={`grid_${el.text}`} />
    ))

    return (
        <div className="flex justify-center m-6">
            <div className="w-10/12 grid grid-cols-7 gap-16">{buttons}</div>
        </div>

    )
}

export default ButtonGrid
