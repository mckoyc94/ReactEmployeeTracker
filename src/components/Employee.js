import React from "react";
//Imported Photos
import Naruto from "../images/Naruto.png";
import Tsunade from "../images/Tsunade.png";
import Kakashi from "../images/Kakashi.png";
import Might from '../images/Might_Guy.png';
import Hiashi from "../images/Hiashi.png";
import Asuma from "../images/Asuma.png";
import Itachi from "../images/Itachi.png";
import Yamato from "../images/Yamato.png";
import Sai from "../images/Sai.png";
import Iruka from "../images/Naruto.png";
import Shikamaru from "../images/Shikamaru.png";
import Rock from "../images/Rock_Lee.png";
import Hinata from "../images/Hinata.png";
import Sakura from "../images/Sakura.png";
import Sasuke from "../images/Sasuke.png";
import Konohamaru from "../images/Konohamaru.png";

//Component
const Employee = ({ninja}) => {
    // Array of images
    const images = [Tsunade, Kakashi, Might, Hiashi, Asuma, Itachi, Yamato, Sai, Iruka, Shikamaru, Rock, Hinata, Sakura, Naruto, Sasuke, Konohamaru]
    // Destructured incoming file
    const {name, position, email, birthday} = ninja

    // Function to Render Image
    const image = (id) => {
        switch(id){
            case 'Tsunade': return Tsunade;
            case 'Kakashi': return Kakashi;
            case 'Might': return Might;
            case 'Hiashi': return Hiashi;
            case 'Asuma': return Asuma;
            case 'Itachi': return Itachi;
            case 'Yamato': return Yamato;
            case 'Sai': return Sai;
            case 'Shikamaru': return Shikamaru;
            case 'Hinata': return Hinata;
            case 'Rock': return Rock;
            case 'Iruka': return Iruka;
            case 'Sakura': return Sakura;
            case 'Naruto': return Naruto;
            case 'Sasuke': return Sasuke;
            case 'Konohamaru': return Konohamaru
        }
    }

    // Returns Component
    return(
    <tr>
    <td><img src = {image(name.first)} alt = {name.first} width="150px" height="100px"></img></td>
        <td>{name.first} {name.last}</td>
        <td>{position}</td>
        <td>{email}</td>
        <td>{birthday}</td>
    </tr>
    )
}

export default Employee