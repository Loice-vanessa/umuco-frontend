import React from "react";
import Dashboard from "../../DashboardLayout";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./new.css";
const NewUser = () => {
  return (
    <>
      <Dashboard>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="data:image/jpeg;base64,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"
              alt="No image"
            />
            
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                    <label htmlFor="file">
                   Image: <DriveFolderUploadIcon className="icon"/>
                    </label>
                    <input type="File" id="file" style={{display:"none"}}/>
                </div>
                <div className="formInput">
                    <label >UserName</label>
                    <input type="text"placeholder="john_baptist" />
                </div>
                <div className="formInput">
                    <label >Name</label>
                    <input type="text"placeholder="John Baptist" />
                </div>
                <div className="Email">
                    <label >Email</label>
                    <input type="email"placeholder="John@gmail.com" />
                </div>
                <div className="formInput">
                    <label >Phone</label>
                    <input type="text"placeholder="+250378890986" />
                </div>
                <div className="formInput">
                    <label >Password</label>
                    <input type="text" />
                </div>
                <div className="formInput">
                    <label >Address</label>
                    <input type="text"placeholder="Remera" />
                </div>
                <div className="formInput">
                    <label >Country</label>
                    <input type="text"placeholder="Kenya" />
                </div>
                <button>Send</button>
            </form>
            </div>
        </div>
      </Dashboard>
    </>
  );
};
export default NewUser;
