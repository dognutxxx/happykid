import React from 'react'
import imgstandOut from '../assets/img/image-stand-out.jpg'

function SectionTwo() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="left row-start-2 row-end-3">
                <img className='w-full' src={imgstandOut} alt="transform your brands" />
            </div>
            <div className="right flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
                <div >
                    <h3 className='text-5xl'>Stand out to the right audience</h3>
                    <p className='text-2xl text-gray-500 my-[2rem]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus vitae iure, illo nemo assumenda explicabo totam! Reiciendis voluptatibus non voluptate, laborum harum repellendus? Velit, nemo. Eveniet, deleniti. Odit, voluptate.</p>
                    <a className='border-b-4 border-b-red-400 ' href='#'>Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;