import React, { useState } from "react";
import axios from "axios";
import Post from "../components/Posts";
const Search = () => {
  const [photo, setPhoto] = useState([]);
  const [clientId] = useState("6cHqcrmhEGSNE9y0yTrP11nY6uxb7CyubTSgpJXg3Qo");
  const [result, setResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      setResult(response.data.results);
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center text-header-h1">React Search API</h1>
        <div className="row">
        <div className="col-3"></div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="fix-input-text input-group text-center">
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="ข้อความสำหรับการค้นหา"
                />

                <div className="input-group-append">
                  <button type="submit" className="btn btns px-5">
                    ค้นหา
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-3"></div>

        </div>
      </div>
      <Post id={result} />
    </>
  );
};

export default Search;
