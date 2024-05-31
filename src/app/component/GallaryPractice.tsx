import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { log } from 'console';

const GallaryPractice = () => {

    const [images, setImages] = useState([]);


    const getImages = async () => {
        const apiResponse = await axios.get("https://api.sampleapis.com/futurama/characters");
        const imagesPath = apiResponse.data.map((url: any) => url.images.main);

        setImages(imagesPath)
    }

    useEffect(() => {
        getImages();
    }, []);




    // const persons = [
    //     { name: "rahul", salary: 200000, age: 25 },
    //     {name: "yogesh", salary: 3333, age: 20},
    //     {name: "rohit", salary: 555, age: 25}
    // ]

    // console.log("persons", persons);
    

    // console.log(arrey[0].name);
    // console.log(arrey[0].salary);
    // console.log(arrey[0].age);

    // console.log("rohit values===============>",arrey[2].name);
    

    // {
    //     persons.map((person:any, index)=>{
    //         console.log("hiiiiiiiiiiiiiiiii================>",person[0].name);
    //     });
    // }

    return (
        <>
            <section className='lyt-section'>
                <div className="container">
                    <div className="row">
                        {images.map((path, index) => (

                            <div key={index} className="col-lg-3">
                                <div className="box">
                                    <Image
                                        src={path}
                                        alt="Images"
                                        width={1440}
                                        height={600}
                                    />


                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default GallaryPractice