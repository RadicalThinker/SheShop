import Slider from "react-infinite-logo-slider";

const Sliderlogo = () => {
    
    return (
        <Slider
            width="250px"
            duration={10}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#000'}
            
        >
            {/* <Slider.Slide>
                <img src={sheshoplogo} alt="any" className='w-36' />
            </Slider.Slide> */}
            {/* <Slider.Slide>
                <img src="/slider/any2.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any3.png" alt="any3" className='w-36' />
            </Slider.Slide> */}
            <Slider.Slide>
                <div className='text-white'>
                   SheShop
                </div>
            </Slider.Slide>
            <Slider.Slide>
                <div className='text-white'>
                   Shop NOW
                </div>
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default Sliderlogo;