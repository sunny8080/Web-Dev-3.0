import React, { useCallback, useState, useMemo } from 'react'

const UseCallbackEx = () => {
    const [list] = useState(["Sunny", "Alok", "Jack", "Paul"]);
    const [cnt, setCount] = useState(0)

    // without useCallback, reference of sortFunc always change when this component renders
    // const sortFunc = (a, b) => ( a.localeCompare(b) * -1);

    // with useCallback, reference of sortFunc only change when depedecencies list [] changes
    const sortFunc = useCallback(
        (a, b) => (a.localeCompare(b) * -1),
        []
    )

    return (
        <div>
            <SortedList list={list} sortFunc={sortFunc} />
            <button onClick={() => setCount(cnt + 1)} >Click Me : {cnt}</button>
        </div>
    )
}





function SortedList({ list, sortFunc }) {
    // it will rendered every time whenever parent rendered
    console.log("SortedList rendered ");

    const sortedList = useMemo(
        () => {
            console.log("Running sort")
            return [...list].sort(sortFunc)
        },
        [list, sortFunc]
    )

    return <div>Sorted List : {sortedList.join(", ")}</div>
}

export default UseCallbackEx