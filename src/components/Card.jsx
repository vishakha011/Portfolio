import React from 'react';

import { BiLink } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineMedium } from 'react-icons/ai'

const Card = ({data, cardLink, mediumLink}) => {

    const handleClick = (link) => {
        window.open(link)
    };

    return (
        <>
        <div className="content-card">
            <div className="content-img">
                <img className="img-responsive" src={data.img} alt={data.title} />
            </div>

            <div className="content-description">
                <h4 className="content-heading">{data.title}</h4>
                <p>{data.description}</p>
            </div>
            <div className="content-overlay">
                <div className="content-overlay__icons flex-center">
                    {cardLink  && (
                        <>
                        {
                            data.deploymentLink ? (
                                <button 
                        className="btn-overlay-icon"
                        onClick={() =>{handleClick(data.deploymentLink)}}>
                        <BiLink className="overlay-icon"/>
                        </button>
                            ) : (
                                ""
                            )
                        }
                        <button 
                        className="btn-overlay-icon"
                        onClick={() =>{handleClick(data.githubLink)}}>
                        <BiCodeAlt className="overlay-icon"/>
                        </button>
                        
                        </>
                    )}
                    {mediumLink  && (
                        <>
                        <button 
                        className="btn-overlay-icon"
                        onClick={() =>{handleClick(data.mediumLink)}}>
                        <AiOutlineMedium className="overlay-icon"/>
                        </button>
                        </>
                    )}
                </div>
            </div>
        </div>
        </>
    )
};

export default Card;