import skykeep from "../../assets/imgs/skykeep.jpg"
import fountain from "../../assets/imgs/fountain.jpg"
import skykeepSmall from "../../assets/imgs/skykeep-small.jpg"
import fountainSmall from "../../assets/imgs/fountain-small.jpg"


import "./map.css"
import { ImageComponent } from "../../components/ImageComponent"

export default function Map() {

  console.log(typeof skykeep)
  console.log(typeof skykeepSmall)

  return (
    <div>
      <h1>Map Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ImageComponent image={fountain} backgroundImage={fountainSmall} />
        <ImageComponent image={skykeep} backgroundImage={skykeepSmall} />
        <ImageComponent image={fountain} backgroundImage={fountainSmall} />
      </div>
    </div>
  )
}
