
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//fct d etat hook predefini /React
import { useState } from 'react'
import './App.css'
//nettoyage pr page blanche
//App.jsx est la structure de base d 1 composasant. Ajout de la logique JS
//de 7 a 8 logique JS
//ds returne qq chose resemblant à du HTML: du JSX. JS XML
function App1() {

    //ajout logique JS

    //pas 1 bonne pratique en React=>states.  var a 2 composant: elle meme et son Setter (1 composant=
    /*let prenom = "David"
    let nom = "Wils"*/
    //bonne pratique (#Java):
    const [prenom, setPrenom] = useState("David")
    const [nom, setNom] = useState("Wils")

    const [age, setAge] = useState(25)

    function changePrenomNom() {
        setPrenom("Mathieu")
        setNom("Duvrais")
    }

    function changeAge(){
        setAge(age+1)
    }

//<!--ajout evt directement/boutton. Pas d'ecouteur ici-->
    return (
        <>
            <h1>Bonjour {prenom} {nom}</h1>
            <h1>
                <button onClick={changePrenomNom}>Change le prenom et le nom</button>
            </h1>
            <h1>J'ai {age} ans</h1>
            <h1>
                <button onClick={changeAge}>Incremente age</button>
            </h1>
        </>
    )
}

export default App1
