import React, { useRef, useState } from 'react'
import './productContent.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { MdDownload } from "react-icons/md";
import pdf from '../../Assets/Brochure/torus Brochure.pdf'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { CREATE_PRODUCT_FORM, SEND_MAIL_ADMIN } from '../../../apiServices';

const ProductContent = ({ id, type, describe, voltageRange, ratedPower, peakPower, maxRpm, peakTorque, overloadTorque, dutyCycle, weight, img, nominalVoltage, maxCurrent, phaseCurrent, batteryCurrent, voltage, Support, OperatingMode, PeakCurrent, ContinousCurrent, AbsoluteMaxVoltage, RatedVoltage, }) => {

  const [productDetails, setProductDetails] = useState({
    name: "",
    contact_number: "",
    email: "",
    comments: ""
  })

  const [error, setError] = useState('')


  const contactRef = useRef(null)

  const clickDownloadRef = useRef(null)

  const downloadRef = useRef(null)
  const downloadCloseRef = useRef(null)

  const handledownload = () => {
    console.log(downloadCloseRef.current)
    console.log(clickDownloadRef.current)
    clickDownloadRef.current.click()
    downloadCloseRef.current.close()
    // downloadRef.current.click()
  }

  const handleSubmit = async (id,type) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/
    const phoneRegex = /^\d{10}$/
    console.log("hitting ", id)

    if (productDetails.name !== "" && productDetails.email !== "" && productDetails.contact_number !== "" && productDetails.comments !== "") {
      if (productDetails.name.length < 4) {
        // alert("name at least have 5 characters !");
        setError('name at least have 5 characters !')
        setTimeout(() => {
          setError('')
        }, 2000)
      } else if (!phoneRegex.test(productDetails.contact_number)) {
        // alert("Please enter valid Phone number !");
        setError('Please enter valid Phone number !')
        setTimeout(() => {
          setError('')
        }, 2000)
      } else if (!emailRegex.test(productDetails.email)) {
        // alert("Please enter valid Email !");
        setError('Please enter valid Email !')
        setTimeout(() => {
          setError('')
        }, 2000)
      } else if (productDetails.comments.length < 10) {
        // alert("comments at least have 10 characters !");
        setError('comments at least have 10 characters !')
        setTimeout(() => {
          setError('')
        }, 2000)
      } else {
        const product = { ...productDetails, product_id: id,product_name:type }
        // const pro = await axios.post(CREATE_PRODUCT_FORM, product).then((res) => {
        //   console.log(res)
        //   contactRef.current.click();
        //   // console.log(downloadCloseRef.current)
        //   downloadCloseRef.current.open();
        //   // downloadRef.current.click();
        //   console.log("submitted !")
        // }).catch((err) => {
        //   toast.error(err.response.data.message);
        // });

        await axios.post(SEND_MAIL_ADMIN, product).then((res) => {
          if (res.data.success) {
            setProductDetails({
              name: "",
              contact_number: "",
              email: "",
              comments: ""
            })
            contactRef.current.click();
            console.log("mail sent")
            downloadCloseRef.current.open();
          }
          else {
            console.log("mial not sent")
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    } else {
      setError("All Fields Are Required !");
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  };

  console.log("product Details", productDetails)

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
                  <span className='color-red'>{error}</span>

                </div>
                <div className='popup-actions'>
                  <div className="actions">
                    <button className="contact-btn" onClick={() => { handleSubmit(id,type) }}>Submit</button>
                  </div>

                </div>

              </div>
            )}
          </Popup>

        </div>

        <Popup
          trigger={<button className='prouct-content-btn' ref={downloadRef} style={{ display: "none" }}>promt</button>}
          modal
          ref={downloadCloseRef}
          closeOnDocumentClick={false}
        >
          {close => (
            <div className="popup">
              <div className='popup-form'>
                Hit Okay To Downloading Brochure !
              </div>
              <div className='popup-actions'>
                <div className="actions btns">
                  <button className="second-form-2" onClick={() => { handledownload() }} >ok</button>
                  <div className="actions" style={{ display: "none" }}>
                    <a href={pdf} ref={clickDownloadRef} download style={{ textDecoration: "none" }} className="download-btn" >
                      <span style={{ padding: "0 0.5rem 0 0.5rem", textAlign: "center" }}>
                        <MdDownload /></span>Download Brochure</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        theme="dark" />
    </div>

  )
}

export default ProductContent