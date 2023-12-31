import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import RoadMapItem from './roadmap-item';

RoadMap.propTypes = {
    data: PropTypes.array,
};

function RoadMap(props) {

    const { data } = props;

    const [dataBlock] = useState(
        {
            subtitle: 'ROADMAP',
            title: 'cybox Timeline'
        }
    )

    return (
        <section className="tf-section tf-roadmap">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title mb-30" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="search-button">
                            <div className='tree-buttons'>
                                <button className='enable'>Enable</button>
                                <button className='disable'>Disable</button>
                                <button className='disable'>Disable</button>
                                <button className='disable'>Disable</button>
                            </div>
                            <div className='search'>
                                <input
                                    type="text"
                                    placeholder="Search"
                                // You can add event handlers here for functionality
                                />
                                <button>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="roadmap scrol">

                            {
                                data.map(item => (
                                    <RoadMapItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoadMap;