import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import { signUp } from "../../util/firebaseFunctions";
import axios from "axios";
import appleApp from "../../images/appleApp.png";
import googlePlayApp from "../../images/googlePlayApp.png";
import facebookIcon from "../../images/white-facebook-icon-transparent-background-72.png";
import Paper from "@material-ui/core/Paper";
import "../../CSS/signUp.css";
import firebase, { storage } from "../../firebase";
import TextField from "@material-ui/core/TextField";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const API = apiURL();

  const handleUpload = (e) => {
    const stagedImage = e.target.files[0];
    if (stagedImage) {
      setImage(stagedImage);
      const uploadTask = storage
        .ref(`images/${stagedImage.name}`)
        .put(stagedImage);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(stagedImage.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await signUp(email, password);
      await axios.post(`${API}/api/users`, {
        id: res.user.uid,
        full_name: full_name,
        email: email,
        username: username,
        bio: bio,
        profile_pic: url,
      });
      history.push(`/${username}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="signup">
        <Paper className="paper">
          <div className="signUpContainer">
            <div className="title">
              <h1 className="instagram">InstaClone</h1>
              <p className="signUpIntro">
                Sign up to see photos and videos from your friends
              </p>
            </div>
            <div className="facebookDivSignUp">
              <button className="facebookButton">
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="facebookIcon"
                />
                Log in with Facebook
              </button>
            </div>
            <div className="or">
              <h4>
                <span className="or"> OR </span>
              </h4>
            </div>
            {error ? <div>{error}</div> : null}
						<div>
							{ url?<div>
						<img
                  className="profile_picture"
                  src={url}
                  alt="profile_picture"
                />
								</div>:null
							}
						</div>
            <form className="formSignUp" onSubmit={handleSubmit}>
              <div className="uploadImage">
                <input
                  className="uploadImageInput"
                  type="file"
                  onChange={handleUpload}
                />
              </div>
              <div className="signUpInput">
                <TextField
                  id="outlined-basic"
                  className="signUpInput"
                  label=" Email"
                  variant="outlined"
                  placeholder="Email"
                  onFocus={() => setError(false)}
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
              </div>
              <div className="signUpInput">
                <TextField
                  className="signUpInput"
                  id="outlined-basic"
                  label=" Full Name"
                  variant="outlined"
                  onFocus={() => setError(false)}
                  placeholder="Full Name"
                  value={full_name}
                  onChange={(e) => setFullName(e.currentTarget.value)}
                  required
                />
              </div>
              <div className="signUpInput">
                <TextField
                  className="signUpInput"
                  id="outlined-basic"
                  label=" Username"
                  variant="outlined"
                  onFocus={() => setError(false)}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUserName(e.currentTarget.value)}
                  required
                />
              </div>
              <div className="signUpInput">
                <TextField
                  className="signUpInput"
                  id="outlined-basic"
                  label=" Bio"
                  variant="outlined"
                  onFocus={() => setError(false)}
                  placeholder="Bio: "
                  value={bio}
                  onChange={(e) => setBio(e.currentTarget.value)}
                />
              </div>

              <div className="signUpInput">
                <TextField
                  className="signUpInput"
                  id="outlined-basic"
                  label=" Password"
                  variant="outlined"
                  onFocus={() => setError(false)}
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  autoComplete="on"
                  required
                />
              </div>
              <button
                className="signUpInput"
                type="submit"
                className="signUpButton"
              >
                Sign up
              </button>
            </form>
            <div className="agreementDiv">
              <p className="signUpAgreement">
                By signing up, you agree to our Terms, Data Policy and Cookies
                Policy .
              </p>
            </div>
          </div>
        </Paper>
        <div className="linkToLogIN">
          <Paper className="paper">
            Have an account?
            <Link to="/">
              <span> Log in</span>
            </Link>
          </Paper>
        </div>
        <div>
          <div className="getApp">
            <h4 className="getAppSignUp">Get the app.</h4>
            <div className="appDiv">
              <a
                className="link"
                href={"https://apps.apple.com/app/instagram/id389801252?vt=lo"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appleApp} alt="apple_app" className="appApple" />
              </a>

              <a
                className="link"
                href={
                  "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DC269AE6F-692C-4A6A-8705-616ACC7C83EA%26utm_content%3Dlo%26utm_medium%3Dbadge"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlePlayApp}
                  alt="googlePlayApp"
                  className="appGoogle"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
