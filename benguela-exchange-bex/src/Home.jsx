import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {
  const [currencies, setCurrencies] = useState([])
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('AOA')
  const [result, setResult] = useState('')
  const [converting, setConverting] = useState(false)

  useEffect(() => {
    convert()
    getCurrencies()
  }, [])

  const convert = () => {

    if (!amount) {
        setAmount(1)
    }

    setConverting(c => true)
    axios
      .get(
        `https://api.fastforex.io/fetch-one?api_key=233d45481e-c588f7f6a8-sr60yq&from=${from}&to=${to}`
      )
      .then(res => {
        if (res.data?.result) {
          setResult(res.data?.result[to] * amount)
        }

        setConverting(c => false)
      }).catch((err) => {
        console.log(err);
        setConverting(c => false)
      })
  }

  const getCurrencies = () => {
    axios
      .get(
        `https://api.fastforex.io/currencies?api_key=233d45481e-c588f7f6a8-sr60yq`
      )
      .then(res => {
        console.log(res)

        if (res.data?.currencies) {
          console.log(res.data?.currencies)

          let currencyArray = []

          for (const obj of Object.entries(res.data?.currencies)) {
            // console.log(`${obj}`);
            currencyArray.push(obj)
          }

          setCurrencies(c => currencyArray)
        }
      })
  }

  const handleFromChange = event => {
    setFrom(event.target.value)
  }

  const handleToChange = event => {
    setTo(event.target.value)
  }

  return (
    <div style={{padding: '0px 30px'}}>
        
      <div className='convert-card'>

      <div>
            <h2>Convert now!</h2>
        </div>

        <div>
          <input
            type='number'
            className='input'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder='Enter the amount...'
          />
        </div>

        <div className='currencies'>
          <div style={{ marginRight: '10px' }}>
            From{' '}
            <select
              style={{ width: '100%' }}
              name='from'
              id='from'
              onChange={handleFromChange}
              value={from}
            >
              {currencies.map((currency, index) => (
                <option value={currency[0]}> {currency[1]} </option>
              ))}
            </select>
          </div>
          <div>
            To{' '}
            <select
              style={{ width: '100%' }}
              name='to'
              id='to'
              onChange={handleToChange}
              value={to}
            >
              {currencies.map((currency, index) => (
                <option value={currency[0]}> {currency[1]} </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{textAlign: 'center', padding: '10px 0'}}>
            { converting && 'Converting. Wait a few moment...' }
        </div>

        { !converting && <div>
          <button className='btn' onClick={convert}>
            Convert
          </button>
        </div> }

        { result && <div className='result'>Result: {result}</div> }
      </div>
      
    </div>
  )
}

export default Home
