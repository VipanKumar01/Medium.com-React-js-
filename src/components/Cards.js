import React from 'react'
import CardButton from './CardButton'
import Trending from './Trending'

function Cards() {
    
    var data = [
        [1, "Netflix TechBlog Netflix Technology Blog in Netflix TechBlog", "Rebuilding Netflix Video Processing Pipeline with Microservices", "Jan 11 · 9 min read", "assets/icons/NT.png"],
        [2, "Netflix TechBlog Netflix Technology Blog in Netflix TechBlog", "Rebuilding Netflix Video Processing Pipeline with Microservices", "Jan 11 · 9 min read", "assets/icons/adob.png"],
        [3, "Netflix TechBlog Netflix Technology Blog in Netflix TechBlog", "Rebuilding Netflix Video Processing Pipeline with Microservices", "Jan 11 · 9 min read", "assets/icons/NC.png"]
    ]
    return (
        <>
            <div className="mycards p-5">
                <div className="flex text-center items-center">
                    <i className="ri-funds-line text-[20px]"></i>
                    <h1 className="font-bold text-xl ml-1">Trending on Medium</h1>
                </div>
                <div className="p-5 flex">

                    <div className="md:w-12/12 flex md:flex-row flex-col mt-4">

                        <Trending count={data[0][0]} title={data[0][1]} desc={data[0][2]} date={data[0][3]} img={data[0][4]}/>
                        <Trending count={data[1][0]} title={data[1][1]} desc={data[1][2]} date={data[1][3]} img={data[1][4]}/>
                        <Trending count={data[2][0]} title={data[2][1]} desc={data[2][2]} date={data[2][3]} img={data[2][4]}/>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards