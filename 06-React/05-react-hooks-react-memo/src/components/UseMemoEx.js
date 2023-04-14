import { useState, useMemo } from 'react';


const UseMemoEx = () => {

    const [names] = useState(["Sunny", "Alok", "Jack", "Paul"]);

    // runs every time when component renders
    // const sortedNames = [...names].sort();

    // by using useMemo, it runs only when names changes
    const sortedNames = useMemo(
        () => { return [...names].sort() },
        [names]
    );

    const [cnt1, setCnt1] = useState(0);
    const [cnt2, setCnt2] = useState(0);


    return (
        <div>
            <div>Names : {names.join(', ')}</div>
            <div>Sorted Names : {sortedNames.join(', ')}</div>

            <button onClick={() => setCnt1(cnt1 + 1)} >Count1 : {cnt1}</button>
            <button onClick={() => setCnt2(cnt2 + 1)} >Count2 : {cnt2}</button>
        </div>
    )
}

export default UseMemoEx