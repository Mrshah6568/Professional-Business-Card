import React, { useState } from 'react'
import Img from "./Img/visit.png"
import Img0 from "./Img/id-card.png"
import Img1 from "./Img/gmail.png"
import Img2 from "./Img/contact-us.png"
import Img3 from "./Img/linkedin.png"
import Img4 from "./Img/home-address.png"

function Visit(props) {

    const [action, setAction] = useState("back");
    return (
        <div className='container1'>

            {/* <h2> Hello!</h2> */}
            <div className='leftImg'>
                <img src={Img} />
            </div>
            {/* <div class="col-md-6 mt-5" style="font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"> */}
            {/* <img src={Img0} className='icons' /><h3>Mukim Aziz Ahmed Shah</h3> */}
            {/* <p><img src={Img} /> Software Engineer</p> */}
            {action === "next" ? <div></div> : <div className='right1'>
                {/* <p>{props.data}</p> */}
                <p> <img src={Img0} className='icons' /> {props.data}</p>
                <p><img src={Img1} className='icons' /> {props.Email}</p>
                <p><img src={Img2} className='icons' /> {props.Phone}</p>
                <p><img src={Img3} className='icons' /> {props.Country}</p>

            </div>}
            {/* <div className='right'>
                    <p>Shah Mukim Aziz Ahmed</p>
                    <p><img src={Img1} className='icons'/>  ms123@gmail.com</p>
                    <p><img src={Img2} className='icons'/>  +91 7698237342</p>
                    <p><img src={Img3} className='icons'/>  linkedin/ms2012</p>

                </div> */}
            {action === 'back' ? <div></div> : <div className='left1'>
               
                {/* <p>I am A softwear Developer</p> */}
                <p> <img src={Img4} className='icons'/> {props.Address}</p> <br />
                {/* <p>{props.City}</p> */}
                <p id='city'>{props.City}</p> <br />
                <p id='india'> India</p>
            </div>
            }


            <div className='move'>
                <div className={action === "next" ? "next gray" : "next"} onClick={() => { setAction("next") }}>Next</div>
                <div className={action === "back" ? "next gray" : "next"} onClick={() => { setAction("back") }}>Back</div>
            </div>
        </div>
    )
}

export default Visit;