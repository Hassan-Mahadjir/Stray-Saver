import React from "react";
import "./style.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="group">
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="sponsor">
                            <div className="overlap-group">
                                <div className="text-wrapper">Adopt Animal</div>
                            </div>
                        </div>
                        <img className="pet-care" alt="Pet care" src="pet-care-1.png" />
                    </div>
                </div>
                <div className="sponsor-wrapper">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <div className="div">Donate</div>
                            <img className="donation" alt="Donation" src="donation-1.png" />
                        </div>
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">Report Animal</div>
                            <img className="katman" alt="Katman" src="katman-x0020-1.png" />
                        </div>
                    </div>
                </div>
                <div className="group-2">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <div className="text-wrapper-3">Volunteering</div>
                            <img className="simsiz" alt="Simsiz" src="simsiz-12-1.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Box;