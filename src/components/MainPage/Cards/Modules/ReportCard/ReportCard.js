import React from "react";
import { Link } from 'react-router-dom';
import petfood from "../../../icons/pet-food.png";

const ReportCard = () => {
  return (
      <div className="card mb-4 rounded-3 shadow-sm border-2">
          <div className="card-body">
              <div className="text-center"><img className=" mb-4" src={petfood} alt=""
                                                width="125" height="125"/>


                  <Link to="/reportation">
                      <button type="button" className="w-100 btn btn-lg "
                              style={{
                                  color: '#248B0D',
                                  borderColor: '#fff',
                                  fontWeight: 600
                              }}>Report
                      </button>
                  </Link>
              </div>
          </div>
      </div>
  )
}
export default ReportCard;