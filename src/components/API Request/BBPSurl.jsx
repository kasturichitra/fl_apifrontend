import { images } from "../../utils/constant";
import React, { useState } from "react";

export default function BaseUrl({ data, service }) {
  const servers = data?.[0]?.[service] || [];

  console.log("servers ====>>", servers)

  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const [openDropdown, setOpenDropdown] = useState(false);

    console.log("selectedServer ====>>", selectedServer)

  const handleServerSelection = (server) => {
    setSelectedServer(server);
    setOpenDropdown(false);
  };

  return (
    <div className="mt-3">
      <span className="codes_heads_title">URL</span>
      <div className="base_url_main">
        
        <div className="base_url_btn_head">
          <button
            className="base_url_btn"
            onClick={() => setOpenDropdown(prev => !prev)}
          >
            <span className="shrink-0">Base URL</span>
            <span>
              <img
                src={images.arrowIcon}
                className="invert-100 rotate-90 w-3 h-3"
                alt=""
              />
            </span>
          </button>

          <div className={`base_url_dropdown ${openDropdown ? "open" : ""}`}>
            <p className="px-3 py-0.5 text-xs">
              <span>Servers</span>
            </p>

            {servers.map((server, i) => {
              const isSelected =
                selectedServer?.serverTitle === server.serverTitle;

              return (
                <div
                  key={i}
                  className={`base_url_drp_fld ${isSelected ? "selected" : ""}`}
                  onClick={() => handleServerSelection(server)}
                >
                  <div>
                    <p className="text-sm font-medium">{server.serverTitle}</p>
                    <span className="text-xs">{server.subTitle}</span>
                  </div>

                  {isSelected && (
                    <img src={images.check} alt="" className="check_icon" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <p className="base_url custom_scrollbar">{selectedServer?.link}</p>
      </div>
    </div>
  );
}