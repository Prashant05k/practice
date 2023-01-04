import { useState } from "react";
import GetUserData from "./GetUserData";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.includes("@") && email.includes(".com")) {
      if (password.length >= 7 && password.length <= 10) {
        console.log(email, password);
        setIsLogin(true);
      } else {
        throw "invalid Password";
      }
    } else {
      throw "invalid Email";
    }
  };

  const handlePass = (e) => {
    const data = e.target.value;
    setPassword(data);
  };

  const handleEmail = (e) => {
    const data = e.target.value;
    setEmail(data);
  };

  return (
    <>
      <form>
        <div>
          <label>Email: </label>
          <input type="text" onChange={handleEmail} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={handlePass} />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      {
        isLogin && <GetUserData/>
      }
    </>
  );
}

export default FormValidation;
