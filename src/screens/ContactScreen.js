import React from "react";

export default function ContactScreen() {
  return (
    <div>
      <div className="contact_banner"></div>

      <div className="contact_form_container">
        <div className="contactdetail_container">
          <div className="contactdetail_header">
            <h2>Contact Details</h2>
          </div>

          <div className="contact_details">
            <div className="contact_details_header">
              <h3>For Counselling:</h3>
            </div>
            <div>Phone:: 08027166710</div>
          </div>

          <div className="contact_details">
            <div className="contact_details_header">
              <h3>For Prayer:</h3>
            </div>
            <div>phone 1:: 08061974138</div>
            <div>Phone 2:: 08023229261</div>
            <div>Phone 3:: 08023136706</div>
          </div>

          <div className="contact_details">
            <div className="contact_details_header">
              <h3>For Welfare Support:</h3>
            </div>
            <div>phone 1:: 08023229261</div>
            <div>Phone 2:: 08023136706</div>
          </div>
        </div>
        <div className="center_line"></div>
        <form>
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            name="phone"
            type="number"
            className="feedback-input"
            placeholder="Phone"
          />
          <textarea
            name="text"
            className="feedback-input"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}
