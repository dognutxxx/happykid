import React from 'react'
import imggraphic from '../assets/img/image-graphic-design.jpg'
import imgphotography from '../assets/img/image-photography.jpg'

function SectionThree() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 h-[700px]'>
            <div className="left flex justify-center items-end p-[2rem]  lg:py-[5rem] lg:px-[15rem] text-center bg-sec-three-left bg-cover">
                <div>
                    <h3 className='text-3xl mb-4 font-bold'>Graphy design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam similique commodi. Quo maiores alias, architecto rem expedita officia quam optio ratione explicabo perferendis rerum excepturi, deleniti quis, eveniet praesentium.</p>
                </div>
            </div>
            <div className="right flex justify-center items-end p-[2rem]  lg:py-[5rem] lg:px-[15rem] text-center bg-sec-three-right bg-cover">
                <div>
                    <h3 className='text-3xl mb-4 font-bold'>Graphy design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam aperiam obcaecati deserunt vero, natus laboriosam earum provident culpa distinctio voluptas, modi delectus minima sit excepturi blanditiis, cupiditate maxime id.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;