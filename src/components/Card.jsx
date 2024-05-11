import React from 'react'

function Card( {item} ) {
    const descriptionStrings = item.description;
    function truncateString(descriptionStrings, maxLength = 70) {
      return descriptionStrings.length > maxLength ? descriptionStrings.substring(0, maxLength - 3) + "..." : descriptionStrings;
    }
    const shortString = truncateString(descriptionStrings);
    
  return (
    <>
      <div className='px-5 my-2 md:px-20  '>
      <div className="card w-96  shadow-xl hover:scale-105 duration-200 text-black dark:border dark:text-white   ">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.title} 
            <div className="badge badge-secondary">{item.category} </div>
            </h2>
            <p>{shortString}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline my-2">{item.price} /-</div> 
            <div className="px-2 py-1 border rounded-md hover:bg-secondary duration-200 hover:text-white">Buy Now</div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Card
