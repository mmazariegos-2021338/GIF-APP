import { getGifs } from "../helpers/getGifs"
import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifGrid = ({category}) => {

    const {images} = useFetchGifs(category)



    getGifs(category);

  return (
    <> 
        <h3> {category} </h3>
        <div className="card-grid">
            {
                images.map((img) =>(

                    <GifGridItem key={img.id}
                    // title={img.title}
                    // url={img.url} 
                    {... img}
                    />
                    // <img src={img.url} alt={img.title} />
                ))
            }
        </div>
    </>
  )
}
