import React from "react";
import vet from "../../../icons/vet.png";
import { Link } from 'react-router-dom';

const VolunteerCard = () => {
  return (
      <div className="card mb-4 rounded-3 shadow-sm border-2">

          <div className="card-body">
              <div className="text-center"><img className=" mb-4" src={vet} alt=""
                                                width="125" height="125"/>
                  <Link to="/volunteering">
                  <button type="button" className="w-100 btn btn-lg "
                          style={{color: '#248B0D', borderColor: '#fff', fontWeight: 600}}>Volunteer
                  </button>
                  </Link>
              </div>
          </div>
      </div>
  )
}
export default VolunteerCard;