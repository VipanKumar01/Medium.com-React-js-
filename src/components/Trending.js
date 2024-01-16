import React from 'react'

function Trending(props) {
    
    return (
        <>
            <div className="md:w-6/12 flex">
                <div className="md:w-[10%] mt-4">
                    <h1 className="text-[#e2e2e2] text-2xl font-semibold mt-1">{props.count}</h1>
                </div>
                <div className="ml-3">
                    <div className="flex flex-col">
                        <div className="flex mt-3 mb-3">
                            <img className="w-6 h-6" src={props.img} alt="" />
                            <h3 className="ml-3 ">{props.title}</h3>
                        </div>
                        <h1 className="font-bold text-lg mb-3">{props.desc}</h1>
                        <h5 className="text-[#bdbdbd]">{props.date}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending