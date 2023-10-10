import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import "./welcome.css";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { Trasactioncontext } from "../../Context/Trasactioncontext";

function Welcome() {
  const {
    connectWallet,
    connectedAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(Trasactioncontext);
  // console.log(formData);

  const handleSubmit = (e) => {
    const { addressTo, gif, amount, message } = formData;
    // console.log(formData);

    e.preventDefault();
    if (!addressTo || !gif || !amount || !message) return;

    sendTransaction();
  };
  return (
    <div className="wel_flex">
      <div className="wel">
        <div className="wel_l">
          <div className="flxW">
            <h1>
              Send Crypto <br /> Across the World
            </h1>
          </div>
          <p>
            Explore the crypto World, Buy and Sell <br /> crypto currencies
            easily around the world on SCrpto
          </p>
          <div className="button">
            {!connectedAccount && (
              <button type="button" onClick={connectWallet}>
                <p> Connect Wallet</p>
              </button>
            )}
            <div className="grid">
              <div className="Reliability">Reliability</div>
              <div className="security">Security</div>
              <div className="ethereum">Ethereum</div>
              <div className="web3">Web3.0</div>
              <div className="low_fees">Low Fees</div>
              <div className="BlockChain">BlockChain</div>
            </div>
          </div>
        </div>
        <div className="f_right">
          <div className="eth_card">
            <div className="ethF">
              <div className="ethf">
                <SiEthereum fontSize={21} />
              </div>
              <BsInfoCircle fontSize={17} color="fff" />
            </div>
            <div className="p">
              <p>Address</p>
              <p className="peth">Ethereum</p>
            </div>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Address To"
              name="addressTo"
              id=""
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Amount (ETH)"
              name="amount"
              id=""
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Keyword (Gif)"
              name="gif"
              id=""
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Message"
              name="message"
              id=""
              onChange={handleChange}
            />
            <div className="d1" />
            {false ? (
              <Loader />
            ) : (
              <button className="sBtn" onClick={handleSubmit}>
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
