import React, { createRef, useEffect } from 'react'
import Headerlink from './Common/Headerlink'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MyHeader() {
    
    return (
        <>
            <div
                className="mynavbar p-5 md:pr-[100px] md:pl-[100px] bg-[#ffc017] flex justify-between items-center border-[1px] border-black">
                <img className="mylogoimg h-[28px]" src="../assets/logo.png" alt="icon" />
                <div className="hidden md:block">
                    <div className="flex space-x-7 items-center mylinks">
                        <Headerlink linkname="Our story" />
                        <Headerlink linkname="Membership" />
                        <Headerlink linkname="Write" />
                        <Headerlink linkname="Sign in" />

                        <a href="#"
                            className="gsaponlinks no-underline text-white bg-black px-3 py-2 hidden md:block rounded-xl">Get
                            started</a>
                    </div>
                    <a href="#" className="no-underline text-white bg-black px-3 py-2 hidden rounded-xl my-button">Get
                        started</a>
                </div>
                <a href="#" className="no-underline text-white bg-black px-3 py-2 md:hidden block rounded-xl">Get started</a>
            </div>
        </>
    )
}

export default MyHeader