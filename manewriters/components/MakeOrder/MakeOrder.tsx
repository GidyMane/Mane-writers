"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./make.css"
import messageHandler from '@/app/messageHandler';


const langs = [
    
    "UK English 🇬🇧",
    "US English 🇺🇸",
    "Canadian English 🇨🇦",
    "Australian English 🇦🇺"
]


const MakeOrder = ({ services }: { services: any }) => {

    const [file, setFile] = useState<any>()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        setFile(e.target.files[0]);



    };
    // services options
    const serviceOptions = services.map((service: any, index: number) => (
        <option key={index} value={service}>{service}</option>
    ))

    const optionsArray = Array.from({ length: 100 }, (_, index) => index + 1);

    // Create a map using the generated array
    const optionsMap = optionsArray.map((option, index) => (
        <option key={index} value={option}>{option}</option>
    ));
    const languages = langs.map((lang, index) => (
        <option key={index} value={lang}>{lang}</option>
    ));

    let today = new Date()

    function separateDateTime(dateTimeString: string) {
        // Parse the input datetime string
        const dateTime = new Date(dateTimeString);

        // Extract date components
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(dateTime.getDate()).padStart(2, '0');

        // Extract time components
        const hours = String(dateTime.getHours()).padStart(2, '0');
        const minutes = String(dateTime.getMinutes()).padStart(2, '0');
        const seconds = String(dateTime.getSeconds()).padStart(2, '0');

        // Create separate date and time strings
        const dateResult = `${year}-${month}-${day}`;
        const timeResult = `${hours}-${minutes}-${seconds}`;

        return `date- ${dateResult}  time ${timeResult} }`;
    }








    const formik = useFormik({
        initialValues: {
            service: '',
            topic: '',
            page: '',
            assignmentsLanguage: '',

            instructions: '',
            email: '',
            deadline: ''
        },
        validationSchema: Yup.object({
            service: Yup.string()
                .required('Required'),
            topic: Yup.string()
                .required('Required'),
            page: Yup.number()
                .required('Required').positive(),
            instructions: Yup.string()
                .required('Required'),
            email: Yup.string()
                .required('Required').email(),
            assignmentsLanguage:Yup.string().required("Required"),
            deadline: Yup.date().required("deadline required").min(today)


        }),
        onSubmit: (values) => {


            const formData = new FormData();


            values.deadline = separateDateTime(values.deadline)
            // Append JSON data
            formData.append('jsonField1', JSON.stringify(values));


            // Append the PDF file
            formData.append('files', file);

            setTimeout(() => {
                fetch("https://gidymane.pythonanywhere.com/api/emails/sendmail/", {
                    method: "POST",

                    body: formData
                }).then(res => res.json()).then(data => {
                    messageHandler("success", data)
                })
                formik.setSubmitting(false)
                formik.resetForm()

                messageHandler("success", "sent")



            }, 5000)




            // if (res.status == 200){

            // }else{
            //     messageHandler("error", "failed to send")
            // }





            // messageHandler("success", "sent")



        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} id='makeorder' className='flex flex-col' encType='multipart/form-data'>
                <label htmlFor="email" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Your email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='john@doe.com'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='text-sm text-red-500'>{formik.errors.email}</div>
                ) : null}
                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="service">*select service</label>
                <select
                    id="service"
                    name="service"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.service}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value=""></option>
                    {serviceOptions}

                </select>
                {formik.touched.service && formik.errors.service ? (
                    <div className='text-sm text-red-500'>{formik.errors.service}</div>
                ) : null}
                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="topic">*your topic</label>
                <input
                    id="topic"
                    name="topic"
                    type="text"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.topic}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {formik.touched.topic && formik.errors.topic ? (
                    <div className='text-sm text-red-500'>{formik.errors.topic}</div>
                ) : null}

                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="page">*Select page/size</label>
                <select
                    id="page"
                    name="page"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.page}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value=""></option>
                    {optionsMap}
                </select>
                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="page">*Assignment Language</label>
                <select
                    id="page"
                    name="assignmentsLanguage"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.assignmentsLanguage}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                    <option value=""></option>
                    {languages}
                </select>
                {formik.touched.assignmentsLanguage && formik.errors.assignmentsLanguage ? (
                    <div className='text-sm text-red-500'>{formik.errors.assignmentsLanguage}</div>
                ) : null}
                {formik.values.page && (
                    <div className='mt-2 text-white text-sm mb-2'> will cost you : ${parseInt(formik.values.page) * 10}</div>

                )}
                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="instructions">*Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.instructions}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {formik.touched.instructions && formik.errors.instructions ? (
                    <div className='text-sm text-red-500'>{formik.errors.instructions}</div>
                ) : null}

                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2" htmlFor="topic">*Deadline</label>

                <div className="relative w-full my-2">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input type="datetime-local" name='deadline' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.deadline} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                </div>

                {formik.touched.deadline && formik.errors.deadline ? (
                    <div className='text-sm text-red-500'>{formik.errors.deadline}</div>
                ) : null}



                <label className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                <input type="file" className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' name="file" id="" multiple required onChange={handleFileChange} />


                <button type="submit" className='capitalize mb-4 mt-4 items-center text-white bg-blue-800 rounded-md hover:scale-105 transition-all duration-150 ease-in px-4 py-2 shadow-md disabled:bg-gray-300 cursor-pointer disabled:cursor-not-allowed' disabled={formik.isSubmitting} onClick={() => {

                }}>
                    {formik.isSubmitting ? "sending....." : "make an order"}
                </button>
            </form>
        </>
    );
};


export default MakeOrder;
