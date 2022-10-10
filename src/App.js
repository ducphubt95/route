import React, { useEffect, useState } from 'react'
import Wallet from './Wallet'

let numberArr = [1, 10, 19, 11, 13, 16, 19]

function App() {
    const [data, setData] = useState([])
    const [numberItem, setNumberItem] = useState(24)

    const getLargest = (arr) => {

        const result = Number(arr.map(String).sort((a, b) => (b + a) - (a + b)).join(''))

        return result
    }
    const largestResult = getLargest(numberArr)

    useEffect(() => {
        if (numberItem < 24) {
            let presentArray = [...data]

            let newArray = []
            for (let i = 0; i < `${numberItem}`; i++) {
                let random = presentArray[Math.floor(Math.random() * presentArray.length)]
                let index = presentArray.indexOf(random)
                presentArray.splice(index, 1)
                let value = {}
                value.name = random.name
                value.index = i
                newArray.push(value)

            }
            setData(newArray)

        }
    }, [numberItem])

    useEffect(() => {
        fetch('https://metanode.co/json/eng.json')
            .then((res) => res.json())
            .then((metaNode) => {
                let array = metaNode
                const checkArr = array.slice()
                const newArr = []

                for (let i = 0; i < 24; i++) {
                    let random = checkArr[Math.floor(Math.random() * checkArr.length)]
                    let index = checkArr.indexOf(random)
                    checkArr.splice(index, 1)
                    let value = {}
                    value.name = random
                    value.index = i
                    newArr.push(value)

                }
                setData(newArr)
            })

    }, [])

    return (
        <div className='wrapper-app'>
            <h1>input: {`[${numberArr.toString()}]`}</h1>
            <h1>1/ output: {largestResult}</h1>
            <h1>{`2/ List has ${numberItem} non duplicate elements`}</h1>
            <button onClick={() => setNumberItem(18)}>Get 18 elements</button>
            <button onClick={() => setNumberItem(6)}>Get 6 elements</button>
            <Wallet data={data} />
        </div>
    )
}

export default App