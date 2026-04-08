import React from "react";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div className="our-stry">
      <h2>Povestea noastră</h2>
      <div className="our-stry-container">
        <div className="our-stry-content">
          <p>
            Velaro a luat naștere din dorința de a readuce oamenii mai aproape
            de mișcare și natură. Credem că bicicleta este mai mult decât un
            produs – este o sursă de energie, echilibru și libertate. Într-o
            lume în care ritmul devine tot mai alert, noi promovăm un stil de
            viață activ, sănătos și autentic, în care fiecare pedalare înseamnă
            timp pentru tine, aer curat și momente reale trăite în afara
            ecranelor.
          </p>
          <img
            loading="lazy"
            src="https://bike-images.andrew-code.com/Bike%20Image/photo1.jpg"
            alt="Our Story"
          />
        </div>
        <p>
          Din această viziune s-a construit selecția noastră atent aleasă de
          biciclete, potrivite pentru toate vârstele și nivelurile de
          experiență. De la primele aventuri pe două roți până la performanță și
          explorare pe trasee dificile, ne dorim ca fiecare client să găsească
          modelul care i se potrivește perfect. Velaro nu este doar un magazin
          online, ci un partener de drum pentru oricine alege să pedaleze spre
          un stil de viață mai activ și mai liber
        </p>
      </div>
      <hr />
    </div>
  );
};

export default OurStory;
