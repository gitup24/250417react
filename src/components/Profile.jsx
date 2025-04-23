import {useState} from "react";
//soit 1 pr chq soit 1 objet tableau soit 1 objet en Json dedans
//import des images
import Avatar from '../assets/images/photo-avatar-mini.jpg'

//import"./App.css"//iporter le CSS comme ficher ou tt se reglera
const Profile = () => {
    const [myProfile, setMyProfile] = useState({
        firstname: "David",
        lastname: "Wils",
        job: "Developer",
        city: "Budapest"
    })

    /*function changeProfile() {
        setMyProfile({
            firstname: "John",
            lastname: "Beans",
            job: "React Developer",
            city: "Barcelona"
        })
    }*/
    /*return (
        <div><h3>{myProfile.firstname} {myProfile.lastname} {myProfile.job} {myProfile.city} </h3><h3><button onClick={changeProfile}>Change Profile</button></h3></div>
    )*/
//puis imporer Profile ds App1
    //ou destructuring pr eviter repetiton de myProfile. Decapsule chq cle et met ds 1 var.. à part
    const {firstname, lastname, job, city} = myProfile
    return (
        /*div pr mettre le bloc en 2e col.*/
        <header>


            <img src={Avatar} alt="My pic's profile"/>
            <div id="profile">
            <h1>{firstname} {lastname}</h1>
            <h2>{job}</h2>
            <h2>{city} </h2>
            </div>




        </header>
    )
}

export default Profile
