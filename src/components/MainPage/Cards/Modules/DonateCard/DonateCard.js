import React from "react";
import petcare from "../../../icons/pet-care.png";


const DonateCard = () => {
  return (
      <div className="card mb-4 rounded-3 shadow-sm border-2">
          <div className="card-body">
              <div className="text-center"><img className=" mb-4" src={petcare} alt=""
                                                width="125" height="125"/>

                  <button type="button" className="w-100 btn btn-lg "
                          style={{color: '#248B0D', borderColor: '#fff', fontWeight: 600}}>Donate
                  </button>
              </div>

          </div>
      </div>
  )
}
export default DonateCard;