import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./minter.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import image from "../../assets/images/1.png";
import { createStyles, makeStyles } from "@mui/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Box,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import mm from "../../assets/metamask.svg";
import { injectedConnector } from "../../connector/injected-connector";
import { NFTContract, rpc, chain } from "../../connector/address";
import { JsonRpcProvider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { formatUnits,  parseUnits } from "@ethersproject/units";
import abi from "../../abi.json";
export const Minter = () => {
  const [mints, setMints] = useState(1);
  const [salePrice, setSalePrice] = useState(0);
  const { activate, account , library,chainId} = useWeb3React();
  const [counts, setCounts] = useState(0);
  const addMints = () => {
    if (mints < 10) {
      setMints(mints + 1);
    }
  };
  const subMints = () => {
    if (mints > 1) {
      setMints(mints - 1);
    }
  };

  useEffect(() => {
    const getMints = async () => {
      const provider = new JsonRpcProvider(rpc);
      const contract = new Contract(NFTContract, abi, provider);
      contract.on("CreateSleepyGiraffeNFT", async () => {
        const mint2 = await contract.totalSupply();
        setCounts(Number(formatUnits(mint2, 0)));
      });
      const mint1 = await contract.totalSupply();
      const sp = await contract.salePrice(1);
      setSalePrice(Number(formatUnits(sp, "ether")));
      setCounts(Number(formatUnits(mint1, 0)));
    };
    getMints();
  }, []);
  const getSalePriceValue = () => {
    const price = mints * salePrice;
    return price.toString();
  };
  const handleMint = async () => {
    if (account && library) {
      try {
        const signer = await library.getSigner();
        
          const contract = new Contract(NFTContract, abi, signer);
          let overRides = {
            value: parseUnits(getSalePriceValue(), "ether"),
          };
          const txResult = await contract.mint(mints, overRides);
          await txResult.wait();
          alert(`${mints} Sleepy Giraffe NFT's minted successfully!`);
        
      } catch (err) {
        if (err.data) {
          if (err.data.code === -32000) {
            alert("Insufficient Funds");
          } else {
            alert(err.data.message);
            console.log(err.code);
          }
        } else {
          if (err.code === 4001) {
            alert("User denied transaction signature.");
          } else alert("Transaction Error");
        }
      }
    }
  };
  const classes = UseStyle();
  const [isOpen, setIsOpen] = useState(false);
  const handleMetamaskClick = () => {
    activate(injectedConnector);
    setIsOpen(false);
    
  };
  return (
    <div id="mint" className="minter">
      <Container className="minter-root">
        <Row>
          <Col lg={8} md={8} sm={12}>
            <div className="mint-left">
              <h1>
                <span className="yellow">MINT</span>{" "}
                <span className="white">NFT</span>{" "}
                <span className="yellow">NOW</span>
              </h1>
              <p>500 Unique Sleepy Giraffe NFTs</p>
              <div className="mint-select">
                <div className="add">
                  <IconButton onClick={addMints}>
                    <AddCircleIcon />
                  </IconButton>
                </div>
                <div className="mint-count">
                  <span>{mints}</span>
                </div>
                <div className="remove">
                  <IconButton>
                    <RemoveCircleIcon onClick={subMints} />
                  </IconButton>
                </div>
              </div>
              <p>
                Price:{" "}
                <span style={{ color: "red" }}>{salePrice} AVAX + Gas fee</span>
              </p>
              <p>
                Your Wallet Address:{" "}
                <span style={{ color: "red" }}>
                  {account ? account : "Not Connected"}
                </span>
              </p>
              <p>
                Supply:{" "}
                <span style={{ color: "rgba(236, 199, 90, 1)" }}>
                  {counts}/500
                </span>
              </p>
              {!account && (
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn button-connect"
                >
                  Connect Wallet
                </button>
              )}
              {account && (
                <button
                  onClick={() => handleMint()}
                  className="btn button-connect"
                >
                  MINT NFT
                </button>
              )}
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className="mint-right">
              <img src={image} className="mint-img" alt="mint" />
            </div>
          </Col>
        </Row>
      </Container>
      <Dialog open={isOpen}>
        <DialogTitle>Select Wallet</DialogTitle>
        <Divider />
        <DialogContent className={classes.dlg}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              startIcon={<img src={mm} alt="Metamask" width={40} />}
              className={classes.btn}
              fullWidth
              variant="text"
              onClick={handleMetamaskClick}
            >
              Metamask
            </Button>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <div>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const UseStyle = makeStyles((theme) =>
  createStyles({
    title: {
      paddingTop: "24px",
      fontWeight: "400",
      fontSize: "16px",
      textAlign: "center",
    },
    dlg: {
      width: 450,
      padding: 15,
    },
    btn: {
      color: "black !important",
      fontSize: "22px !important",
    },
  })
);
