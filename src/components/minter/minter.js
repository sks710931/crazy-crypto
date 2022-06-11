import React, { useState } from 'react'
import { Col, Container,  Row,  } from 'react-bootstrap';
import "./minter.scss";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton } from '@mui/material';
import image from "../../assets/images/1.png";
export const Minter = () => {
    const [mints, setMints] = useState(1);
    const addMints = () => {
        if(mints < 10){
            setMints(mints + 1)
        }
    }
    return (
        <div id="mint" className="minter">
            <Container  className='minter-root'>
                <Row>
                    <Col lg={8} md={8} sm={12}>
                        <div className="mint-left">
                            <h1><span className='yellow'>MINT</span> <span className='white'>NFT</span> <span className='yellow'>NOW</span></h1>
                            <p>500 Unique Sleepy Giraffe NFTs</p>
                            <div className='mint-select'>
                                <div className="add">
                                    <IconButton onClick={addMints}><AddCircleIcon /></IconButton>
                                </div>
                                <div className="mint-count">
                                    <span>{mints}</span>
                                </div>
                                <div className="remove">
                                    <IconButton><RemoveCircleIcon /></IconButton>
                                </div>
                            </div>
                            <p>Price: <span style={{color: "red"}}>3 AVAX + Gas fee</span></p>
                            <p>Supply: <span style={{color: "red"}}>500</span></p>
                            <p>Total Minted: <span style={{color: "rgba(236, 199, 90, 1)"}}>4/500</span></p>
                            <button className="btn button-connect">
                                Connect Wallet
                            </button>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className="mint-right">
                            <img src={image} className="mint-img" alt="mint" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}