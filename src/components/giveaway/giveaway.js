import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";
import union from "../../assets/images/union.png";
import coin from "../../assets/images/coin.png";
import box from "../../assets/images/box.png";
import gift from "../../assets/images/gift.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from "@mui/material";

export const Giveaway = () => {
  return (
    <div id="giveaways" className="giveaway">
      <div className="giveaway-cont">
        <Container>
          <Row>
            <Col className="head" lg={12} md={12} sm={12}>
              <h1>Giveaways</h1>
            </Col>
            <Col className="subHead" lg={12} md={12} sm={12}>
              <p>
                <i>As artists we enjoy making NFT collections</i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="give-col" sm={12} md={12} lg={4}>
              <div className="giveItem">
                <img src={union} className="union-img" alt="union" />
                <div className="content-give">
                  <img src={coin} className="one" alt="" />
                  <p>We like to give back to our collectors</p>
                </div>
              </div>
            </Col>
            <Col className="give-col" sm={12} md={12} lg={4}>
              <div className="giveItem">
                <img src={union} className="union-img" alt="union" />
                <div className="content-give">
                  <img src={box} className="two" alt="" />
                  <p>
                    There will be two $5,000 USDC giveaways from our Sleepy
                    Giraffe collection
                  </p>
                </div>
              </div>
            </Col>
            <Col className="give-col" sm={12} md={12} lg={4}>
              <div className="giveItem">
                <img src={union} className="union-img" alt="union" />
                <div className="content-give">
                  <img src={gift} className="three" alt="" />
                  <p>
                    As long as you hold an nft at time of drawing you have a
                    chance to win. Minting more NFTs gives you a better chance.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="support">
            <Col className="head " lg={12} md={12} sm={12}>
              <h1>Support</h1>
            </Col>
            <Col className="subHead " lg={12} md={12} sm={12}>
              <p>
                <i>Please DM us on twitter.</i>
              </p>
            </Col>
            <Col className="subHead " lg={12} md={12} sm={12}>
              <p>
                <IconButton>
                    <TwitterIcon />
                </IconButton>
              </p>
              
            </Col>
          </Row>
          <hr className="line" />
        </Container>
        <Container>
            <Row>
            <Col className="subHead " lg={12} md={12} sm={12}>
              <p className="small">
                All rights reserved | Crazy Crypto Animals
              </p>
              
            </Col>
            </Row>
        </Container>
        
      </div>
    </div>
  );
};
