import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import loading from '../loading.svg';


function TV() {

    const [tvList, setTVList] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    async function getData(pageNumber) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=5c68123d9a6d8c5aea215b16da07129b&page=${pageNumber}`);
            setTVList(response.data.results)
            // console.log(response)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData(pageNumber);
    }, [pageNumber])



    return (
        <div>
            <div className="flex flex-wrap justify-center bg-slate-800 pt-4">
                {tvList ? tvList.map((tv) => (
                    <Card
                        key={tv.id}
                        field={'tv'}
                        id={tv.id}
                        img={tv.poster_path}
                        backdrop_img={tv.backdrop_path}
                        title={tv.original_title}
                        overview={tv.overview}
                        date={tv.release_date}
                    />
                )) :
                    <div className='flex justify-center items-center w-full  h-screen'>
                        <img className='' src={loading} alt="img not found" />
                    </div>}

            </div>
            <div className="pagination flex justify-evenly items-center bg-slate-800 h-20">
                <FontAwesomeIcon className='p-3 bg-white rounded cursor-pointer' icon={faAngleLeft} onClick={() => { pageNumber > 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1) }} />
                <h1 className='text-2xl text-white'>{pageNumber}</h1>
                <FontAwesomeIcon className='p-3 bg-white rounded cursor-pointer' icon={faAngleRight} onClick={() => setPageNumber(pageNumber + 1)} />
            </div>
        </div>

    )
}


export default TV;