import React from 'react'
import imgTransform from '../assets/img/image-transform.jpg'

function SectionOne() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="left flex justify-center items-center p-[5rem]">
                <div className=''>
                <h3 className='text-5xl'>Transform your brands</h3>
                <p className='text-2xl text-gray-500 my-[2rem]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus vitae iure, illo nemo assumenda explicabo totam! Reiciendis voluptatibus non voluptate, laborum harum repellendus? Velit, nemo. Eveniet, deleniti. Odit, voluptate.</p>
                <a className='border-b-4 border-b-yellow-500 ' href='#'>Learn more</a>
                </div>
            </div>
            <div className="right">
                <img className='w-full' src={imgTransform} alt="transform your brands" />
            </div>
        </div>
    )
}

export default SectionOne