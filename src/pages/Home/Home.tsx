import ReactPlayer from "react-player";
import styles from "./Home.module.css"
export default function Info() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.overlay}></div>
                <ReactPlayer
                    url="https://youtu.be/-oQC9GtfgSc?si=KuZpantz7RgwHNDh&t=11"
                    config={{ youtube: { playerVars: { disablekb: 1 } } }}
                    className={styles.video}
                    width="800px"
                    height="450px"
                    playing   // équivalent à autoplay
                    muted     // équivalent à muted
                    loop      // équivalent à loop
                    playsinline
                />
                <div className={`${styles.container} h-100`}>
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">LA CITÉ DE LA PAVE 3</h1>
                            <p className="lead mb-0">Ouverture du serveur mardi 02 Janvier 2024</p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="my-5">
                <div className={styles.container}>
                    <div className="row justified-text">
                        <div className="col-md-5 mx-auto">
                            <p className="row justified-text"> Après plus de 2 ans d'attente, la troisième édition de la cité de la
                                PAVE aura lieu 02/01/2024 au 06/01/2024, en équipe de 1 à 5.</p>
                            <p className="row justified-text">Initialement, il s’agissait d’un évènement de type « cité des sables
                                » avec en plus des quêtes. Mais cette édition sera tournée
                                exclusivement autour d’un système de quêtes mettant au centre de
                                l’évènement tous les aspects du jeu. Il y aura au programme du
                                farming, du PVP, du PVE, de l’exploration et des énigmes.</p>
                            <p className="row justified-text">Vous trouverez sur ce site toutes les informations nécessaire à propos de l'event.</p>
                            <p className="row mb-0 justified-text">
                                Lien vers le serveur Discord:&nbsp;<a href="https://discord.gg/d5nCVEBuSN">cliquez
                                ici</a>
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
