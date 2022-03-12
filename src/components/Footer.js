import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <div>
          <div className="logo_footer">
            <img src={require("../image/logo.png").default} alt="" />
          </div>
        </div>
        <div className="footer_text">
          {" "}
          Divine Assembly © 2021 All Rights Reserved | Privacy Policy
        </div>
      </div>
      <div className="footer_right">
        <div>24 Ajiboye Street, Off Kazeem, Alapere - Ketu.</div>
      </div>
    </div>
  );
}
