import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Dilkhush28')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl max-lg:justify-end'>Github followers: {data.followers}
    <div className='Text0center m-4 bg-gray-600 text-white p-4 text-2xl'>Name: {data.name}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Dilkhush28')
    return response.json()
}