import React from "react";
import { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import HomesComponents from "../Components/Homes_Components/HomesComponents";
import "../Styles/Home.scss"
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollTop";

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



    useEffect(() => {
        document.title = `KASA / Home`
    })

    return (
        <div>
            <div className="BigContent">
                <Banner />
                <h1 className="BannerTitle" >Chez vous, <br className="Show"/> partout et ailleurs</h1>
                <div className="MainDivImg">
                    {/*ajout de l'image en scss pour pouvoir la centrer comme sur la maquette*/}
                    <div className="ClimbOne"></div>
                </div>
               
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
