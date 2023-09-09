import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
// import { Modal } from "react-bootstrap";
import "./styles.scss";

SliderItem.propTypes = {
  item: PropTypes.object,
};

function SliderItem(props) {
  const { item } = props;

  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const openInfoPopup = () => {
    setShowInfoPopup(true);
    setInfoOpen(false);
  };

  const openVideoPopup = () => {
    setShowVideoPopup(true);
    setVideoOpen(false);
  };

  const closeInfoPopup = () => {
    setShowInfoPopup(false);
  };
  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <div className={`box-slider ${item.classAction}`}>
      <img className="bg-slider" src={item.bgImg} alt="cybox" />
      <div className="box-slider__main">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="content-box">
                <h1 className="title">{item.title}</h1>
                <p className="sub-title">{item.desc}</p>
                <div className="wrap-btn">
                  <Link
                    onClick={openInfoPopup}
                    className="tf-button-st2 btn-effect"
                    data-toggle="modal"
                    data-target="#popup_bid"
                  >
                    <span className="effect">Join Now</span>
                  </Link>

                  <button to="#" className="tf-button btn-effect popup-youtube" onClick={()=> setOpen(true)}>
                                    
                                        <span className="boder-fade"></span>                                     
                                        <span className="effect">watch video</span>
                                    </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="image">
                <img src={item.img} alt="cybox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="i7EMACWuErA" onClose={() => setOpen(false)} />
      {/* Popup */}
      {showInfoPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup-button" onClick={closeInfoPopup}>
              <i className="fas fa-times"></i>
            </button>
            <h5>Enter your information</h5>
            <input
              type="text"
              placeholder="Joining Plan"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="User name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="Referral Address"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="button-group">
              <button className="close-button" onClick={closeInfoPopup}>
                Close
              </button>
              <button className="submit-button" onClick={closeInfoPopup}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderItem;
