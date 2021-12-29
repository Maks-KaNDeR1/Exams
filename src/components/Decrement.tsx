
type DecrementPropsType = {
    counter: number
    decrement: () => void
}

function Decrement(props: DecrementPropsType) {
    return (
        <div>
            <button disabled={props.counter === 5 }
                className='decrement'
                onClick={props.decrement}
            > reset
            </button>
        </div>
    )
}

export default Decrement
