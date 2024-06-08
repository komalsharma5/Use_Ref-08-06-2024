import 'bootstrap/dist/css/bootstrap.css';
// import React, { useRef, useState } from 'react'
// simaba example

// const App = () => {
// const fname = useRef()

// const [data, setData] = useState()
// const input_handler = () => {
//   setData(fname.current.value)
// }
//   return (
//     <>
//       <h1>Form</h1>
//       <input type='text' ref={fname} onChange={input_handler} value={data}></input>
//       <h2>{data}</h2>
//     </>
//   )
// }

// export default App


// Form na input par useRef() hooks

import React, { useRef, useState } from 'react'

export default function App() {
  // // firstName useref() code
  // const fname = useRef()
  // const [fnameData, setFnameData] = useState('fname')

  // // lastName useref() code
  // const lname = useRef()
  // const [lnameData , setLnameData] = useState('lname')
 
  // // city useref() code
  // const city = useRef()
  // const [cityName, setCityName] = useState('city')

  // const input_handler = () => {   
  //   setFnameData(fname.current.value)
  //   setLnameData(lname.current.value)
  //   setCityName(city.current.value)
  // }


// 2-type multistate ne single state banvi form ma use karvu
const fname = useRef()
const lname = useRef()
const city = useRef()

const [inputData , setInputData] = useState({
  fname : 'enter your fname',
  lname : 'enter youe lname',
  city : 'enter city name'

})
 
const input_handler = (e) => {
  const input_ = {   
    fname: fname.current.value,
    lname : lname.current.value,
    city  :  city.current.value
  }
    // console.log(input_)
    setInputData(input_)
}
 
  return (
    <>
    <section className='container'>
    <h1 className='text-center mt-5'>Form</h1>
       <form className=' mx-auto d-block w-50 border border-2 p-3'>

              <div className="form-group my-4">
                    <label className='form-label'>First Name: </label>
                    <input type="text" className="form-control" ref={fname} onChange={input_handler}></input>
              </div>
            
              <div className="form-group my-4">
                <label className='form-label'>Last Name: </label>
                <input type="text" className="form-control" ref={lname} onChange={input_handler}></input>
                
              </div>
    
              <div className="form-group my-4">
              <label className='form-label'>City: </label>
                <input type="text" className="form-control" ref={city} onChange={input_handler}></input>
              </div>
              
              <button type='submit' className='btn btn-primary w-100'>Submit</button>

              <h2 className='my-3'>{inputData.fname}</h2>
              <h2 className='my-3'>{inputData.lname}</h2>
              <h2 className='my-3'>{inputData.city}</h2>
    </form>
    </section>
    </>
  )
}
