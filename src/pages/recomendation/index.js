import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

const RecomendationPage = () => {
  var url = process.env.REACT_APP_API_URL;
  const token = process.env.REACT_APP_API_TOKEN;
  const [recomendations, setRecomendations] = useState([]);
  const [recomendationId, setRecomendationId] = useState("");
  const [devices, setDevices] = useState([]);

  const getRecomendation = async () => {
    try {
      const data = await axios
        .get(url + "/api/v1/work/get-recomendation", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setRecomendations(res.data.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRecomendation();
    console.log(recomendations);
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 d-flex">
        <div className="ml-auto">
          <Link to="/create-recomendation" className="btn btn-primary">
            CREATE
          </Link>
        </div>
      </div>
      {recomendations.map((dataOne, index) => (
        <div className="col-md-3">
          <div
            className={`card ${index % 2 ? "card-success" : "card-secondary"}`}
          >
            <div className="card-header">
              <h3 className="card-title">{dataOne.wo_number}</h3>
            </div>
            <div className="card-body">
              <strong>WO PART NAME</strong>
              <p>{dataOne.wo_part_name}</p>
              <hr />
              <strong>Delegated For</strong>
              <br />
              <ol>
                {dataOne.recomendation.map((dataTwo, index) => (
                  <div>
                    <li>
                      {dataTwo.man_power_name}
                      <div style={{ marginLeft: "-30px" }}>
                        <ul>
                          {dataTwo.device_recomendation.map(
                            (dataThree, index) => (
                              <li>
                                {dataThree.device_sn} | {dataThree.device_name}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </li>
                  </div>
                ))}
              </ol>
            </div>
            <div className="card-footer d-flex">
              <div className="ml-auto">
                <Link
                  to=""
                  className="btn btn-dark btn-sm"
                  style={{ marginRight: "5px" }}
                >
                  GET QR CODE
                </Link>
                <Link
                  to={`/update-recomendation/${dataOne.wo_id}`}
                  className="btn btn-info btn-sm"
                >
                  UPDATE
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const DeviceList = ({ deviceList }) => <li>{deviceList.device_id}</li>;

export default RecomendationPage;
