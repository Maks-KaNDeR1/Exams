
type IncrementPropsType = {
    counter: number
    increment: () => void
}

function Increment(props: IncrementPropsType) {
    return (
        <div>
            <button disabled={props.counter === -2 }
                className='increment'
                onClick={props.increment}
            > inc
            </button>
        </div>
    )
}

export default Increment
