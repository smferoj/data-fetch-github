import React from 'react';
import './DetailsCard.css'
import {Col,Row } from 'react-bootstrap';
import {GoRepo} from 'react-icons/go'
import{GiShadowFollower}from 'react-icons/gi'
import{RiChatFollowUpFill}from 'react-icons/ri'
import{VscGistSecret}from 'react-icons/vsc'

const DetailsCard = ({user, setUser}) => {
    return (
     
             <section className='DetailsCardsSection'>
                <Row>
                    <Col>
                        <div className='DetailsCards'>
                            <GoRepo />
                            <h5>{user.public_repos}</h5>
                            <p>Repos</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='DetailsCards'>
                            <GiShadowFollower />
                            <h5>{user.followers}</h5>
                            <p>Followers</p>
                        </div>
                    </Col>
                    <Col >
                        <div className='DetailsCards'>
                            <RiChatFollowUpFill />
                            <h5>{user.following}</h5>
                            <p>Following</p>
                        </div>
                    </Col>
                    <Col >
                        <div className='DetailsCards'>
                            <VscGistSecret />
                            <h5>{user.public_gists}</h5>
                            <p>Gists</p>
                        </div>
                    </Col>
                </Row>
            </section>
    );
};

export default DetailsCard;

