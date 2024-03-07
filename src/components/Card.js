import React from 'react'
import { useNavigate } from 'react-router-dom';


function Card({ field, id, img, backdrop_img, title, date, overview }) {

    const navigate = useNavigate();

    return (
        <div className='movie-container bg-slate-400 rounded cursor-pointer overflow-y-auto scrollbar-webkit scrollbar-thin p-4 m-1'>
            <button onClick={() => navigate(`/details/${field}/${id}`)}>
                <div className="movie-img">
                    <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="img not found" style={{ width: '338px' }} />
                </div>
                <div className="movie-info text-center ">
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop_img}`} alt="img not found" />
                    <h1 className='text-4xl pb-3'>{title}</h1>
                    <hr />
                    <h6>{date}</h6>
                    <h3 className='text-justify'>{overview}</h3>
                </div>
            </button>
        </div>
    )
}


export default Card;