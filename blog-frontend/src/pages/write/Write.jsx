import React from "react";
import { Add } from "@material-ui/icons";
import "./write.scss";

const Write = () => {
  return (
    <div className="write">
      <img
        className="img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="form">
        <div className="formGroup">
          <label htmlFor="fileInput">
            <Add className="icon"></Add>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="formGroup">
          <textarea
            className="input text"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
