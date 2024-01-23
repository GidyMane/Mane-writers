// import { Button } from "@/shad/ui/button"

// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/shad/ui/popover"

// export function Payment() {
//     return (
//         <Popover>
//             <PopoverTrigger asChild>
//                 <Button variant="outline" className="capitalize dark:border-white">Make Payment</Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-80 z-10 bg-blue-800">
//                 <div className="grid gap-4">
//                     <div className="space-y-2">
//                         <h4 className="font-medium leading-none"></h4>
//                         <p className="text-sm text-white text-muted-foreground">
//                             Pay half before and the other half after the service.
//                         </p>

//                         <p className="text-md font-semibold mt-2">
//                             Full Payment is always after the service!
//                         </p>
//                     </div>
//                     <div className="grid gap-2">


//                         {/* <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label> */}
//                         <div className="relative mb-6">
//                             <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
//                                 <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
//                                     <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
//                                     <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
//                                 </svg>
//                             </div>
//                             <input type="text" id="input-group-1" readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50" value="kevin@gmail.com"/>
//                         </div>
//                         {/* <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label> */}
//                         <div className="flex">
//                             <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
//                                 <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
//                                 </svg>
//                             </span>
//                             <input type="tel" readOnly id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50" value="+254701678904"/>
//                         </div>

//                     </div>

//                     <div className="grid gap-2">
//                         <span className="font-bold text-white">Note:</span>

//                         <p className="text-red-300 italic "> Payment instructions will be sent to your Email or WhatsApp immediately after creating an order with us. </p>

//                     </div>
//                 </div>
//             </PopoverContent>
//         </Popover>
//     )
// }
import { useState } from 'react';
import { Button } from "@/shad/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shad/ui/popover";

export function Payment() {
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    const closePopover = () => {
        setPopoverOpen(false);
    };

    return (
        <Popover isOpen={isPopoverOpen} onClose={closePopover}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="capitalize dark:border-white" onClick={() => setPopoverOpen(!isPopoverOpen)}>Make Payment</Button>
            </PopoverTrigger>
            {isPopoverOpen && (
                <PopoverContent className="w-80 z-10 bg-blue-800">
                    <button onClick={closePopover} className="absolute top-2 right-2 text-white cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="grid gap-4">
                        {/* ... (rest of your content) */}
                        <div className="space-y-2">
                        <h4 className="font-medium leading-none"></h4>
                        <p className="text-sm text-white text-muted-foreground">
                            Pay half before and the other half after the service.
                        </p>

                        <p className="text-md font-semibold mt-2">
                            Full Payment is always after the service!
                        </p>
                    </div>
                    <div className="grid gap-2">


                        {/* <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label> */}
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input type="text" id="input-group-1" readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50" value="kevin@gmail.com"/>
                        </div>
                        {/* <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label> */}
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>
                            <input type="tel" readOnly id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50" value="+254701678904"/>
                        </div>

                    </div>

                    <div className="grid gap-2">
                        <span className="font-bold text-white">Note:</span>

                        <p className="text-red-300 italic "> Payment instructions will be sent to your Email or WhatsApp immediately after creating an order with us. </p>

                    </div>
                </div>
                    </div>
                </PopoverContent>
            )}
        </Popover>
    );
}
