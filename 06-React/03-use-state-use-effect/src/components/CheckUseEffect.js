import { useState, useEffect } from 'react'


function CheckUseEffect() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');


    function changeHandler(event) {
        console.log(text1);
        setText1(event.target.value);
    }

    function changeHandler2(event) {
        console.log(text2);
        setText2(event.target.value);
    }


    // useEffect(callback, [dependency_list])


    {
        // variation 1 :- Every render - execute every time whenever App renders
        // useEffect(() => {
        //   console.log("UI rendering done")
        // });
    }


    {
        // variation 2 :- First render - execute once when first time App renders
        // useEffect(() => {
        //   console.log("UI rendering done")
        // }, []);
    }



    {
        // variation 3 : - First render + whenever dependency changes
        // execute first time when App renders and only when elements in dependency list changes its state ( [dependecy_list] )

        // useEffect(() => {
        //   console.log("UI rendering done")
        // }, [text1]);

    }

    {
        // variation 4 :- to handle unmounting of a component
        // useEffect(() => {
        //   // add event listener
        //   console.log("listener added"); // then then line will execute

        //   return () => {
        //     console.log("Listener removed"); // first this line will execute
        //   }
        // }, [text1]);
    }


    // print window size, using useEffect hook
    // remove event listener whenever window size id printed and after that again add event listener
    // in this way there is only one event listener in the window element
    // without using useEffect there may be more than 1 event listener in one element

    // const [screenWidth, setScreenWidth] = useState(window.screen.width);
    // const [screenWidth, setScreenWidth] = useState(window.screen.height);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    function windowHandler(e) {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", windowHandler);
        console.log('Screen size changed');


        return () => {
            window.removeEventListener('resize', windowHandler);
            console.log("Window listener removed")
        }
    }, [screenWidth, screenHeight]);



    return (
        <div>
            <label htmlFor="">Input1</label>
            <input value={text1} onChange={changeHandler} type="text" />

            <br />
            <label htmlFor="">Input2</label>
            <input value={text2} onChange={changeHandler2} type="text" />
            <br />


            <h1>Screen Width  : {screenWidth} px</h1>
            <h1>Screen Height : {screenHeight} px</h1>
        </div>
    )
}

export default CheckUseEffect;