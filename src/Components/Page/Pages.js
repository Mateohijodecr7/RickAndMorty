import React from 'react'
import './pagination.css'

const Pagination = (props) => {
  const { currentPage, maxPageLimit, minPageLimit } = props
  const totalPages = props.response.totalPages - 1
  const data = props.response.data

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  const handlePrevClick = () => {
    props.onPrevClick()
  }

  const handleNextClick = () => {
    props.onNextClick()
  }

  const handlePageClick = (e) => {
    props.onPageChange()
  }

  const pageNumbers = pages.map(page => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li key={page} id={page} onClick={handlePageClick}
            className={currentPage === page ? 'active' : null}>
            {page}
        </li>
      )
    } else {
      return null
    }
  }

  )

  return (
        <div className="main">
            <div className="mainData">
              {renderData(data)}

            </div>
            <ul className="pageNumbers">
               <li>
                   <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</button>
               </li>
               {pageDecremenEllipses}
                {pageNumbers}
               {pageIncrementEllipses}
                <li>
                   <button onClick={handleNextClick} disabled={currentPage === pages[pages.length - 1]}>Next</button>
               </li>
            </ul>
        </div>
  )
}

export default Pagination
