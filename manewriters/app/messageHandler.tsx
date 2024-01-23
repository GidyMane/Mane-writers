"use client"
import React from 'react'
import {Bounce, toast } from 'react-toastify';

const messageHandler = (type:any, message:string) => {
  return (
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        type:type
        })
  )
}

export default messageHandler