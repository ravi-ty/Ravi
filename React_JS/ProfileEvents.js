import React,{useState} from "react";
import ProfileForms from "./ProfileForms";
import "./ProfileEvents.css";

const ProfileEvents = () => {
    const [profile, setProfile] = useState([]);
    const profileArray = [];
    const profileDataHandler=(data)=>{
        console.log(data);
        profileArray.push(data);
        setProfile(profileArray);
    }
    console.log(profile);
    return (
        <div>
        <div className="new-expense">
            <ProfileForms onProfileData={profileDataHandler}></ProfileForms>
        </div>
        <div className="fet new-expense">
            <table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>NUMBER</th>
                    <th>PLACE</th>
                </tr>
                {profile.map(result => (
                <tr>
                    <td>{result.id}</td>
                    <td>{result.name}</td>
                    <td>{result.number}</td>
                    <td>{result.place}</td> 
                </tr>
            ))}
            </table> 
        </div>
        </div>
    )

}

export default ProfileEvents;