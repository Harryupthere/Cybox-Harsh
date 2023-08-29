import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styled.scss";

import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

RoadMap.propTypes = {
  data: PropTypes.array,
};

function RoadMap2(){
  return(
    <>
    <div className="roadmapm">
     <h1>No user Found</h1>
    </div>
  </>
  )
}

function RoadMap(props) {
  const { data } = props;

  const [searchItem, setSearchItem] = useState("");
  const [classes,setClasses] = useState([false,false,false,false])
  const [dataBlock] = useState({
    subtitle: "ROADMAP",
    title: "cybox Timeline",
  });

  const selectId = async (e, ids) => {
    e.preventDefault();
    if(ids==0){
      setClasses([true,false,false,false])
    }else if(ids==1){
      setClasses([false,true,false,false])
    }else if(ids==2){
      setClasses([false,false,true,false])
    }else{
        setClasses([false,false,false,true])
    }
    props.SubmitId(ids);
  };

  const inputHandler = (e) => {
    setSearchItem(e.target.value);
    if(e.target.value.length<=0)
    props.SubmitSearch(0);
  };
  const submitSearch = (e) => {
    e.preventDefault();
   
    props.SubmitSearch(searchItem);
  };

  return (
    <section className="tf-section tf-roadmap style2 style3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              className="tf-title mb-39"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* <p className="h8 sub-title">{dataBlock.subtitle}</p>
              <h4 className="title">{dataBlock.title}</h4> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="search-button">
              <div className="tree-buttons">
                <button
                  className={classes[0]?"enable":"disable"}
                  title="0"
                  onClick={(e) => selectId(e, 0)}
                >
                  Bronze
                </button>
                <button
                  className={classes[1]?"enable":"disable"}
                  title="1"
                  onClick={(e) => selectId(e, 1)}
                >
                  Silver
                </button>
                <button
                  className={classes[2]?"enable":"disable"}
                  title="2"
                  onClick={(e) => selectId(e, 2)}
                >
                  Gold
                </button>
                <button
                  className={classes[3]?"enable":"disable"}
                  title="3"
                  onClick={(e) => selectId(e, 3)}
                >
                  Diamond
                </button>
              </div>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                  // You can add event handlers here for functionality
                />
                <button
                  onClick={(e) => {
                    submitSearch(e);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
            { data[0].id == 0?
                  <RoadMap2/>
                  : <div
              className="roadmap style2 style3"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={350}
                navigation
                scrollbar={{ draggable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 5,
                  },
                }}
              >
                {data.map((item) => (
                 
                  <SwiperSlide key={item.id}>
                    <div className="box">
                      <div className="rm-boxed">
                        <div className={`corner-box ${item.style}`}>
                          <h5>{item.time}</h5>
                          <ul>
                            {item.list.map((li, idx) => (
                              <li key={idx}>{li.text}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
