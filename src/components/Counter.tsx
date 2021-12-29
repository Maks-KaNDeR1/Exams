import React, { useState } from 'react'
import Count from './Count'
import Decrement from './Decrement'
import Increment from './Increment'



function Сounter() {

    let [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter(counter - 1)
    }

    const decrement = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div style={{ height: '100px', fontSize: '80px' }}>
                <Count counter={counter} />
            </div>
            <div
                className='buttons'>
                <div style={{ padding: '27px', display: 'inline-block' }}>
                    <Increment
                        increment={increment}
                        counter={counter} />
                </div>
                <div style={{ padding: '27px', display: 'inline-block' }}>
                    <Decrement
                        decrement={decrement}
                        counter={counter} />
                </div>
            </div>
        </div>
    )
}




export default Сounter
