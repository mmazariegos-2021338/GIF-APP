import { useState , useEffect} from "react"
import { getGifs } from "../helpers/getGifs"
//los hooks son funciones que retornan algo
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
      getImages();
    }, [])
    
    return {
        images
    }
}
