//ecrire /defaut 1 composant ou utiliser 1 snippet grace au plugin
// React ArrowFunction Component Export pour creer 1 composant React en Arrow fonction. La + propre
import React from 'react'
//dit etre ds 1 balise unique ds le return en racine
//<div> remplacable /<> fragment phantome  rend une dir id='root' ds l 'inspecteru
import Profile  from "./components/Profile.jsx";
import Languages  from "./components/Languages.jsx";
import Tools  from "./components/Tools.jsx";
import "./App.css"
const App = () => {
    return (
        <>
            {/*<h1>Bonjour</h1>
            <h2>Au revoir</h2>*/}
            <Profile/>
            <hr/>
            <Languages/>
            <hr/>
            <Tools/>
        </>
    )
}
//necessaire pr main.jsx. Car pr imùporter il faut d'abord exporter
export default App
