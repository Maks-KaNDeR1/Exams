
type CountPropsType = {
    counter: number
}

const Count = (props: CountPropsType) => {
    const countStyle = {
        color: props.counter === 5 ? 'red' : '',
        // color: props.counter === -2 ? 'red' : '',
    }

    return <span style={countStyle} className='count'>
        {props.counter}
    </span>
}

export default Count