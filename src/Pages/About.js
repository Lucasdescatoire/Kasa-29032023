import React from "react";
import Banner from "../Components/Banner";
import "../Styles/About.scss"



function About() {
    return (
        <div>
            <Banner />
            <div className="SecndMainDivImg">
                <div className="ClimbTwo"></div>
            </div>
            <h2>About</h2>
            <h1>
                Page a propos
                {/*test du lorem réussi*/}
                Platea primis gravida tamquam mentitum hendrerit.
                Interdum aliquid tantas agam efficiantur. Dictum vocent regione eloquentiam molestie ei eloquentiam
                electram feugait reformidans.
            </h1>
        </div>
    )
}

export default About
