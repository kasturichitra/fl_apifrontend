import React, { useState } from "react";
import { GetAcc } from "../utils/Language";
import { FetchApi } from "../utils/Custom_Api";

export default function Decryption() {

  return (
    <div className="main_parent">
      <div className="first_child hide-scrollbar">
        {/* MAIN HERO ELEMENT */}
        <div className="api_hero">
          <h1 className="api_heading">Encryption And Decryption</h1>
          <p className="first_para">
            Enter your CIN number to verify the company details.
          </p>
        </div>
      </div>
    </div>
  );
}




