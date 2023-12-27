import ReactPlayer from "react-player";
import { ImageComponent } from "../../components/ImageComponent";

import banner from "../../assets/imgs/original/BannerCityPave.jpg";
import bannerSmall from "../../assets/imgs/small/BannerCityPave-small.jpg";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ImageComponent
        image={banner}
        backgroundImage={bannerSmall}
        ratio={3 / 1}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red",
          width: "100%",
          color: "white",
        }}
      >
        <p
          style={{
            margin: "0px",
          }}
        >
          Plus d'information prochainement.
        </p>
      </div>
      <div
        style={{
          height: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
          fontSize: "21px",
          // backgroundColor: "#3036db",
        }}
      >
        <div>
          <h2>La cité de la PAVE III</h2>
          <p>
            Après plus de 2 ans d'attente, la troisième édition de la cité de la
            PAVE aura lieu 02/01/2024 au 06/01/2024, en équipe de 1 à 5.
          </p>
          <p>
            Initialement, il s’agissait d’un évènement de type « cité des sables
            » avec en plus des quêtes. Mais cette édition sera tournée
            exclusivement autour d’un système de quêtes mettant au centre de
            l’évènement tous les aspects du jeu. Il y aura au programme du
            farming, du PVP, du PVE, de l’exploration et des énigmes.
          </p>
        </div>
        <div>
          <ReactPlayer
            url="https://youtu.be/-oQC9GtfgSc?si=8jCxXF6vKth6j6bk"
            controls={false}
            width="800px"
            height="450px"
          />
        </div>
      </div>
    </div>
  );
}
