import map from "../../assets/imgs/original/map.jpg";
import mapSmall from "../../assets/imgs/small/map-small.jpg";

import saharya from "../../assets/imgs/original/saharya.jpg";
import saharyaSmall from "../../assets/imgs/small/saharya-small.jpg";
import hateno from "../../assets/imgs/original/hateno.jpg";
import hatenoSmall from "../../assets/imgs/small/hateno-small.jpg";
import cyrule from "../../assets/imgs/original/cyrule.jpg";
import cyruleSmall from "../../assets/imgs/small/cyrule-small.jpg";
import eskival from "../../assets/imgs/original/eskival.jpg";
import eskivalSmall from "../../assets/imgs/small/eskival-small.jpg";
import holymon from "../../assets/imgs/original/holymon.jpg";
import holymonSmall from "../../assets/imgs/small/holymon-small.jpg";
import shigenshina from "../../assets/imgs/original/shigenshino.jpg";
import shigenshinaSmall from "../../assets/imgs/small/shigenshino-small.jpg";
import abyss from "../../assets/imgs/original/abyss.jpg";
import abyssSmall from "../../assets/imgs/small/abyss-small.jpg";
import loneCasltle from "../../assets/imgs/original/loneCasltle.jpg";
import loneCasltleSmall from "../../assets/imgs/small/loneCasltle-small.jpg";

import { ImageComponent } from "../../components/ImageComponent";

export default function Map() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#A4D3FF",
        }}
      >
        <div>
          <h3>Map et villes :</h3>
          <p>
            La Map du monde de Pejite est de 8000x8000. <br />
            De nombreuses peuplades y existent, situées aux 4 coins du monde.
            <br /> Et spécialement au sein de 8 cités :
          </p>
          <p>
            Shigenshina, Cyrule, Holymon, Abyss,
            <br /> Saharya, Eskival, Hateno, Lone Castle
          </p>
        </div>

        <div style={{ width: "30%" }}>
          <ImageComponent
            image={map}
            backgroundImage={mapSmall}
            ratio={1 / 1}
          />
        </div>
        <div>
          <h3>Teleportation Points</h3>
          <p>
            Nécessite 200 rubis pour débloquer.
            <br /> Chaqué téléportation coute 5 rubis.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={saharya}
            backgroundImage={saharyaSmall}
            ratio={5 / 3}
          />
          <h5>Saharya</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> -2179 975
          </p>
        </div>
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={cyrule}
            backgroundImage={cyruleSmall}
            ratio={5 / 3}
          />
          <h5>Cyrule</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> 2975 231
          </p>
        </div>
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={holymon}
            backgroundImage={holymonSmall}
            ratio={5 / 3}
          />
          <h5>Holymon</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> 1400 3304
          </p>
        </div>
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={loneCasltle}
            backgroundImage={loneCasltleSmall}
            ratio={5 / 3}
          />
          <h5>Lone Castle</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> 824 -1547
          </p>
        </div>
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={eskival}
            backgroundImage={eskivalSmall}
            ratio={5 / 3}
          />
          <h5>Eskival</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> 2733 -2945
          </p>
        </div>
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={abyss}
            backgroundImage={abyssSmall}
            ratio={5 / 3}
          />
          <h5>Abyss</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> -1247 2200
          </p>
        </div>
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={shigenshina}
            backgroundImage={shigenshinaSmall}
            ratio={5 / 3}
          />
          <h5>Shigenshina</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> -2327 -325
          </p>
        </div>
        <div style={{ minWidth: "25%" }}>
          <ImageComponent
            image={hateno}
            backgroundImage={hatenoSmall}
            ratio={5 / 3}
          />
          <h5>Hateno</h5>
          {/* <p>Une ville religieuse croyant au Dieu du Soleil</p> */}
          <p>
            <strong>Position : </strong> -500 -2268
          </p>
        </div>
      </div>
    </div>
  );
}
