import React from 'react'
import CardButton from '../CardButton'
import SideStickyButtons from './SideStickyButtons'

function CommonBlogPost(props) {
    var techCategory = ["Programming"]
    return (
        <>
            <div className="md:w-[60%] w-[100%] text-black-900 snap-y ">
                <div className="border-b-[1px] border-b-slate-500 m-1">
                    <div className="p-3 ">
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-sm mb-2 font-semibold">{props.subHeading}</h5>
                                <h1 className="font-[700] md:mb-4">{props.title}</h1>
                                <h2 className="text-slate-500">{props.desc}</h2>
                            </div>
                            <img className="rounded-lg w-52 hidden sm:block" src={props.img} alt="Yoda" />
                        </div>
                        <div className="flex justify-between p-2">
                            <div className="flex">
                                <h5 className="text-[#bdbdbd] py-1 px-2 text-sm ">{props.date}</h5>
                                <CardButton techCategory={techCategory} />
                            </div>
                            <i className="ri-star-line text-[#535353]"></i>
                            <i className="ri-star-fill text-[#535353] hidden"></i>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CommonBlogPost