import React from 'react'
import Gallery1 from "../../assets/images/home/res8.jpg"
import Gallery2 from "../../assets/images/home/res5.jpg"
import Gallery3 from "../../assets/images/home/res4.jpg"
import Gallery4 from "../../assets/images/home/res9.jpg"
import Gallery5 from "../../assets/images/home/res6.jpg"
import Gallery6 from "../../assets/images/home/res7.jpg"

export default function ImageGallery ()     {
  return (
    <div className="container py-5">
    <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>
    <div className="row">
        <div className="col-md-4 px-2">
            <div className="my-3">
                <img src={Gallery1} className="img-fluid" alt="" />
            </div>
            <div className="my-3">
                <img src={Gallery2} className="img-fluid" alt="" />
            </div>
        </div>
        <div className="col-md-4 px-2">
            <div className="my-3">
                <img src={Gallery3} className="img-fluid" alt="" />
            </div>
            <div className="my-3">
                <img src={Gallery4} className="img-fluid" alt="" />
            </div>
        </div>
        <div className="col-md-4 px-2">
            <div className="my-3">
                <img src={Gallery5} className="img-fluid" alt="" />
            </div>
            <div className="my-3">
                <img src={Gallery6} className="img-fluid" alt="" />
            </div>
        </div>
    </div>
</div>
  )
}


