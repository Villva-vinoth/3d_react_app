import React,{useState} from 'react'
import './caroselBenefit.css'
import ReactSimplyCarousel from 'react-simply-carousel';
import carosel from '../../Assets/home/Benefit/carosel.png'
const CaroselBenefit = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const data = [
        { topic: "Benefits of TAFM", describe: `When integrated into automotive vehicles, Torus Axial Flux Motors 
        (TAFM) present a multitude of advantages, emphasizing efficiency 
        and lightweight design. Notably, our motors boast the highest 
        regenerative braking potential, enabling vehicles to achieve up to 
        10% greater speed and distance`, logo: carosel },
        { topic: "Benefits of TAFM", describe: `When integrated into automotive vehicles, Torus Axial Flux Motors 
        (TAFM) present a multitude of advantages, emphasizing efficiency 
        and lightweight design. Notably, our motors boast the highest 
        regenerative braking potential, enabling vehicles to achieve up to 
        10% greater speed and distance`, logo: carosel },
        { topic: "Benefits of TAFM", describe: `When integrated into automotive vehicles, Torus Axial Flux Motors 
        (TAFM) present a multitude of advantages, emphasizing efficiency 
        and lightweight design. Notably, our motors boast the highest 
        regenerative braking potential, enabling vehicles to achieve up to 
        10% greater speed and distance`, logo: carosel },
        { topic: "Benefits of TAFM", describe: `When integrated into automotive vehicles, Torus Axial Flux Motors 
        (TAFM) present a multitude of advantages, emphasizing efficiency 
        and lightweight design. Notably, our motors boast the highest 
        regenerative braking potential, enabling vehicles to achieve up to 
        10% greater speed and distance`, logo: carosel}
    ];


  return (
    <div>
        <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            display:'none'
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            display:'none'
          },
          children: <span>{`<`}</span>,
        }}
        dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 5,
                width: 25,
                // borderRadius: "50%",
                border: 0,
               marginTop:"10px",
               margin:"5px"
              }
            },
            activeItemBtnProps: {
              style: {
                height: 5,
                width: 25,
                // borderRadius: "50%",
                border: 0,
                background: "black",
                marginTop:"10px",
                margin:"5px"

              }
            }
          }}
        speed={700}
        easing="linear"
      >
       {
        data.map((item,index)=>{
                return(
                    <div key={index} className='carosel-benefit-container'>
                        <div className='carsel-benefit-header'>{item.topic}</div>
                        <div className='carosel-benefit-pic'><img src={item.logo} alt="" /></div>
                        <div className='carosel-benefit-para'>{item.describe}</div>
                    </div>
                )
        })
       }
      </ReactSimplyCarousel>
    </div>
  )
}

export default CaroselBenefit