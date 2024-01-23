"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/shad/ui/scroll-area';
import Link from 'next/link';


const Sample = ({ samples }: { samples: any }) => {
    const [visibleSamples, setVisibleSamples] = useState(samples.slice(0, 3));

    const handleShowMore = () => {
        setVisibleSamples((prevServices: any) => [...prevServices, ...samples.slice(prevServices.length, prevServices.length + 3)]);
    };


    return (
        <>

            <ScrollArea className="w-full  rounded-md ">
                <Link href="#makeorder">
                <div className="flex w-max space-x-2 p-4">
                    {samples.map((sample:any) => (
                        <div key={sample.id} id={sample.name} className="max-w-sm mb-4 md:max-w-sm col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            
                                <img className="rounded-t-lg w-full h-[300px]" src={sample.image} alt='' />
                            
                            <div className="p-5">
                              
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{sample.name}</h5>
                                
                                <p className="mb-3 font-normal flex flex-wrap text-gray-700 dark:text-gray-400">{sample.description}</p>
                                {/* <>
                {React.Children.toArray(SampleViewer(sample.name))}
                </> */}
                            </div>
                        </div>

                    ))}
                </div>
                <ScrollBar orientation="horizontal" className='bg-gray-300 font-thin ' />
                </Link>
            </ScrollArea>



        </>
    )
}

export default Sample;