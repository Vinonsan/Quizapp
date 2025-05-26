import React from 'react'
import { useNavigate } from 'react-router-dom';

function SelectCatagory() {

    const navigate = useNavigate();

    const handleCategoryClick = (id) =>{
      navigate(`/questions/${id}`);
     
    };

    const categories = [
    { id: 1, description: 'JavaScript Basics' },
    { id: 2, description: 'Object-Oriented Programming' },
    { id: 3, description: 'Data Structures and Algorithms' },
    { id: 4, description: 'Web Development Technologies' }

  ];

  return (
    <>

    <div className='bg-zinc-200 w-full h-screen p-6 flex items-center justify-center'>
        <div className='bg-cyan-800 w-full  md:w-3/6 lg:w-2/6 rounded-xl flex p-2  flex-col items-center justify-start border-2 border-cyan-900 shadow-4xl shadow-inner shadow-cyan-100'>
            <div className='bg-cyan-900 w-full p-8  rounded-xl shadow-4xl shadow-inner shadow-cyan-900 mb-2 flex items-center justify-start border-2 border-cyan-900 '>
                <h1 className='text-3xl font-bold uppercase text-slate-50 text-center'>Choose topic for quiz</h1>
            </div>

            {categories.map((catagory) => (
              <div key={catagory.id} className='bg-cyan-900 w-full p-4 m-4 rounded-md shadow-4xl shadow-inner shadow-cyan-500 cursor-pointer hover:shadow-cyan-950 hover:translate-y-1 active:scale-95 ease-in-out duration-300'
              onClick={()=> handleCategoryClick(catagory.id)}
              >
                <p className='text-xl text-zinc-100 font-bold'>{catagory.description}</p>
              </div>
            ))}
            
           
           
        </div>
    </div>
    
    </>
  )
}

export default SelectCatagory