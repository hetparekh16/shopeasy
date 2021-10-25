import React from 'react'
import homeGridData from '../../data/homeGridData'
import './Home.css'
const HomeGrid = () => {
    return (
        <div className="d-flex mx-2 homeGridScroll">
            {
                // for(let i=0 : i<data.length : i++){
                homeGridData.map(data => (
                    <div className="text-center m-2 handPointer" key={data.url}>
                        <img src={data.url} style={{ background: "rgb(224 255 224)", borderRadius: "50%" }} alt="..." />
                        <p>{data.text}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default HomeGrid
