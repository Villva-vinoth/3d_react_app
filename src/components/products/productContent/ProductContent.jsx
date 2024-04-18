import React, {  useRef, useState } from 'react'
import './productContent.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { MdDownload } from "react-icons/md";
import pdf from '../../Assets/Brochure/torus Brochure.pdf'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { CREATE_PRODUCT_FORM } from '../../../apiServices';

const ProductContent = ({ id,type, describe, voltageRange, ratedPower, peakPower, maxRpm, peakTorque, overloadTorque, dutyCycle, weight, img, nominalVoltage, maxCurrent, phaseCurrent, batteryCurrent, voltage, Support, OperatingMode, PeakCurrent, ContinousCurrent, AbsoluteMaxVoltage, RatedVoltage, }) => {

  const [productDetails, setProductDetails] = useState({
    name: "",
    contact_number: "",
    email: "",
    comments: ""
  })


  const contactRef = useRef(null)

  const clickDownloadRef = useRef(null)
  
  const downloadRef =useRef(null)
  const downloadCloseRef =useRef(null)



  const handleSubmit = async (id) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/
    const phoneRegex = /^\d{10}$/

    if (productDetails.name !== "" && productDetails.email !== "" && productDetails.contact_number !== "" && productDetails.comments !== "") {
        if (productDetails.name.length < 4) {
            toast.warn("name at least have 5 characters !");
        } else if (!phoneRegex.test(productDetails.contact_number)) {
            toast.warn("Please enter valid Phone number !");
        } else if (!emailRegex.test(productDetails.email)) {
            toast.warn("Please enter valid Email !");
        } else if (productDetails.comments.length < 10) {
            toast.warn("comments at least have 10 characters !");
        } else {
          const product ={...productDetails,product_id:id}
            await axios.post(CREATE_PRODUCT_FORM, product).then((res) => {
              setProductDetails({
                    name: "",
                    email: "",
                    contact_number: "",
                    comments: ""
                });
                contactRef.current.click();
                clickDownloadRef.current.click();
                // console.log("1",clickDownloadRef.current)

                setTimeout(()=>{
                  //  console.log("2",clickDownloadRef.current)
                  toast.success("submitted !")
                  // clickDownloadRef.current.click();
                },100)
             
              
            }).catch((err) => {
                toast.error(err.response.data.message);
            });
        }
    } else {
        toast.error("All Fields Are Required !");
    }
};

  return (
    <div className='product-content'>

      <picture className='Product-content-picture'>
        <img src={img} alt='' />
        {/* < */}
      </picture>
      <div className='product-content-container'>
        <h1>{type}</h1>
        <p>{describe}</p>
        <div className='product-content-grid'>
          {voltageRange ? <div className='product-content-container-one'>
            <h5>Voltage Range(V)</h5>
            <h4>{voltageRange}</h4>
          </div> : ""}
          {ratedPower ? <div className='product-content-container-one'>
            <h5>Rated Power(kW)</h5>
            <h4>{ratedPower}</h4>
          </div> : ""}
          {peakPower ? <div className='product-content-container-one'>
            <h5>Peak Power(kW)</h5>
            <h4>{peakPower}</h4>
          </div> : ""}
          {maxRpm ? <div className='product-content-container-one'>
            <h5>Max RPM</h5>
            <h4>{maxRpm}</h4>
          </div> : ""}
          {peakTorque ? <div className='product-content-container-one'>
            <h5>Peak Torque(Nm)</h5>
            <h4>{peakTorque}</h4>
          </div> : ""}
          {overloadTorque ? <div className='product-content-container-one'>
            <h5>Overload Torque(Nm)</h5>
            <h4>{overloadTorque}</h4>
          </div> : ""}
          {dutyCycle ? <div className='product-content-container-one'>
            <h5>Duty Cycle</h5>
            <h4>{dutyCycle}</h4>
          </div> : ""}
          {weight ? <div className='product-content-container-one'>
            <h5>Weight(kg)</h5>
            <h4>{weight}</h4>
          </div> : ""}
          {nominalVoltage ? <div className='product-content-container-one'>
            <h5>Nominal Voltage</h5>
            <h4>{nominalVoltage}</h4>
          </div> : ""}
          {maxCurrent ? <div className='product-content-container-one'>
            <h5>max Current</h5>
            <h4>{maxCurrent}</h4>
          </div> : ""}
          {voltage ? <div className='product-content-container-one'>
            <h5>Voltage(v)</h5>
            <h4>{voltage}</h4>
          </div> : ""}
          {batteryCurrent ? <div className='product-content-container-one'>
            <h5>Battery Current(A)</h5>
            <h4>{batteryCurrent}</h4>
          </div> : ""}
          {phaseCurrent ? <div className='product-content-container-one'>
            <h5>Phase Current(A)</h5>
            <h4>{phaseCurrent}</h4>
          </div> : ""}
          {RatedVoltage ? <div className='product-content-container-one'>
            <h5>Rated Voltage (V)</h5>
            <h4>{RatedVoltage}</h4>
          </div> : ""}
          {AbsoluteMaxVoltage ? <div className='product-content-container-one'>
            <h5>Absolute Max Voltage(V)</h5>
            <h4>{AbsoluteMaxVoltage}</h4>
          </div> : ""}
          {ContinousCurrent ? <div className='product-content-container-one'>
            <h5>Continous Current(A)</h5>
            <h4>{ContinousCurrent}</h4>
          </div> : ""}
          {PeakCurrent ? <div className='product-content-container-one'>
            <h5>Peak Current(A)</h5>
            <h4>{PeakCurrent}</h4>
          </div> : ""}
          {OperatingMode ? <div className='product-content-container-one'>
            <h5>Operating Mode</h5>
            <h4>{OperatingMode}</h4>
          </div> : ""}
          {Support ? <div className='product-content-container-one'>
            <h5>Support</h5>
            <h4>{Support}</h4>
          </div> : ""}

        </div>
        <div className='product-content-btn-div'>
          <Popup
            trigger={<button className='prouct-content-btn'>get</button>}
            modal
            
            closeOnDocumentClick={false}
          >
            {close => (
              <div className="popup">
                <div className='popup-header'>
                  <div> <h2>get this product</h2>
                    <div className="contact-cancel-btn" onClick={close} ref={contactRef}>X</div></div>

                  <div className='popup-header-cont color-grey'>fill out the form below. we will reach out to you.</div>

                </div>
                <div className='popup-form'>
                  <label>Name <span><sup>*</sup></span></label>
                  <input type='text' placeholder='Enter Your Name' name='name' value={productDetails.name} onChange={(e) => setProductDetails({
                    ...productDetails, [e.target.name]: e.target.value
                  })} />
                  <label>Contact Number <span><sup>*</sup></span></label>
                  <input type='text' placeholder='Enter Contact Number' name='contact_number' value={productDetails.contact_number} onChange={(e) => setProductDetails({
                    ...productDetails, [e.target.name]: e.target.value
                  })} />
                  <label>Email <span><sup>*</sup></span></label>
                  <input type='text' placeholder='Enter Email Address' name='email' value={productDetails.email} onChange={(e) => setProductDetails({
                    ...productDetails, [e.target.name]: e.target.value
                  })} />
                  <label>comment ( If Any )<span><sup>*</sup></span></label>
                  <textarea type='text' placeholder='Write Your Message...' className='popup-comments' name='comments' value={productDetails.comments} onChange={(e) => setProductDetails({
                    ...productDetails, [e.target.name]: e.target.value
                  })} />
                  {/* <span className='color-red'> All fields are required*</span> */}

                </div>
                <div className='popup-actions'>
                  <div className="actions">
                    <button className="contact-btn" onClick={() => { handleSubmit(id) }}>Submit</button>
                  </div>
                  <div className="actions" style={{ display: "none" }}>
                    <a href={pdf} ref={clickDownloadRef} download style={{ textDecoration: "none" }} className="download-btn" >
                      <span style={{ padding: "0 0.5rem 0 0.5rem", textAlign: "center" }}>
                        <MdDownload /></span>Download Brochure</a>
                  </div>
                </div>

              </div>
            )}
          </Popup>

        </div>

        <Popup
            trigger={<button className='prouct-content-btn' ref={downloadRef} style={{display:"none"}}>promt</button>}
            modal
            ref={downloadCloseRef}
            // closeOnDocumentClick={false}
          >
            {close => (
                  <div>
                    Downloading Brochure please wait
                  </div>
            )}
          </Popup>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        theme="dark"

      />
    </div>

  )
}

export default ProductContent