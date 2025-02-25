import React from "react";
import Visit from "./Visit";


function VisiterForm() {

    let [Company, setCompany] = React.useState('');
    let [Phone, setPhone] = React.useState('');
    let [Email, setEmail] = React.useState('');
    let [Address, setAddress] = React.useState('');
    let [City, setCity] = React.useState('');
    let [Country, setCountry] = React.useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleCompany = (event) => {
        setCompany(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleCity = (event) => {
        setCity(event.target.value);
    }
    const handleCountry = (event) => {
        setCountry(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const generateCard = () => {
        console.log(Company, Phone, Email, Address, City, Country);
    }
    return (
        <div className="Container2">


            <div className="row" >
                <div className="col">
                    <h1> Card Generater</h1>
                    <div className="col">
                        <input onChange={handleCompany}
                            value={Company} type="text" className="form-control form-floating" id="floatingInput" placeholder="Company Name" />
                        <label for="floatingInput">Company Name</label>
                    </div>
                    <div className="form-floating ">
                        <input onChange={handlePhone} value={Phone} type="number" className="form-control form-floating" id="floatingInput" placeholder="name@example.com"></input>
                        <label for="floatingInput">Phone Number</label>
                    </div>
                    <div className="form-floating ">
                        <input onChange={handleEmail} value={Email} type="email" className="form-control form-floating" id="floatingInput" placeholder="name@example.com"></input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="col">
                        <input onChange={handleAddress}
                            value={Address} type="text" className="form-control form-floating" id="floatingInput" placeholder="Address" />
                        <label for="floatingInput">Address</label>
                    </div>
                    <div className="col">
                        <input onChange={handleCity}
                            value={City} type="text" className="form-control form-floating" id="floatingInput" placeholder="City" />
                        <label for="floatingInput">City</label>
                    </div>
                    <div className="col">
                        <input onChange={handleCountry}
                            value={Country} type="text" className="form-control form-floating" id="floatingInput" placeholder="State" />
                        <label for="floatingInput">Country</label>
                    </div>
                    <button onClick={generateCard} type="button" className="btn btn-outline-primary">Generate Card</button>
                </div>
                {/* <div className="col-md-6">
                    <Card />
                </div> */}
            </div>
        </div>
    )
}

export default VisiterForm;







