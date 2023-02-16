import React from 'react'

function CardTwoStopFlightFilter({ airline, timeDuration, departureNameCity, arriveNameCity, departureCodeCity, arriveCodeCity, departureDateTime, arriveDateTime, src, firstStopCity, secondStopCity }) {
    return (

        <div className='my-4 p-2 border shadow-xl'>
            <div className='flex justify-center '>
                <div className='border border-red-600 w-[20%]'>
                    <img className="w-100% " src={src} alt="Icon" />
                    <p className='text-[#828282]'>{airline}</p>
                    <p className='font-semibold text-[#4E1311]'>{timeDuration}</p>
                    <p className='font-semibold text-[#828282]'>2 Stop</p>
                </div>

                <div className='border border-red-600 w-[70%]'>
                    <div className='flex justify-between items-center'>
                        <div className=''>
                            <div className='flex justify-start text-[#4E1311] font-semibold'>
                                <p>{departureNameCity}</p>
                            </div>
                            <p className='text-[#828282]'>{departureCodeCity}</p>
                        </div>
                        <div className=''>
                            <div className='flex justify-end text-[#4E1311] font-semibold'>
                                <p className='text-end'>{arriveNameCity}</p>
                            </div>
                            <p className='text-end text-[#828282]'>{arriveCodeCity}</p>
                        </div>
                    </div>

                    <div className='my-2'>
                            <div className='flex items-center mx-2'>
                                {/* <img className="w-[50%] mx-2" src={`src/assets/img/lineDuration.png`} alt="Icon" />
                                <img className="w-[50%] mx-2" src={`src/assets/img/lineDuration.png`} alt="Icon" /> */}
                                <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="5" r="4" fill="#FAA819" />
                                <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="198" cy="5" r="4" fill="#FAA819" />
                                </svg>
                                <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="5" r="4" fill="#FAA819" />
                                <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="198" cy="5" r="4" fill="#FAA819" />
                                </svg>
                                <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="5" r="4" fill="#FAA819" />
                                <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="198" cy="5" r="4" fill="#FAA819" />
                                </svg>
                            </div>
                            <div className='flex w-auto items-center text-[#4E1311] font-semibold'>
                                <p className="w-[100%] text-start">{departureDateTime}</p>
                                <p className="w-[100%] text-center">{timeDuration}</p>
                                <p className="w-[100%] text-end">{arriveDateTime}</p>
                            </div>
                        </div>
                </div>

                <div className='border border-red-600 w-[20%] flex justify-center items-center'>
                    <button className='w-[70%] h-[50px] border rounded-full bg-[#FAA819]'>Select</button>
                </div>
            </div>
        </div>

    )
}

export default CardTwoStopFlightFilter