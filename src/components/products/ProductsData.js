import image1 from '../Assets/product/1kw.png'
import image2 from '../Assets/product/v1.png'
import image3 from '../Assets/product/tesc120A.png'
import image4 from '../Assets/product/tesc180A.png'
import image5 from '../Assets/product/trc.png'

const productList =[
    {
        img:image1,
        type:"1KW MOTOR",
        describe:"Discover our cutting-edge 1kW axial flux motor, engineered for efficiency and performance. Ideal for EV & Robotics, this compact and powerful motor delivers reliable operation and optimal energy utilization.",
        voltageRange:"48/60/72",
        ratedPower:"2.5kW - 3.5kW",
        peakPower:"4kW - 7.5kW",
        MaxRPM:"5100 RPM",
        peakTorque :"25Nm",
        overloadTorque:"40Nm",
        dutyCycle:"S9",
        weight:"7 kgs"
    },
    {
        img:image2,
        type:"V1",
        describe:"Unleash power and efficiency with our 4kW axial flux motors. Compact and high torque, they're perfect for Electric vehicles and industrial machinery. Engineered for optimal performance and energy efficiency, they're the future of propulsion. Experience superior technology and reliability with our innovative motor solutions.",
        voltageRange:"48/60/72",
        ratedPower:"2.5kW - 3.5kW",
        peakPower:"4kW - 6.5kW(60 seconds)",
        MaxRPM:"5100 RPM",
        peakTorque :"25Nm",
        overloadTorque:"55Nm",
        dutyCycle:"S9",
        weight:"7kgs"
    },
    {
        img:image2,
        type:"V2",
        describe:"Unleash power and efficiency with our 4kW axial flux motors. Compact and high torque, they're perfect for Electric vehicles and industrial machinery. Engineered for optimal performance and energy efficiency, they're the future of propulsion. Experience superior technology and reliability with our innovative motor solutions.",
        voltageRange:"48/60/72/96",
        ratedPower:"3.5kW - 5kW",
        peakPower:"6kW - 8kW(60 seconds)",
        MaxRPM:"5500 RPM",
        peakTorque :"33Nm",
        overloadTorque:"55Nm",
        dutyCycle:"S9",
        weight:"9kgs"
    },
    // {
    //     img:image3,
    //     type:"TESC 120A",
    //     describe:"Unleash precision motor control in compact systems with our Three-Phase Inverter for 200A PMSM applications. Perfect for electric vehicles and small-scale industrial automation, this variant features advanced PWM technology and resilient algorithms for efficient and reliable performance. Elevate your low-power systems with our cutting-edge solution.",
    //     // NominalVoltage:"48/60/72V",
    //     // maxCurrent:"200Arms",
    //     voltage:"48/60/72",
    //     batteryCurrent:"120A",
    //     phaseCurrent:"200A RMS"
       
    // },
    // {
    //     img:image4,
    //     type:"TESC 180A",
    //     describe:"Empower high-performance applications with our Three-Phase Inverter designed for 300A PMSM motors. Tailored for electric vehicles and demanding industrial automation, this variant boasts advanced PWM technology and robust algorithms, ensuring superior efficiency and reliability. Elevate your high-power systems with our cutting-edge solution.",
    //     // NominalVoltage:"48/60/72V",
    //     // maxCurrent:"200Arms",
    //     voltage:"48/60/72",
    //     batteryCurrent:"120A",
    //     phaseCurrent:"300A RMS"
       
    // },
    {
        img:image3,
        type:"TESC 300",
        describe:"Unleash power and efficiency with our 4kW axial flux motors. Compact and high torque, they're perfect for Electric vehicles and industrial machinery. Engineered for optimal performance and energy efficiency, they're the future of propulsion. Experience superior technology and reliability with our innovative motor solutions.",
        NominalVoltage:"48/60/72V",
        maxCurrent:"200Arms"
       
    },
    {
        img:image4,
        type:"TESC 600",
        describe:"Unleash power and efficiency with our 4kW axial flux motors. Compact and high torque, they're perfect for Electric vehicles and industrial machinery. Engineered for optimal performance and energy efficiency, they're the future of propulsion. Experience superior technology and reliability with our innovative motor solutions.",
        NominalVoltage:"48/60/72V",
        maxCurrent:"400Arms"
       
    },
    {
        img:image5,
        type:"TRC",
        describe:"Empower your robotic systems with our Three-Phase Inverter tailored for PMSM motors. Our intelligent FOC controller offers precise motion control, enhancing the agility and efficiency of your robots. Elevate your robotics performance with our innovative motor control solution.",
        RatedVoltage:"12V - 60V",
        AbsoluteMaxVoltage:" 60v",
        ContinousCurrent :"40-50 amps",
        PeakCurrent:"120 amps max",
        OperatingMode:"Position control,velocity control,Torque control",
        Support:"USB,UART,CAN, GPIO ,SPI Encoders,ABI Encoders, etc."
       
    },
   
   
    // {
    //     img:image2,
    //     type:"V1",
    //     describe:"Unleash power and efficiency with our 4kW axial flux motors. Compact and high torque, they're perfect for Electric vehicles and industrial machinery. Engineered for optimal performance and energy efficiency, they're the future of propulsion. Experience superior technology and reliability with our innovative motor solutions.",
    //     voltageRange:"48/60/72",
    //     ratedPower:"3.5kW - 5kW",
    //     peakPower:"6kW - 8kW",
    //     MaxRPM:"5500 RPM",
    //     peakTorque :"33Nm",
    //     overloadTorque:"55Nm",
    //     dutyCycle:"S9",
    //     weight:"9 kgs"
    // },
    // {
    //     img:image1,
    //     type:"V1",
    //     describe:"Unleash power and efficiency with our 4kW axial flux motors. Compact and high torque, they're perfect for Electric vehicles and industrial machinery. Engineered for optimal performance and energy efficiency, they're the future of propulsion. Experience superior technology and reliability with our innovative motor solutions.",
    //     voltageRange:"48/60/72",
    //     ratedPower:"3.5kW - 5kW",
    //     peakPower:"6kW - 8kW",
    //     MaxRPM:"5500 RPM",
    //     peakTorque :"33Nm",
    //     overloadTorque:"55Nm",
    //     dutyCycle:"S9",
    //     weight:"9 kgs"
    // },
    // {
    //     img:image2,
    //     type:"V1",
    //     describe:"Unleash power and efficiency with our 4kW axial flux motors. Compact and high torque, they're perfect for Electric vehicles and industrial machinery. Engineered for optimal performance and energy efficiency, they're the future of propulsion. Experience superior technology and reliability with our innovative motor solutions.",
    //     voltageRange:"48/60/72",
    //     ratedPower:"3.5kW - 5kW",
    //     peakPower:"6kW - 8kW",
    //     MaxRPM:"5500 RPM",
    //     peakTorque :"33Nm",
    //     overloadTorque:"55Nm",
    //     dutyCycle:"S9",
    //     weight:"9 kgs"
    // },
]
export {productList}