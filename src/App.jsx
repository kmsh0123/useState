import React, { useState } from 'react'
import { AiOutlineGoogle, AiOutlineUser } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsFacebook, BsKeyFill } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'

const App = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [show,setShow] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
    
  }

  const LoginHandler = () =>{
    setShow(true)
    
  }
 
  return (
    <div className="flex justify-center items-center min-h-screen">
    <form onSubmit={handleSubmit} className="shadow shadow-violet-300 p-5 rounded-2xl relative m-1 sm:m-2 lg:m-0 w-96">
    <BiUserCircle className='text-6xl mx-auto'/>
        <div className="">
        <AiOutlineUser className='w-5 h-5 absolute top-[133px] right-[30px]'/>
        <label htmlFor="email" className='text-xl font-semibold ml-1'>Email Address</label>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        id='email' className='outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500' type="text" placeholder='Please Enter you are email' />
        <BsKeyFill className='w-5 h-5 absolute top-[248px] right-[30px]'/>
        <label htmlFor="password" className='text-xl font-semibold ml-1 mt-9'>Password</label>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        id="password" className='outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500' type="password" placeholder='Please Enter you are password' />
        <button onClick={LoginHandler} className={`bg-violet-700 rounded-3xl p-5 w-full text-white hover:bg-violet-900 transition duration-300 my-2 ${isLoading && "btn-disabled"}`}>{
          isLoading ? <ImSpinner2 className='animate-spin mx-auto w-5 h-5'/> : "Show me"
        }</button>
        </div>
        <div className="flex justify-between items-center my-2">
            {/* <p className='text-[14px]'>Don't have an account?<Link to="/register" className='text-violet-400 ml-1 hover:underline'>Sign Up</Link></p>
            <Link to="#" className='text-violet-500 text-[14px] hover:underline'>Forgot Password</Link> */}
        </div>
        <div className="block gap-2 mt-5 space-y-5">
        <h1 className='border border-violet-500 hover:bg-violet-500 hover:text-white transition duration-300 p-2 px-4 flex items-center justify-center w-full rounded-xl'>{show ? email : "Hi"}</h1>
        <h1  className='border border-violet-500 hover:bg-violet-500 hover:text-white transition duration-300 p-2 px-4 flex items-center justify-center w-full rounded-xl'>{show ? password : "Show Me Password"}</h1>
        </div>
    </form>
</div> 
  )
}

export default App