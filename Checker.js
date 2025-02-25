import React from 'react'


function Checker() {

    // let num = 0;
    let [num,setnum] = React.useState(0); 
    const ClickMinus = () => {
        // num--;
        setnum(num-1);
        console.log(num)
    }
    const ClickPlus = () => {
        // num++;
        setnum(num+1)
        console.log(num)
    }


    return (
        <div className="Container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Let Num </h1>
                    <button onClick={ClickMinus}>-</button>
                    {num}
                    <br></br>
                    <button onClick={ClickPlus}>+</button>
                </div>
            </div>
        </div>
    )
}
export default Checker;