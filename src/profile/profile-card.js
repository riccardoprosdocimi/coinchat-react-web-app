import React from "react";
import './index.css'

function ProfileCard () {
    return(
        <div className="card">
            <div className="card-img-top position-relative">
                <img src="/images/profile-banner.jpg"
                     className="card-img-top" alt="..."/>
                    <img className="position-absolute rounded-circle img-thumbnail"
                         style={{'height' : '85%', 'width' : '50%', 'bottom' : '5%', 'left' : '25%'}}
                         src="/images/profile-picture.jpg" alt=""/>
            </div>
            <div className="card-body">
                <div className="card-title fw-bold fs-4">
                    Dog Coin
                    <span className="fw-light text-secondary fs-6 ps-2">@DogCoin</span>
                </div>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada
                    a lorem et lacinia. Maecenas accumsan sodales odio, eget mattis tortor
                    aliquet sed. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                </p>
            </div>
        </div>
    )
}
export default ProfileCard