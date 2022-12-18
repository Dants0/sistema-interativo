import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const shutdownSession = () => {
        localStorage.removeItem('token');
        nav('/')
    }
    let nav = useNavigate()






    return (
        <>
            <h1>Home</h1>
            <button onClick={shutdownSession}>encerrar sessão</button>
        </>
    )
}

export default Dashboard