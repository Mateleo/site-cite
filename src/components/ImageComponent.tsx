import { useState } from "react";
import "./imageComponent.css";
import { AspectRatio } from "@radix-ui/themes";

type LazyImageProps = {
  image: string;
  backgroundImage: string;
  ratio: number;
};

export function ImageComponent({
  image,
  backgroundImage,
  ratio,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AspectRatio ratio={ratio}>
      <div
        className={`blur-load ${!isLoaded ? "" : "loaded"}`}
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* {!isLoaded ? (
          <img
            src={backgroundImage}
            alt="Map de la cité"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <></>
        )} */}

        <img
          src={image}
          alt="Map de la cité"
          loading="lazy"
          style={{
            height: "100%",
            width: "100%",
          }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </AspectRatio>
  );
}
