import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [signUpLogin, setSignUpLogin] = useState(false);

  if (signUpLogin) {
    return (
      <div className="login-signup">
        <h1>Inregistreaza-te</h1>
        <form action="">
          <input placeholder="Nume" type="text" id="name" name="name" />
          <input
            placeholder="Prenume"
            type="text"
            id="prenume"
            name="prenume"
          />
          <input placeholder="Email" type="email" id="email" name="email" />
          <input
            placeholder="Parola"
            type="password"
            id="password"
            name="password"
          />
          <input
            placeholder="Confirma Parola"
            type="password"
            id="confirm"
            name="confirm"
          />
          <button type="">Inregistreaza-te</button>
        </form>
        <p>
          Sunteti deja inregistrat?{" "}
          <span onClick={() => setSignUpLogin(!signUpLogin)}>Logati-va</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="login-signup">
        <h1>Logheaza-te</h1>
        <form action="">
          <input placeholder="Email" type="email" id="email" name="email" />
          <input
            placeholder="Parola"
            type="password"
            id="password"
            name="password"
          />
          <button type="">Logheaza-te</button>
        </form>
        <p>
          Nu sunteti inregistrat?{" "}
          <span onClick={() => setSignUpLogin(!signUpLogin)}>
            Inregistreaza-te
          </span>
        </p>
      </div>
    );
  }
};

export default LoginSignup;
