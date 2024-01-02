import { ImageComponent } from "../../components/ImageComponent";

import bank from "../../assets/imgs/original/bank.jpg";
import bankSmall from "../../assets/imgs/small/bank-small.jpg";

import css from "../Map/Map.module.css";

export default function Info() {
  return (
    <div>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Information :</h1>
            <p className="lead text-muted">
              Vous retrouverez sur cette page toutes les information concernant
              la cité.
            </p>
          </div>
        </section>
        <div className="album py-3 ml-5">
          <h3>Commandes : </h3>
          <p className="lead text-muted">
            <strong>/coin list</strong>
            <br />
            Donne le compte en banque de toutes les équipes.
          </p>{" "}
          <p className="lead text-muted">
            <strong>/coin [team]</strong>
            <br />
            Donne le compte en banque de l’équipe spécifié.
          </p>{" "}
          <p className="lead text-muted">
            <strong>/quest</strong>
            <br />
            Ouvre l'UI des quêtes pour voir les quêtes en cours et terminées.
          </p>{" "}
          <p className="lead text-muted">
            <strong>/debug</strong>
            <br />
            Vous donne un effet de jump boost si vous êtes stuck dans une zone
            protégé.
          </p>
        </div>
        <div className="album py-3 ml-5">
          <h3>Banquier et Marchands </h3>
          <p className="lead text-muted">
            Vous retrouverez dans toutes les cités, les pnjs banquier et
            marchand côte à côte.
          </p>
          <p className="lead text-muted">
            Le pnj marchand quant à lui propose plusieurs échanges pour obtenir
            des rubis et objets importants.
          </p>
          <div style={{ maxWidth: "30%" }}>
            <div className="card mb-4 shadow-sm">
              <ImageComponent
                image={bank}
                backgroundImage={bankSmall}
                ratio={5 / 3}
              />
              <div className="card-body">
                <p className="lead text-muted">
                  Exemple de banquier et marchand à Laputa.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className={`${css.position} text-muted`}>Laputa</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="album py-3 ml-5">
          <h3>Nether : </h3>
          <p className="lead text-muted">
            Vous pouvez créer des portails et vous serez tp dans le nether, le
            nether est le même pour les deux serveurs donc il n’y aura pas de
            délimitation comme l’overworld.
          </p>
          <p className="lead text-muted">
            Il est impossible de faire transiter des entités au travers des
            portails.
          </p>
          <p className="lead text-muted">
            Si vous créez un portail en étant dans le serveur 1, vous entrerez
            dans le nether.
          </p>
          <p className="lead text-muted">
            Si ensuite vous êtes à des coordonnées se trouvant dans serveur 2,
            le portail de sortie vous emmènera dans serveur 2.
          </p>
        </div>
        <div className="album py-3 ml-5">
          <h3>The End : </h3>
          <p className="lead text-muted">
            L’end est accessible uniquement au travers de quêtes (les perles de
            l’end indiquent pas la position du portail en les lançant). Une fois
            que la quête de l'ender est finie par une équipe, toutes les équipes
            ont accès au portail.
          </p>
          <p className="lead text-muted">
            L’end est également en partie custom en ce qui concerne la
            génération.
          </p>
        </div>
      </main>
    </div>
  );
}
