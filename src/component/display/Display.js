import { React } from 'react'

import './display.css'


const Display = () => {
    return (
        <div class="card cardStyl align-item-center justify-content-center">
            <img class="card-img-top" src={localStorage.getItem("fileBase64")} alt="" />

            <div class="card-body">
                <h5 class="textStyl1 pb-2 pt-1">{localStorage.getItem("username")}</h5>
                <h4 class="font-weight-bold card-title">Email: {localStorage.getItem("email")}</h4>
                <p class="card-text">Mobile: {localStorage.getItem("mobile")}</p>
                <p class="card-text">Address: {localStorage.getItem("address")}</p>

            </div>
        </div>

    )
}

export default Display;