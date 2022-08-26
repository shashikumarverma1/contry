import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function HomePage() {
  const [data, setdata] = useState([])
  const [searctTerm, setsearctTerm] = useState("")
  let navigate = useNavigate()
  const Logout = () => {
    // localStorage.clear();
    navigate('/')
  }
  useEffect(() => {
    let url = 'https://restcountries.com/v2/all';
    axios.get(url).then((res) => {
      console.log(res.data)
      setdata(res.data)
      localStorage.setItem('data', res.data)
    }).catch()
  }, [])


  return (
    <div className='d-flex justify-content-center bg-info'>

      <div className='w-75'>
        <div className='row py-2'>
          <div className='col bg-dark rounded'>

            <div className='col-9'>
              <div className='d-flex justify-content-between w-100 '>  <input type='text' className=' rounded  my-2' placeholder=' SEARCH..... ' onChange={(e) => {
                setsearctTerm(e.target.value)
              }} />
                <div className='col-3 '><button className='btn btn-danger w-100 my-2 text-white mx-4' onClick={Logout}>Logout</button></div>
              </div>

            

            </div>
            {
              data.filter((val) => {
                if (searctTerm === "") {
                  return val
                } else if (val.name.toLowerCase().includes(searctTerm.toLocaleLowerCase())) {
                  return val
                }
              }).map((e, i) => {
                return (
                  <div>
                    <b className='d-flex p-2 border rounded'>
                      <div className='text-white'>{i + 1}.</div>.
                      <div className='text-white'>Name : {e.name}</div>
                      <div className='mx-1 text-white'>Capital : {e.capital}</div>
                    </b>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default HomePage