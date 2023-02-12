import React, { useState } from "react";
import CarouselData from '../data/carouselData';
import LeftCircle from '../images/carousel/leftCircle.svg';
import RightCircle from '../images/carousel/rightCircle.svg';


const Carousel2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //   const images = [
    //     "ABC",
    //     "DEF",
    //     "GHI", 
    //     "JKL"
    //   ];

    const previous = () => {
        const lastIndex = CarouselData.length - 1;
        const shouldResetIndex = currentIndex === 0;
        // we will check if the current index === 0 then the reset index will be set to true otherwise it will be false
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    const next = () => {
        const lastIndex = CarouselData.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    //   return (
    //     <div>
    //       {/* <img src={images[currentIndex]} alt="" /> */}
    //       <div>
    //         <h1>{images[currentIndex]}</h1>

    //       </div>
    //       <button onClick={previous}>Previous</button>
    //       <button onClick={next}>Next</button>
    //     </div>
    //   );
    // };



    const handlePageClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            <div className='row' style={{ width: '80%', margin: 'auto' }}>
                <div className='col-12 col-md-2'>
                    <img src={CarouselData[currentIndex].image} alt="" />
                </div>

                <div className='col-12 col-md-9' style={{ margin: 'auto' }}>
                    <div >
                        {CarouselData[currentIndex].description}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '60%', margin: 'auto' }}>
                <div>
                    <button onClick={previous} style={{ border: 'none', background: 'none' }}>
                        <img src={LeftCircle} alt='../left'></img>
                    </button>
                </div>

                <div>
                    <div>
                        {CarouselData.map((image, index) => (
                            <span key={index}
                                onClick={() => handlePageClick(index)}
                                style={{
                                    cursor: "pointer", marginRight: "10px",
                                    opacity: index === currentIndex ? 1 : 0.5,
                                    fontSize: '2rem'

                                }}>
                                .
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <div role = 'button' onClick={next} style={{ border: 'none', background: 'none' }}>
                        <img src={RightCircle} alt='../right'></img>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Carousel2;
