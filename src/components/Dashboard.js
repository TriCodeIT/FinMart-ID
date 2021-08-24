import React from 'react'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {

    const token = localStorage.getItem('token') //Untuk Pengecekan Token
   
    if(!token) {
        return <Redirect to="/" />  //Perlu Ada Token, Jika ada Token maka bisa Akses selanjutnya ke Dashboard, Jika Tidak Ada Token maka akan kembali ke login
    }

    return (
        <div className="container">
            <h3>Dashboard Form</h3>
        </div>
    )
}

export default Dashboard
