import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://previews.123rf.com/images/kostymo/kostymo1707/kostymo170700133/82758474-horizontal-banner-template-on-car-repairs-logo-hand-holding-a-wrench-auto-mechanic-removed-engine-ca.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://previews.123rf.com/images/kostymo/kostymo1707/kostymo170700172/82758554-horizontal-banner-template-on-car-repairs-repair-logo-hand-holding-a-wrench-disassembled-car-red-aut.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/hands-car-mechanic-working-engine-panoramic-banner-repairing-155899756.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;