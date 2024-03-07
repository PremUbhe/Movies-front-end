import React, { useEffect, useState } from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function List({ field, link, title }) {

    const [left, setLeft] = useState(0)
    // const t = title
    const list = link


    useEffect(() => {
        document.getElementById(`${title}-Shows`).style.left = `${left}px`
    }, [left])

    return (
        <div className='bg-slate-800 pt-3'>
            <h1 className='text-4xl text-white px-10'>{`${title} ${field}`}</h1>
            <div className='flex justify-between items-center' style={{ height: '600px' }}>
                <FontAwesomeIcon className=' absolute p-3 m-3 z-10 bg-white rounded cursor-pointer' icon={faAngleLeft} onClick={() => { left > 0 ? setLeft(left) : setLeft(left + 300) }} />
                <div className="relative" id={`${title}-Shows`}>
                    <div className="flex overflow-hidden bg-slate-800" >
                        {list && list.map((item) => (
                            <Card
                                key={item.id}
                                field={field}
                                id={item.id}
                                img={item.poster_path}
                                backdrop_img={item.backdrop_path}
                                title={item.original_title}
                                overview={item.overview}
                                date={item.release_date}
                            />
                        ))}
                    </div>
                </div>
                <FontAwesomeIcon className='absolute right-0 p-3 m-3 z-10 bg-white rounded cursor-pointer' icon={faAngleRight} onClick={() => { left < -6300 ? setLeft(left) : setLeft(left - 300) }} />
            </div>
        </div>
    )
}
