import { useState } from "react"
import "./imageComponent.css"

type LazyImageProps = {
    image: string,
    backgroundImage: string
}

export function ImageComponent({ image, backgroundImage }: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={`blur-load ${!isLoaded ? "" : "loaded"}`} style={{ backgroundImage:`url(${backgroundImage})` }}>
            <img src={image} loading="lazy" onLoad={() => setIsLoaded(true)}/>
        </div>
    )
}