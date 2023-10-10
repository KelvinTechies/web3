import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ContractAddress, contractABI } from "../utils/Constants";

export const Trasactioncontext = React.createContext();
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    ContractAddress,
    contractABI,
    signer
  );

  /*  console.log({
    provider,
    signer,
    transactionContract,
  });
 */
  return transactionContract;
};
export const TrasactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    gif: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [trasactionCount, setTrasactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const chweckIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);

      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("N Account found");
      }
    } catch (err) {
      console.log(err);
      throw new Error("No Ethereum object found for the account");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install MetaMask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object");
    }
  };
  useEffect(() => {
    chweckIfWalletIsConnected();
  }, []);

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please Install MetaMask");
      const { addressTo, gif, keyword, amount, message } = formData;
      const parsedAmount = ethers.parseEther(amount);
      const transactionContract = getEthereumContract();
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x5208",
            value: amount,
          },
        ],
      });
      const trasactionHash = await transactionContract.AddToBlockChain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      setIsLoading(true);
      console.log(`loading-${trasactionHash.hash}`);
      await trasactionHash.wait();
      setIsLoading(false);
      console.log(`Success:-${trasactionHash}`);
      const transactionCount = await transactionContract.getTrasactionCount();
      setTrasactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object");
    }
  };
  return (
    <Trasactioncontext.Provider
      value={{
        connectWallet,
        connectedAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </Trasactioncontext.Provider>
  );
};

// export default Trasactioncontext;
