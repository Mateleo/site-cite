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
import loneCastle from "../../assets/imgs/original/loneCasltle.jpg";
import loneCastleSmall from "../../assets/imgs/small/loneCasltle-small.jpg";
import laputa from "../../assets/imgs/original/laputa.jpg";
import laputaSmall from "../../assets/imgs/small/laputa-small.jpg";
import css from "./Map.module.css";

import { ImageComponent } from "../../components/ImageComponent";

export default function Map() {
  return (
    <>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Carte et villes:</h1>
            <p className="lead text-muted">
              La Map du monde de Pejite est de 8000x8000. <br />
              De nombreuses peuplades y existent, situées aux 4 coins du monde.
              <br /> Et spécialement au sein de 8 cités : Shigenshina, Cyrule,
              Holymon, Abyss, Saharya, Eskival, Hateno, Lone Castle
            </p>
            <div style={{ width: "40%" }} className={`${css.centeredelement}`}>
              <ImageComponent
                image={map}
                backgroundImage={mapSmall}
                ratio={1}
              />
            </div>
            <p className="lead text-muted">
              <p>
                La map contient des téléporteurs qu'il faudra débloquer pour 200
                rubis.
                <br />
                Chaque téléportation coûtera 5 rubis.
              </p>
            </p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={cyrule}
                    backgroundImage={cyruleSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Cyrule</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = 2975 z = 231
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={hateno}
                    backgroundImage={hatenoSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Hateno</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = -500 z = -2268
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={eskival}
                    backgroundImage={eskivalSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Eskival</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = 2733 z = -2945
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={holymon}
                    backgroundImage={holymonSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Holymon</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = 1400 z = 3304
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={loneCastle}
                    backgroundImage={loneCastleSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Lone Castle</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = 824 z = -1547
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={abyss}
                    backgroundImage={abyssSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Abyss</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = -1247 z = 2200
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={shigenshina}
                    backgroundImage={shigenshinaSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Shigenshina</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = -2327 z = -325
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={saharya}
                    backgroundImage={saharyaSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Saharya</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = -2179 z = 975
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ImageComponent
                    image={laputa}
                    backgroundImage={laputaSmall}
                    ratio={5 / 3}
                  />
                  <div className="card-body">
                    <h3 className={`${css.centeredelement}`}>Laputa</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className={`${css.position} text-muted`}>
                        Position: x = ???? z = ????
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
