import Card from "../Card"

function ButtonGrid({ data, component }: { data: CardButtonData[], component?: JSX.Element }) {
    const buttons = data.map(el => (
        <Card data={el} key={`grid_${el.text}`} />
    ))

    return (
        <div className="flex justify-center m-6">
            <div className="w-10/12 grid grid-cols-5 gap-8 lg:gap-8 lg:grid-cols-7">{buttons}</div>
        </div>

    )
}

export default ButtonGrid
