import { useReducer } from 'react';

const UseReducerEx = () => {
    return (
        <div>
            <div style={{ backgroundColor: "aqua", padding: "3rem" }} >
                <GuestList />
            </div>
            <br />
            <br />
            <br />
            <div style={{ backgroundColor: "khaki", padding: "3rem" }}>
                <UserName />
            </div>
        </div>
    )
}

export default UseReducerEx;







// GuestList component
const GuestList = () => {
    // using useState
    /*
    const [name, setName] = useState('');
    const [guestList, setGuestList] = useState(["Sunny", "Shyam"]);
    
    function changeName(e) {
        setName(e.target.value);
    }

    function addGuest() {
        if (name !== "") {
            setGuestList([...guestList, name])
            setName("");
        }
    }
    */


    // using useReducer
    const guestReducer = (state, action) => {
        switch (action.type) {
            case 'CHANGED_NAME': {
                return state = action.text;
            }

            case 'UPDATE_GUEST_LIST': {
                if (name !== "") {
                    dispatch({ type: 'CHANGED_NAME', text: "" })
                    return [...state, name];
                }
                return [...state]
            }

            default: {
                console.log("Error found")
            }
        }
    }

    // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks); // useReducers
    const [name, dispatch] = useReducer(guestReducer, "");
    const [guestList, dispatch2] = useReducer(guestReducer, ["Sunny", "Shyam"]);


    function changeName(e) {
        dispatch({
            type: 'CHANGED_NAME',
            text: e.target.value
        })
    }

    function addGuest() {
        dispatch2({
            type: 'UPDATE_GUEST_LIST'
        })
    }


    return (
        <div>
            <label>
                Enter Guest Name
                <input type="text" value={name} onChange={e => changeName(e)} />
            </label>
            <br />
            <button onClick={addGuest} >Add to guest list</button>
            <h2>Guest List - </h2>

            <ol>
                {
                    guestList.map((guest, ind) => (
                        <li key={ind}>{guest}</li>
                    ))
                }
            </ol>

        </div>
    )
}







// UserName component
const UserName = () => {
    const nameReducer = (state, action) => {
        return { ...state, ...action };
    }

    const [state, dispatch] = useReducer(nameReducer, { first: "", last: "" });


    return (
        <div>
            <label>
                Enter First Name
                <input type="text" value={state.first} onChange={(e) => dispatch({ first: e.target.value })} />
            </label>
            <br />

            <label>
                Enter Last Name
                <input type="text" value={state.last} onChange={(e) => dispatch({ last: e.target.value })} />
            </label>

            <h3>Full Name : {state.first + " " + state.last}</h3>
        </div>
    )

}



