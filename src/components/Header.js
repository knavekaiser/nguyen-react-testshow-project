import React from "react";
import { Logo, ETH } from "./svg";
import { Searchbox, Select } from "./FormElement";
import { Link } from "react-router-dom";
require("./styles/header.scss");

const Header = () => {
  return (
    <header>
      <div className="ribbon">
        <div className="northSection">
          <span>
            <span className="label">Etherium Contract:</span>
            <span>61a1e2b80230080b3a40e002</span>
          </span>
          <span className="devider" />
          <span>
            <span className="label">BSC Contract:</span>
            <span>61a1e2b80230080b3a40e002</span>
          </span>
        </div>
        <div className="southSection">
          <span>Get SPO</span>
          <span>-</span>
          <a href="#">Uniswap</a>
          <a href="#">Gate.io</a>
          <a href="#">PancakeSwap</a>
          <a href="#" className="btn">
            Stake & Earn
          </a>
        </div>
      </div>
      <div className="content">
        <div className="northSection">
          <Logo />
          <Select
            options={[
              {
                label: (
                  <>
                    <ETH /> <span>Ethereum Mainnet</span>
                  </>
                ),
                value: "eth",
              },
            ]}
            defaultValue="eth"
          />
          <Searchbox />
        </div>
        <div className="southSection">
          <Link to="#" className="onPage">
            Explore
          </Link>
          <Link to="#">Launchpad</Link>
          <span className="devider" />
          <Link to="#">About us</Link>
          <Select
            className="secondary"
            options={[
              {
                label: "English",
                value: "english",
              },
              {
                label: "Arabic",
                value: "arabic",
              },
              {
                label: "German",
                value: "german",
              },
            ]}
            defaultValue="english"
          />
          <button className="btn primary">Connect wallet</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
