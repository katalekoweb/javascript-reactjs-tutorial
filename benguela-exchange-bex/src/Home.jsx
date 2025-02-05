import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {
    const [currencies, setCurrencies] = useState([])
    const [amount, setAmount] = useState(1)
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("AOA")
    const [result, setResult] = useState("")

    useEffect(() => {
        convert()
        getCurrencies()
    }, [])

    const convert = () => {
        axios.get(`https://api.fastforex.io/fetch-one?api_key=233d45481e-c588f7f6a8-sr60yq&from=${from}&to=${to}`).then((res) => {
            if (res.data?.result) {
                setResult(res.data?.result[to] * amount)
            }
        })
    }

    const getCurrencies = () => {
        axios.get(`https://api.fastforex.io/currencies?api_key=233d45481e-c588f7f6a8-sr60yq`).then((res) => {
            console.log(res);
            
            if (res.data?.currencies) {
                console.log(res.data?.currencies);

                let currencyArray = [];

                for (const obj of Object.entries(res.data?.currencies)) {
                    // console.log(`${obj}`);
                    currencyArray.push(obj)
                  }

                console.log("Array ", currencyArray);                
                
                setCurrencies(c => currencyArray)

                console.log("Moedas ",  currencies);
                
            }            
        })
    }

    const handleFromChange = (event) => {
        setFrom(event.target.value)
    }

    const handleToChange = (event) => {
        setTo(event.target.value)
    }

  return (
    <div>
      <div className="convert-card">

        <div>
            <input type="text" className='input' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter the amount...' />
        </div>

        <div className="currencies">
            <div style={{marginRight: '10px'}}>
                From <select style={{width: '100%'}} name="from" id="from" onChange={handleFromChange} value={from}>
                    {currencies.map((currency, index) => <option value={ currency[0] }> { currency[1] } </option> )}
                </select>
            </div>
            <div>
                To <select style={{width: '100%'}} name="to" id="to" onChange={handleToChange} value={to}>
                    {currencies.map((currency, index) => <option value={ currency[0] }> { currency[1] } </option> )}
                </select>
            </div>
        </div>

        <div>
            <button className='btn' onClick={convert}>Convert</button>
        </div>

        <div className="result">
            Result: { result }
        </div>

      </div>
    </div>
  )
}

export default Home
