import React from 'react'
 import { filtersearch, storage_icon, acheive_icon } from '../../../data/assets'
 import UploadFile from '../../../utility/UploadFile'
 import AdminCard from '../../../utility/AdminCard'
import Button from '../../../utility/button'

 const ResourceMng = () => {

   // const [fileType, setfileType] = useState('')

   // const handleChange = (e) => {
   //   setfileType(e.target.value)
   //   console.log(e.target.value)
   // }

   return (

     <section className='relative w-full'>
       <div className='flex justify-between sm:pl-5 pl-1'>
         <div className='flex flex-col sm:flex-row py-1 sm:py-10 justify-start sm:justify-center items-start sm:items-center '>
           <h1 className='md:text-4xl text-2xl mr-2'>Hey, Esther -</h1>
           <p className='md:pt-2 pt-1 text-sm sm:text-xl text-[#3A3A3A66] sm:text-black'>Welcome your resource page.</p>
         </div>

       </div>
       <div className=' lg:mx-4 p-5 md:rounded-md bg-white xl:shadow-md w-full'>
         <div className='w-full'>
           <div className='flex flex-col sm:flex-row justify-start sm:justify-between w-full'>
             <div>
               <h1 className='text-xl font-bold sm:font-normal sm:ml-3 lg:py-4 sm:text-[#3A3A3A] sm:text-4xl'>Resource Management</h1>
             </div>
             <div className='flex items-center gap-3 mt-4 sm:m-4'>
               <input 
                 type="text"
                 placeholder='Search resources'
                 className='placeholder:italic placeholder:text-slate-400 border rounded-md w-[423px] focus:outline-none text-base h-[100%] p-3 mr-2 focus:border-none focus:ring-[0] ' 
                 />
               <img src={filtersearch} alt="filter" className='w-[24px] h-[24px]'/>
             </div>
           </div>

           <div className='mt-10'>
            <p className='text-2xl mb-1'>Statistics</p>
            <p className=' text-[#71717A] mb-8 text-[10px] md: text-base'>See Metrics</p>

             <div className='flex w-[100%] justify-start flex-wrap mt-3 p-3 gap-7 bg-slate-50 rounded-sm'>
               <AdminCard name={'File Uploaded'} Amount={45} fileType={'Files'} icon={storage_icon}/>
               <AdminCard name={'File Downloaded'} Amount={120} fileType={'Downloads'} icon={acheive_icon}/>
             </div>

             </div>


            <div className='mt-16 ml-4 mb-26'>
              <Button name={'Add new file'} />
            </div>
            <div className='mt-16'>
            <div className=' flex justify-between'>
              <div>
                <h2 className=' text-xl font-semibold pt-4'>Recent Jobs</h2>
                <p className=' text-lg text-[#747272] mb-1'>See list of resent jobs posted</p>
              </div>
              <button className='float-right border py-2 px-8 my-[20px] rounded flex justify-between shadow-sm'>See all</button>
            </div>
            <div className='flex overflow-x-auto'>
              <table className=' border-t border-b w-full overflow-x-auto'>
                <thead>
                  <tr>
                  <td><h4 className=' font-semibold text-xl mt-2'>Activity</h4></td>
                  <td><h4 className=' px-10 text-xl font-semibold'>Tech Stack</h4></td>
                  <td><h4 className=' px-10 text-xl font-semibold'>File Name</h4></td>
                  <td><h4 className=' px-10 text-xl font-semibold'>File Type</h4></td>
                  <td className=''><h4 className=' px-10 text-xl font-semibold'>Status</h4></td>
                  <td> <span>...</span></td>
                </tr>
                </thead>
                <tbody>
                  <tr>
                  <td><p className=' text-sm my-4'>Product Design</p></td>
                  <td><p className=' px-10 text-sm'>Meta</p></td>
                  <td><p className=' px-10 text-sm'>On-site</p></td>
                  <td><p className=' px-10 text-sm'>NY, USA</p></td>
                  <td className='w-[20%] '><p className=' w-auto py-2 2text-base text-white bg-red-500 rounded-[30px]w-[80%] pl-2s text-center flex justify-center items-center'> <span className='rounded-full bg-red-700 w-4 h-4 mr-2'> </span>Unsuccessful</p></td>
                  <td></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm my-6'>Front-end Developer</p></td>
                  <td><p className=' px-10 text-sm'>Twitter</p></td>
                  <td><p className=' px-10 text-sm'>Remote</p></td>
                  <td><p className=' px-10 text-sm'>Lagos, NG</p></td>
                  <td className='w-[20%] '><p className=' w-auto py-2 text-base text-white bg-green-500 rounded-[30px]w-[80%] pl-2 text-center flex justify-center items-center'> <span className='rounded-full bg-green-700 w-4 h-4 mr-2'> </span>Successful</p></td>
                  <td><span>...</span></td>
                </tr>
                <tr className=' border-t'>
                  <td><p className=' text-sm my-6'>Product Manager</p></td>
                  <td><p className=' px-10 text-sm'>Whatsapp</p></td>
                  <td><p className=' px-10 text-sm'>Remote</p></td>
                  <td><p className=' px-10 text-sm'>NY, USA</p></td>
                  <td className='w-[20%] '><p className=' text-base text-white bg-green-500 rounded-[30px] w-[80%] pl-2  py-2 text-center flex justify-start items-center'> <span className='rounded-full bg-green-700 w-4 h-4 mr-4'> </span>Successful</p></td>
                  <td><span>...</span></td>
                </tr>
               
                </tbody>
                
              </table>
            </div>
          </div>
         </div>

       </div>
     </section>
   )
 }

 export default ResourceMng;