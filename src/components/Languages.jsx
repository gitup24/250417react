import React, {useState} from 'react'
//useState pas utile sans images
import Python from '../assets/images/python.png'
import JS from '../assets/images/logo-js.png'
import CSS from '../assets/images/logo-css.png'
import HTML from '../assets/images/logo-html5.png'
const Languages = () => {
    const [myLanguages, setMyLanguages] = useState({
        language1:"HTML",
        language2:"CSS",
        language3:"JS",
        language4:"PYTHON"
    })

    const {language1, language2, language3, language4} = myLanguages

    return (
        <div id="Languages">
            <img src={HTML} alt="HTML"/>{language1} <img src={CSS} alt="CSS"/>{language2} <img src={JS} alt="Python"/>{language3} <img src={Python} alt="Python"/>{language4}
        </div>
    )
}
export default Languages
