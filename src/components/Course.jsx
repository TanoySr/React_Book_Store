import React, { useState } from 'react';
import list from '../../public/list.json';
import Card from './Card';
import {Link} from 'react-router-dom';

function Course() {
    const bookCategories = [...new Set(list.map(item => item.category))];
    const [filteredData, setFilteredData] = useState(list);

    const handleFilter = (category) => {
        const filteredData = list.filter(item => item.category === category);
        setFilteredData(filteredData);
    };
    
    const allCategory = (allData)=> setFilteredData(allData)

    return (
        <>
            <div className='mt-5 mb-5 px-4 md:py-15 md:max-w-screen-2xl container mx-auto md:flex-row'>
                
                    <h1 className='text-2xl text-center md:text-4xl font-bold underline underline-offset-8'>!... Our Paid Books Are Here ...!</h1><br />
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                
                <br />
                <div className='flex flex-row justify-center'>
                    <Link to='/'>
                    <button className='bnt px-5 py-2 rounded-md bg-secondary text-white cursor-pointer'>Back</button>
                    </Link>
                </div>
            </div>

            <div className='md:max-w-screen-2xl container mx-auto '>
                <div className='flex flex-wrap md:flex-row justify-center mb-2 '>
                    {bookCategories.map(category => (
                        <div className='mx-1 mb-1' key={category}>
                            <button onClick={() => handleFilter(category)} className=' dark:outline-white  dark:text-white  btn btn-sm btn-outline md:btn md:btn-outline md:px-3'>{category}</button>
                        </div>
                    ))}
                    <div>
                        <button onClick={()=>allCategory(list)} className=' dark:outline-white  dark:text-white  btn btn-sm btn-outline md:btn md:btn-outline md:px-3'>
                        All
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {filteredData.map((item) =>
                        (<Card item={item} key={item.id} />)
                    )}
                </div>
            </div>
        </>
    )
}

export default Course;
