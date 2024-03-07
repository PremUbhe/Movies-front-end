import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from '../components/List';
// import loading from '../loading.svg';


const Home = () => {

    const [moviesList, setMoviesList] = useState('')
    const [trandingMovies, setTrandingMovies] = useState('')
    const [tvList, setTVList] = useState('')
    const [trandingTV, setTrandingTV] = useState('')



    async function getData() {
        try {
            const movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5c68123d9a6d8c5aea215b16da07129b`);
            setMoviesList(movies.data.results)

            const trenMovies = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=5c68123d9a6d8c5aea215b16da07129b`)
            setTrandingMovies(trenMovies.data.results)

            const tv = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=5c68123d9a6d8c5aea215b16da07129b`);
            setTVList(tv.data.results)

            const trenTV = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=5c68123d9a6d8c5aea215b16da07129b`)
            setTrandingTV(trenTV.data.results)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className=''>
            <List link={moviesList} title={'Latest'} field={'movie'} />
            <List link={trandingMovies} title={'Tranding'} field={'movie'} />
            <List link={tvList} title={"Latest"} field={'tv'} />
            <List link={trandingTV} title={"Tranding"} field={'tv'} />
        </div>

    )
}


export default Home;