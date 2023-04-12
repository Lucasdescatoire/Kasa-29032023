import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import HomesComponents from "../Components/Homes_Components/HomesComponents";
import "../Styles/Home.scss"
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollTop";
/*import {useLocation} from "react-router-dom";*/



function Home() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/Datas/HomeList.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setLocations(data)
            })
    }, [])
   /*// eslint-disable-next-line react-hooks/exhaustive-deps
    const titles = {
        '/home': 'Home',
        '/about': 'About',
    }
    const location = useLocation()
    useEffect(
        () => (document.title = titles[location.pathname] ?? 'Hello World'),
        [location, titles],
    )*/

    useEffect(() => {
        document.title = `KASA / Home`
    })

    return (
        <div>
            {/*<button className="scrollToTopBtn">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </button>*/}
            <div className="BigContent">
                <Banner />
                <h1 className="BannerTitle" >Chez vous, <br className="Show"/> partout et ailleurs</h1>
                <div className="MainDivImg">
                    {/*ajout de l'image en scss pour pouvoir la centrer comme sur la maquette*/}
                    <div className="ClimbOne"></div>
                </div>
                {/*instancier le rendu visuel des locations en utilisant la methode map qui permet de boucler sur
            les toutes les locations présente dans le fichier json et je les affiche en important mon composant
            HomesComponents qui boucle sur les pictures présent dans le fichier json*/}
                <div className="BigBossMain">
                    <div className="MainDivHomes">
                        <div className="MainDivHomes_Infos">
                            {
                                locations.map((location) => <HomesComponents key = {location.id} location = {location} />
                                )}
                        </div>
                    </div>
                </div>

            </div>
            <ScrollToTop />
            <Footer />
        </div>
    )
}
export default Home
