import {React} from 'react'

import useFormHook from "../hooks/CustomHook";
import './form.css';

// localStorage.clear();

const Form = () => {
  const redirectToPage = () => {
    localStorage.setItem("username", inputs.username);
    localStorage.setItem("email", inputs.email);
    localStorage.setItem("address", inputs.address);
    localStorage.setItem("mobile", inputs.mobile);
  
    window.location.href = '/display';
  }

 function imageUpload(e){
  const file = e.target.files[0];
  getBase64(file).then(base64 => {
    localStorage["fileBase64"] = base64;
    console.debug("file stored",base64);
  });
};

const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

  const { inputs, handleSubmit, handleInputChange } =  useFormHook(redirectToPage);
  return (
    <div className="container containerStyl">
      <form onSubmit={handleSubmit}>
        <div className="base-container">
          <div className="header text-center">Register</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Full Name</label>
                <input type="text" className="form-control" name="username" placeholder="username" onChange={handleInputChange} value={inputs.username} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" placeholder="email" onChange={handleInputChange} value={inputs.email} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mobile</label>
                <input type="tel" className="form-control" minLength="10" maxLength="10" name="mobile" placeholder="mobile" onChange={handleInputChange} value={inputs.mobile} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Address</label>
                <input type="text" className="form-control" name="address" placeholder="address" onChange={handleInputChange} value={inputs.address} required />
              </div>
            </div>
          </div>

          <div className="form-group">
          <input type="file" id="imageFile" name='imageFile' onChange={imageUpload} />
            {/* <input type="file" className="form-control ellipsis" onChange={this.uploadSingleFile} /> */}
          </div>
          {/* <button type="button" className="btn btn-primary btn-block" onClick={this.upload}>Submit</button> */}
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

