import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTool = () => {
    return (
        <div className='px-4 sm:px-20 xl:px32 my-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Powerful AI Tools</h2>
                <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm;text-xs text-gray-600'>Everything you need to create, enhance, and optimize your content with cutting-edge technology</p>
            </div>

            <div className='flex flex-wrap mt-10 justify-center'>
                {AiToolsData.map((tool, index) => (
                    <div key={index} className='p-8 m-4 max-w-sm rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                        onClick={() => navigate(tool.path)}>
                        <tool.Icon className='w-12 h-12 text-white rounded-xl' style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }} />
                        <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
                        <p>{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

    export default AiTool
