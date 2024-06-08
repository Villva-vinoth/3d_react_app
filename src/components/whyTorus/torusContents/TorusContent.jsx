import React from 'react'
import './torusContent.css'
import image1 from '../../Assets/Why Torus/team.png'
const TorusContent = () => {
    return (
        <div className='torus-content-display'>
            <div className='torus-content-con'>
                <h2>WHY TORUS?</h2>
                <p>About Torus, Torus emerged from the collective expertise of a
                     team of mechatronics engineers who share a profound passion
                      for advancing Electric Vehicle (EV) powertrain systems.
                       Based out of the Detroit of Asia—Chennai, our commitment
                        centers around crafting powertrain systems that are not
                         only remarkably compact but also exceptionally efficient.
                          At the heart of our technological innovation lies the Torus Axial Flux Motors, 
                          a motor technology that we've meticulously designed
                           to be highly scalable. Comprising a dedicated team of 
                           15 individuals, we are fully engaged in research and development, 
                           tailoring our efforts to meet the unique requirements of our 
                           customers. Our primary objective is to pioneer high-power-density 
                           motor technology, propelling vehicles to greater speeds
                            and distances. Our core values are rooted in the belief in 
                            synergies—both within our internal cross-functional departments
                             and through our customer-centric development approach.
                              At Torus, we are steadfast in our mission to drive
                               innovation in the realm of EV powertrain systems,
                                contributing to a future where vehicles
                     go faster and farther with increased efficiency.</p>
            </div>
            <div className='torus-content-pic'>
                <img src={image1} alt='' />
            </div>
        </div>
    )
}

export default TorusContent