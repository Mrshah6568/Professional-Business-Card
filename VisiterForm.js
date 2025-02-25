import React from "react";
import Visit from "./Visit";
import './App.css';
import jsPdf from 'jspdf';



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



    const download = () => {
        const doc = new jsPdf();
        doc.rect(10, 10, 190, 277, 'S'); // Draw a rectangular background
        doc.setFillColor(255, 255, 255); // White background
        doc.rect(10, 10, 190, 277, 'F');
    
        doc.setFontSize(24);
        doc.text(Company, 20, 30); // Company name
    
        doc.setFontSize(18);
        doc.text(`Phone: ${Phone}`, 20, 50); // Phone number
        doc.text(`Email: ${Email}`, 20, 70); // Email
        doc.text(`Address: ${Address}`, 20, 90); // Address
        doc.text(`City: ${City}`, 20, 110); // City
        doc.text(`Country: ${Country}`, 20, 130); // Country
    
        doc.save("BusinessCard.pdf");
      }
    

    // const download = () => {
    //     const doc = new jsPdf();
    //     doc.setFont('helvetica', 'bold'); // Set font to helvetica bold
    //     doc.setFontSize(24);
    //     doc.text(Company, 10, 20); // Company name
      
    //     doc.setFont('helvetica', 'normal'); // Set font to helvetica normal
    //     doc.setFontSize(18);
    //     doc.text(`Phone: ${Phone}`, 10, 40); // Phone number
    //     doc.text(`Email: ${Email}`, 10, 60); // Email
    //     doc.text(`Address: ${Address}`, 10, 80); // Address
    //     doc.text(`City: ${City}`, 10, 100); // City
    //     doc.text(`Country: ${Country}`, 10, 120); // Country
      
    //     doc.save("BusinessCard.pdf");
    //   }


    //   const download = () => {
    //     const doc = new jsPdf();
    //     doc.setFontSize(24);
    //     doc.setFontStyle('bold');
    //     doc.setTextColor(0, 0, 0); // Black text color
    //     doc.text(Company, 10, 20); // Company name
    
    //     doc.setFontSize(18);
    //     doc.setFontStyle('normal');
    //     doc.setTextColor(128, 128, 128); // Gray text color
    //     doc.text(`Phone: ${Phone}`, 10, 40); // Phone number
    //     doc.text(`Email: ${Email}`, 10, 60); // Email
    //     doc.text(`Address: ${Address}`, 10, 80); // Address
    //     doc.text(`City: ${City}`, 10, 100); // City
    //     doc.text(`Country: ${Country}`, 10, 120); // Country
    
    //     // Add a background color
    //     doc.setFillColor(255, 255, 255); // White background
    //     doc.rect(0, 0, 210, 297, 'F'); // A4 size
    
    //     // Add a logo (optional)
    //     // doc.addImage('./logo.png', 'PNG', 150, 10, 30, 30);
    
    //     doc.save("BusinessCard.pdf");
    //   }
    


    // const download = () => {
    //     const doc = new jsPdf();
    //     doc.text(5,5,Company)
    //     doc.text(10,10,Phone)
    //     doc.text(15,15,Email
            
    //     )
    //     doc.save("ABC.pdf")
    //     // console.log(event.target.value)
    // }
    // const data1 = {Company, Phone, Email, Address, City, Country};
    return (
        <div className="container2">
            <div className='left'>
            {/* <form> */}
                {/* <h1> Business Card</h1> */}
            
                <label for="floatingInput">Company Name</label>
                <br />
                <input onChange={handleCompany} value={Company} type="text" className="form-control form-floating" id="floatingInput" placeholder="Company Name" />

                <br />
                <label for="floatingInput">Phone Number</label>
                <br/>
                <input onChange={handlePhone} value={Phone} type="number" className="form-control form-floating" id="floatingInput" placeholder=" Contect Us"></input>

                <br />
                <label for="floatingInput">Email</label>
                <br/>
                <input onChange={handleEmail} value={Email} type="email" className="form-control form-floating" id="floatingInput" placeholder="name@example.com"></input>

                <br />
                <label for="floatingInput">Address</label>
                <br/>
                <input onChange={handleAddress} value={Address} type="text" className="form-control form-floating" id="floatingInput" placeholder="Address" />

                <br />
                <label for="floatingInput">City</label>
                <br/>
                <input onChange={handleCity} value={City} type="text" className="form-control form-floating" id="floatingInput" placeholder="City" />

                <br />
                <label for="floatingInput">Country</label>
                <br/>
                <input onChange={handleCountry} value={Country} type="text" className="form-control form-floating" id="floatingInput" placeholder="Country" />
               
                <br />
                <div className="buttonsMoves">
                    <button onClick={generateCard} type="button" className="Submit">Generate Card</button>
                    <button className="Submit" onClick={download}>Download</button>
                </div>
                {/* <div className="col-md-6">
                    <Card />
                </div> */}

            {/* </form> */}
            </div>
            <div className="right">
            {/* <h1>Professional Business Card</h1> */}
                <Visit data = {Company} Phone={Phone} Email={Email} Country = {Country} Address = {Address} City = {City}/>
            </div>
            
        </div>
    )
}

export default VisiterForm;