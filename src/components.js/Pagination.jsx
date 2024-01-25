import React from 'react'

const Pagination = (props) => {
 
  let numberOfPages = [];
  for(let i=1;i<= Math.ceil(props.filteredDishes.length/props.itemsPerpage);i++){
    numberOfPages.push(i);
  }
  function showNextDishesHandler(event){
   let currentPage = event.target.id
   props.setCurrentpage(currentPage)

  }

  let pages = numberOfPages.map((pageNumber) => {
    return(
      <li id={pageNumber} onClick={showNextDishesHandler}>
        {pageNumber}
      </li>
    )
  })

  return (
    <section>
    <ul className='pagination flex'>
      {pages}
    </ul>
    </section>
  )
}

export default Pagination
