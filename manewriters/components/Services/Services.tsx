"use client"
import { categoryContext } from '@/context/CategoryContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'

const Services = ({ services, category }: { services: any, category: any }) => {
    const { categoryType } = useContext(categoryContext);
    const [visibleServices, setVisibleServices] = useState(services.slice(0, 3));

    useEffect(() => {
        // Update visibleServices when categoryType changes
        const filteredServices = categoryType === "All"
            ? services.slice(0, 3)
            : services.filter((item: { category: any }) => item.category === categoryType).slice(0, 3);

        setVisibleServices(filteredServices);
    }, [categoryType, services]);

    const handleShowMore = () => {
        setVisibleServices((prevServices: any) => [...prevServices, ...services.filter((item: { category: any }) => item.category === categoryType).slice(prevServices.length, prevServices.length + 3)]);
    };

    return (
        <>
            <Link href="#makeorder">
                <div className='md:grid grid-cols-3 gap-2'>
                    {visibleServices.map((service: any) => (
                        <div key={service.id} id={service.name} className="w-full mb-4 md:max-w-sm col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Image className="rounded-t-lg" src={service.image} alt="" height={500} width={500} />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Link>

            {visibleServices.length < services.length && (
                <div className='w-full flex justify-center items-center'>
                    <button onClick={handleShowMore} className="bg-gray-300 hover:text-blue-900 text-blue-600 place-content-center flex items-center justify-center rounded-md hover:cursor-pointer text-md font-bold py-2 px-4 ">
                        View More
                    </button>
                </div>
            )}
        </>
    )
}

export default Services;
