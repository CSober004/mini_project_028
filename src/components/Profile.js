import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegHeart, FaCameraRetro, FaRegFolder, FaMapMarkerAlt, FaEdge } from "react-icons/fa";

  const Profile = ({ id }) => {

  const [result, setResult] = useState([])
  const clientId = "MYq3E7dLL-MDJIPtc_bS2aDcJYkRTtwP2c-Um_PXDLw"
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
                  <div className="col-4 text-center">
                    <img className="img-user-bigimg" src={userprofile.profile_image.large} />
                    <p className="fs16 mt-2 mb-0">{"(@"+userprofile.username+")"}</p>
                  </div>
                  <div className="col-8 ps-4">
                    <h1 className="ps-3">{userprofile.first_name+" "+userprofile.last_name}</h1>
                    <hr/>
                    <div className="row py-3">
                      <div className="col-4">
                      <p className="text-center"><FaRegFolder size={25} /><br/>{userprofile.total_collections} Collections</p>
                      </div>
                      <div className="col-4">
                      <p className="text-center"><FaCameraRetro size={25} /><br/>{userprofile.total_photos} Photos</p>
                      </div>
                      <div className="col-4">
                      <p className="text-center"><FaRegHeart size={25} /><br/>{userprofile.total_likes} Likes</p>
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-4">
                      <span><FaMapMarkerAlt size={25} /> {userprofile.location}</span><br/>
                      </div>
                      <div className="col-6">
                      <span><FaEdge size={25} /> Website <a href={userprofile.links.html} className="link_website" target="_blank">Click Here!</a></span>
                      </div>
                      <div className="col-2"></div>
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