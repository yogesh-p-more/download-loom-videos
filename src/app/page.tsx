'use client'
import axios from "axios";
import { useState } from "react";
import "../base/lyt-section.scss"
import Header from "./component/header"
import Gallery from "./component/Gallary"


export default function Home() {

  const [videoUrl, setVideoUrl] = useState("");

  const [successApiResponse, setSuccessApiResponse] = useState("");
  const [errorApiResponse, setErrorApiResponse] = useState("");

  const clearMessage = () => {
    setSuccessApiResponse("");
    setErrorApiResponse("");
  }

  const handleDownload = async () => {
    clearMessage();

    if (videoUrl.length === 0) {
      setErrorApiResponse("please enter video url")
      return
    }

    const response = await axios.post("http://localhost:8080/download-video", { url: videoUrl })

    if (response.data.success) {
      setSuccessApiResponse(response.data.message)
    } else {
      setErrorApiResponse(response.data.message)
    }
  }

  const handleChnage = (e:any) => {
    setVideoUrl(e.target.value)

  }

  return (
    <>
      <Header />
      <section className="lyt-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="bs-heading text-center">Video Downloder</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input type="text" onChange={(e) => handleChnage(e)} name="videoUrl" className="form-control" placeholder="Enter your text" aria-label="Enter your text" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button" onClick={() => handleDownload()}>Download</button>
                </div>

                <p className="text-success">{successApiResponse}</p>
                <p className="text-danger">{errorApiResponse}</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Gallery/>
    </>
  );
}
