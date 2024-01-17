import React from 'react'

function SideStickyButtons(props) {
    var techCategories = [
        [1, "Programming"],
        [2, "Data Science"],
        [3, "Technology"],
        [4, "Self Improvement"],
        [5, "Writing"],
        [6, "Relationships"],
        [7, "Machine Learning"],
        [8, "Productivity"],
        [9, "Politics"]
    ]

    var anchData = [
        ["Help"],
        ["Status"],
        ["About"],
        ["Careers"],
        ["Blog"],
        ["Privacy"],
        ["Terms"],
        ["Text to speech"],
        ["Teams"]
    ]
    return (
        <>
            <div className="p-4 md:w-[38%] w-[100%] h-[100vh] sticky top-0">
                <h1 className="font-bold text-xl">Discover more of what matters to you</h1>
                <div className="mt-5">
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Programming</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Data Science</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Technology</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Self Improvement</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Writing</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Relationships</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Machine Learning</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Productivity</button>
                    <button className="bg-[#e1e1e1] py-2 px-3 rounded-3xl ml-3 mr-3 mb-3">Politics</button>
                </div>
                <h2 className="text-green-500 font-light underline">See more topics..</h2>
                <div className="mt-8 space-x-4">
                    <a href="#" className="text-slate-500">Help</a>
                    <a href="#" className="text-slate-500">Status</a>
                    <a href="#" className="text-slate-500">About</a>
                    <a href="#" className="text-slate-500">Careers</a>
                    <a href="#" className="text-slate-500">Blog</a>
                    <a href="#" className="text-slate-500">Privacy</a>
                    <a href="#" className="text-slate-500">Terms</a>
                    <a href="#" className="text-slate-500">Text to speech</a>
                    <a href="#" className="text-slate-500">Teams</a>
                </div>
            </div>
        </>
    )
}


export function AnchorLinks() {
    return (
        <>
            <a href="#" className="text-slate-500">{ }</a>

        </>
    )
}

export default SideStickyButtons