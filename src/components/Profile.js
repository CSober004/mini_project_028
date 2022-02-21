import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaCameraRetro, FaFolder, FaMapMarkerAlt, FaEdgeLegacy } from "react-icons/fa";

  const Profile = ({ id }) => {

  const [result, setResult] = useState([])
  const clientId = "6cHqcrmhEGSNE9y0yTrP11nY6uxb7CyubTSgpJXg3Qo"
  const urlaccount = "https://api.unsplash.com/search/users?page=1&query="+id+"&client_id="+clientId;
  useEffect(() => {
    axios.get(urlaccount)
    .then((response) => {
      setResult(response.data.results);
    })
  }, [id]); 

  return (
    <>
      <div className="container my-5" >
        {result.map((userprofile) => (
          <>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row px-4 py-4 card-profile">
                  <div className="col-12 text-center">
                    <img className="img-user-bigimg" src={userprofile.profile_image.large} />
                 
                  </div>
                  <div className="col-12 ">
                    <h1 className="text-center">{userprofile.first_name+" "+userprofile.last_name}</h1>
          
                    <div className="row py-3">
                    <div className="col-3"></div>
                      <div className="col-2">
                      <p className="text-center"><FaFolder size={25} /><br/>{userprofile.total_collections} Collections</p>
                      </div>
                      <div className="col-2">
                      <p className="text-center"><FaCameraRetro size={25} /><br/>{userprofile.total_photos} Photos</p>
                      </div>
                      <div className="col-2">
                      <p className="text-center"><FaHeart size={25} /><br/>{userprofile.total_likes} Likes</p>
                      </div>
                      <div className="col-3"></div>
                    </div>
              
                    <div className="row">
                    <div className="col-3 text-center"></div>
                      <div className="col-3 text-center">
                      <span><FaMapMarkerAlt size={25} /> {userprofile.location}</span><br/>
                      </div>
                      <div className="col-3 text-center">
                      <span><FaEdgeLegacy size={25} /> Website <a href={userprofile.links.html} className="link_website" target="_blank">Click Here!</a></span>
                      </div>
                      <div className="col-3 text-center"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
export default Profile;