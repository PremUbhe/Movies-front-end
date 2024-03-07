import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import loading from '../loading.svg';

export default function Details() {

    const { field, id } = useParams();
    const [data, setData] = useState();
    const [video, setVideo] = useState();


    async function fetchData() {
        const api = await axios.get(`https://api.themoviedb.org/3/${field}/${id}?api_key=5c68123d9a6d8c5aea215b16da07129b`);
        console.log(api.data)
        setData(api.data)

        const videos = await axios.get(`https://api.themoviedb.org/3/${field}/${id}/videos?api_key=5c68123d9a6d8c5aea215b16da07129b`)
        // console.log(videos.data.results[videos.data.results.length - 1])
        setVideo(videos.data.results[videos.data.results.length - 1])
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className='relative'>
            {data ? // data is loded
                <div>
                    <img className='w-full fixed top-0' src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="img not found" style={{ zIndex: '-1' }} />
                    <div className="flex justify-around backdrop-blur-sm bg-white/30 m-10 mx-auto p-4 w-9/12 rounded">
                        <div className="w-80">
                            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="img not found" />
                        </div>
                        <div className="max-w-md">
                            <h1 className='text-6xl pb-5'>{data.original_title}</h1>
                            <p className='pb-3'>{data.overview}</p>
                            <div className="flex justify-around">
                                {data.genres && data.genres.map((item, key) => (
                                    <p key={key}><span>|</span> {item.name} <span>|</span></p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around backdrop-blur-sm bg-white/30 m-10 mx-auto p-4 w-9/12 rounded' >
                        {video ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}?si=6IMY66QJtSQZZ43O`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            : <img className='' src={loading} alt="img not found" />}
                    </div>
                </div>
                : // data is loading
                <div className='flex justify-center items-center w-full  h-screen'>
                    <img className='' src={loading} alt="img not found" />
                </div>
            }

        </div>
    )
}
