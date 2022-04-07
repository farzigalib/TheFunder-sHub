import React from "react";
import { Link } from "react-router-dom";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="mt-2 w-11/12 rounded-sm p-2 outline-none bg-transparent text-white border-none text-lg white-glassmorphism"
  />
);

const ViewStartUpPage = () => {
  return (
    <div className="text-white md:mx-20 mx-5 my-28 flex md:flex-row flex-col justify-center gap-x-24 gap-y-12">
      <div className="flex flex-col flex-1 gap-y-12">
        <h1 className="md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-500">Start Up Name</h1>
        <p className="md:justify-center justify-start items-center font-thin leading-8">
          Hardhat is a development environment to compile, deploy, test, and
          debug your Ethereum software. It helps developers manage and automate
          the recurring tasks that are inherent to the process of building smart
          contracts and dApps, as well as easily introducing more functionality
          around this workflow. This means compiling, running and testing smart
          contracts at the very core. Hardhat comes built-in with Hardhat
          Network, a local Ethereum network designed for development. Its
          functionality focuses around Solidity debugging, featuring stack
          traces, console.log() and explicit error messages when transactions
          fail.
        </p>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <p className="font-thin md:text-base text-sm mb-2">
            Wallet Address of StartUp Creator
          </p>
          <p className="font-semibold md:text-lg text-sm">
            0xCC62fbF8dEF24CA614a1CD60036eB6d3...
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-y-12">
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism gap-y-2">
          <p className="font-thin text-base">Startup Balance</p>
          <p className="text-2xl font-thin">
            <span className="font-normal text-orange-500">13.85 Ether </span>
            ($44663.62)
          </p>
          <p className="text-base">target of 50 Ether ($154464.86)</p>
        </div>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <h1 className="font-normal text-2xl text-orange-500 mb-6">
            Contribute Now!
          </h1>
          <p className="font-thin text-base">
            Amount in Ether you want to contribute
          </p>
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={() => {}}
          />
        </div>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <Link to="/createrequest">
            <button
              type="button"
              // onClick={handleSubmit}
              className="text-black font-semibold w-11/12 mt-2 border-[1px] p-2 border-[#3d4f7c] rounded cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 transition duration-[2s] ease-in-out hover:bg-rose-600"
            >
              Create Withdrawal Request
            </button>
          </Link>
          <p className="w-11/12 mt-4">
            * You can Request these funds for further uses and creater as well
            as investor have track of funds :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewStartUpPage;
