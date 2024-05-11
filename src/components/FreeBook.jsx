import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function FreeBook() {
    const bookItems = list.filter((data) => data.category == 'Free');

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <> < div className = ' md:max-w-screen-2xl container mx-auto' > <center className='mb-5'>
            <h2 className='text-2xl font-bold underline underline-offset-8'>Our Free Books</h2><br/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </center>

        <Slider {...settings}>

            {bookItems.map((item) => 
                (<Card item={item} key={item.id}/>)
            )}

        </Slider>
    </div>

</>
    )
}

export default FreeBook
