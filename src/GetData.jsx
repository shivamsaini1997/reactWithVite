import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function GetData() {
    const [data, setdata] = useState([]);
    const getdata = async () => {
        try {
            const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(responseData.data)
            setdata(responseData.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((itme, i) => (
                                <>
                                    <tr>
                                        <td>{itme.id}</td>
                                        <td>{itme.title}</td>
                                        <td>{itme.body}</td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default GetData
