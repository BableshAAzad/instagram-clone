import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from 'react-icons/ri';
import { BiBookmark } from "react-icons/bi"
import ReqUserPostCard from './ReqUserPostCard';

function ReqUserPostPart() {
    let [activeTab, setActiveTab] = useState("");
    let tabs = [
        { tab: "Post", icon: <AiOutlineTable />, activeTab: "" },
        { tab: "Reels", icon: <RiVideoAddLine />, activeTab: "" },
        { tab: "Saved", icon: <BiBookmark />, activeTab: "" },
        { tab: "Tagged", icon: <AiOutlineUser />, activeTab: "" },

    ]
    return (
        <div>
            <div className='flex space-x-14 border-t relative'>
                {tabs.map(({ icon, tab }) => <div key={tab} onClick={() => setActiveTab(tab)}
                 className={`${activeTab === tab ? 'border-t border-black' : 'opacity-60'} flex items-center cursor-pointer py-2 text-sm`}>
                    <p>{icon}</p>
                    <p className='ml-1'>{tab}</p>
                </div>)}
            </div>
            <div>
                <div className='flex flex-wrap'>
                    {[1,2,3,4,5].map((val)=> <ReqUserPostCard key={val}/>)}
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostPart
