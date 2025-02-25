import React from 'react';
import './App.css';

// //// MyPort file >>>>
// import MyPort from './MyPort';
// import VisiterForm from './VisiterForm';
// // import Img from './ms1.jpg';





import './VisterForm.css'
import Login from './Login';
import Checker from './Checker'
import Visit from './Visit';
import VisiterForm from './VisiterForm';
import Img from './bg1.jpeg'
import Login2 from './Login'


function App() {


  return (

    /// My Port File >>>
    // <div>
    //   {/* <h1>Welcome to My Website</h1> */}
    //   {/* <MyPort/> */}


    // </div>



    <>
      <div className='container'>
        <VisiterForm />
        <div className='pbc'>
          <h1> Professional Business Card</h1>
        </div>
      </div>

    </>
    // const handleEmail = (Event) => {
    //   console.log(Event.target.value)
    // } 
    // const handlePwd = (Event) => {
    //   console.log(Event.target.value)
    // }




    // let[email , setEmail] = React.useState('');
    // let[pwd , setpwd] = React.useState('');

    // const EventHandler = (event) =>{
    //   setEmail(event.target.value);
    // }
    // const PasswordHandler = (event) =>{
    //   setEmail(event.target.value);
    // }

    // const Submit = () =>{
    //   console.log(EventHandler,PasswordHandler)
    // }

    // return( 
    //   <div className="parent">
    //    <Checker/>

    //     <div className="child">
    //         <h1>login page</h1>
    //         <form action="default">
    //                 <label for="email">Email:</label>
    //                 <input type="email" id="email" name="email" placeholder="Your@email.com" required onChange={handleEmail} onClick={EventHandler} />
    //             <br />
    //                 <label for="pwd">Password:</label>
    //                 <input type="password" id="Pin" name="Password" placeholder="Password" required onChange={handlePwd} onClick={PasswordHandler}/>
    //             <br />
    //             <button onClick={Submit}>Submit</button>
    //         </form>
    //     </div>
    //   </div>


  )
}

export default App;