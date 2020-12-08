import React from 'react'
import './pagination.css'

function Pagiantion({postsPerPage,totalPosts,paginate}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <div className="container-pagination">
            <span className="show-data">Showing 10 from {totalPosts} data</span>
            <div style={{display:"flex"}}>
                <button className="btn-previous"><span className="previous">{`<< Previous`}</span></button>
                <div className="container-all-page">
                {pageNumbers.map((number)=>(
                    <div className={`${number?"change-container-nbre-page container_nbre-page":"container_nbre-page"}`}  key={number} >
                        <a className="nbre-of-page" onClick={()=>paginate(number)} href='!#'>
                            {number}
                        </a>
                    </div>
                ))}
                </div>
                <button className="btn-previous"><span className="previous">Next {`>>`}</span></button>
            </div>
        </div>
    )
}

export default Pagiantion
