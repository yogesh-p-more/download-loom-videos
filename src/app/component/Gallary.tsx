import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from 'axios';

const Gallary = () => {
    const [images, setImages] = useState([]);

    const callApi = async () => {
        const response = await axios.get("https://api.sampleapis.com/futurama/characters")
        const imageArray = response.data.map((character: any) => character.images.main);

        setImages(imageArray);
    }






    useEffect(() => {
        callApi();
    }, []);


    // const imagePath = [
    //     "/images/Banner1.jpg",
    //     "/images/Banner1.jpg",
    //     "/images/Banner1.jpg",
    //     "/images/Banner1.jpg",
    //     "/images/Banner1.jpg",
    //     "/images/Banner1.jpg",
    //     "/images/Banner1.jpg",
    //     "/images/Banner1.jpg",
    // ]

    const names =[
        "yogesh",
        "rahul"
    ]
    return (
        <>
            <section className="lyt-section">
                <div className="container">
                    <div className="row g-5">

                        {images.map((path, index) => (
                            <div key={index} className="col-lg-3 col-md-2 col-1">
                                <div className="box h-100   ">
                                    <Image
                                        src={`${path}`}
                                        alt="Description of image"
                                        width={1440}
                                        height={616}
                                    />
                                </div>

                                {names.map((name, i)=>(
                                    <p key={i}>{name}</p>
                                ))}
                                
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallary