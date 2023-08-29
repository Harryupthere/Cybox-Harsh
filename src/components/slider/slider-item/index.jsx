import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
// import { Modal } from "react-bootstrap";
import "./styles.scss";
import Web3 from "web3";
// import config from "../../../config";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

SliderItem.propTypes = {
  item: PropTypes.object,
};

function SliderItem(props) {
  const { item } = props;

  const { address, connector, isConnected } = useAccount();

  const { open, close } = useWeb3Modal();

  // const tokenContract = config.contract;
  // const tokenABI = config.tokenABI;
  // const contract = config.contract;
  // const abi = config.abi;

  let tokenContract = "0xbEACD5D4b997A24209A424A28d13B33055b1864F";
  let tokenABI = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_spender", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_recipient", type: "address" },
      ],
      name: "initialMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "initialMinted",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "mint",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "minter",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_minter", type: "address" }],
      name: "setMinter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_to", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_from", type: "address" },
        { internalType: "address", name: "_to", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  let contract = "0x16678882Bcd0298fF1E8B66c691c0D792A56C1d7";
  let abi = [
    {
      inputs: [
        { internalType: "address", name: "_router", type: "address" },
        { internalType: "address", name: "_tokenAddress", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "data",
          type: "string",
        },
        {
          indexed: false,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "message",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "referer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "time",
          type: "uint256",
        },
      ],
      name: "regist10",
      type: "event",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "JoiningFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TokenContract",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "UserData",
      outputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "string", name: "username", type: "string" },
        { internalType: "address", name: "referer", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "uint256", name: "time", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_joinningPlan", type: "uint256" },
        { internalType: "string", name: "_username", type: "string" },
        { internalType: "address", name: "_referer", type: "address" },
      ],
      name: "freeJoin",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_joinningPlan", type: "uint256" },
        { internalType: "address", name: "_address", type: "address" },
      ],
      name: "getDirectRefer",
      outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_joinningPlan", type: "uint256" },
        { internalType: "address", name: "_address", type: "address" },
      ],
      name: "getDirects",
      outputs: [
        {
          components: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "string", name: "username", type: "string" },
            { internalType: "address", name: "referer", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "time", type: "uint256" },
          ],
          internalType: "struct Compensation.reg[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_joinningPlan", type: "uint256" },
        { internalType: "address", name: "_address", type: "address" },
      ],
      name: "getParentRefer",
      outputs: [{ internalType: "address[5]", name: "", type: "address[5]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_number", type: "uint256" }],
      name: "getRandomNumberFrom",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "isReferralLink",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "", type: "string" }],
      name: "isUsernameTaken",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_joinningPlan", type: "uint256" },
        { internalType: "string", name: "_username", type: "string" },
        { internalType: "address", name: "_referer", type: "address" },
      ],
      name: "join",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rescueETH",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_token", type: "address" }],
      name: "rescueTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_a", type: "uint256" },
        { internalType: "uint256", name: "_b", type: "uint256" },
        { internalType: "uint256", name: "_c", type: "uint256" },
        { internalType: "uint256", name: "_d", type: "uint256" },
      ],
      name: "setJoiningFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "swapRouter",
      outputs: [
        {
          internalType: "contract IUniswapV2Router",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ];

  let web3 = new Web3(window.ethereum);
  let contractCall = new web3.eth.Contract(abi, contract);
  let tokenContractCall = new web3.eth.Contract(tokenABI, tokenContract);

  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const [inputValue, setInputValue] = useState({
    planId: "",
    userName: "",
    referralAddress: contract,
  });
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const openInfoPopup = () => {
    setShowInfoPopup(true);
    setInfoOpen(false);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // if (name === "planId" && (parseInt(value) < 0 || parseInt(value) > 3)) {
    //   alert("Join plan value is out of range(0, 1, 2, 3).");
    // setInputValue((old) => ({
    //   ...old,
    //   planId: 0,
    // }));
    // }

    setInputValue((old) => {
      return { ...old, [name]: value };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!isConnected) {
        alert("Please connect wallet");
        return;
      }

      let joinningFees = await contractCall.methods
        .JoiningFee(inputValue.planId)
        .call();
      joinningFees = parseInt(joinningFees);
      const join = await contractCall.methods.join(
        inputValue.planId,
        inputValue.userName,
        inputValue.referralAddress
      );
      let encoded_tx = join.encodeABI();

      let gasPrice = await web3.eth.getGasPrice();

      let gasLimit = await web3.eth.estimateGas({
        gasPrice: web3.utils.toHex(gasPrice),
        to: contract,
        from: address,
        data: encoded_tx,
        value: joinningFees.toString(),
      });

      let trx = await web3.eth.sendTransaction({
        gasPrice: web3.utils.toHex(gasPrice),
        gas: web3.utils.toHex(gasLimit),
        gasPrice: web3.utils.toHex(gasPrice),
        to: contract,
        from: address,
        data: encoded_tx,
        value: joinningFees.toString(),
      });
      console.log(trx, "trx");
    } catch (error) {
      alert(error.dta ? error.data.message : error.message);
    }
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

                  <button
                    to="#"
                    className="tf-button btn-effect popup-youtube"
                    onClick={() => setOpen(true)}
                  >
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

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="i7EMACWuErA"
        onClose={() => setOpen(false)}
      />
      {/* Popup */}
      {showInfoPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup-button" onClick={closeInfoPopup}>
              <i className="fas fa-times"></i>
            </button>
            <h5>Enter your information</h5>
            <input
              type="number"
              placeholder="Joining Plan"
              name="planId"
              value={inputValue.planId}
              onChange={inputHandler}
            />
            <input
              type="text"
              placeholder="User name"
              name="userName"
              value={inputValue.userName}
              onChange={inputHandler}
            />
            <input
              type="text"
              placeholder="Referral Address"
              name="referralAddress"
              value={inputValue.referralAddress}
              onChange={inputHandler}
            />
            <div className="button-group">
              <button className="close-button" onClick={closeInfoPopup}>
                Close
              </button>
              <button
                className="submit-button"
                onClick={(e) => {
                  submit(e);
                }}
              >
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
