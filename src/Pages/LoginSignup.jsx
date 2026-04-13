import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [signUpLogin, setSignUpLogin] = useState(false);
  const [name, setName] = useState("");
  // console.log(name);
  const [prenume, setPrenume] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");

  // window.addEventListener("submit", (event) => {
  //   event.preventDefault();
  // });
  const handleSubmitIn = () => {
    if (
      prenume.length <= 2 &&
      name.length <= 3 &&
      email.includes("@") &&
      password.length <= 10 &&
      confirm.length <= 10
    ) {
      alert("Completati toate campurile");
    } else {
      setConfirm("");
      setPassword("");
      setEmail("");
      setName("");
      setPrenume("");
    }
    if (
      prenume.length === 0 &&
      name.length === 0 &&
      email.length === 0 &&
      password.length === 0 &&
      confirm.length === 0
    ) {
      alert("Completati toate campurile");
    }
    if (
      password === 1234 ||
      password === 4321 ||
      password === 1111 ||
      password.length <= 10
    ) {
      alert("Parola prea scurta");
    }
    if (password !== confirm) {
      alert("Parolele nu sunt identice");
    }
    if (!email.includes("@")) {
      alert("Adresa de email trebuie sa contina @");
    }
  };
  const handleSubmitUp = () => {
    if (inPassword.length < 10) {
      alert("Parola este prea scurtă");
      return;
    }
    if (!inEmail.includes("@")) {
      alert("Emailul trebuie să conțină @");
      return;
    }
    setInEmail("");
    setInPassword("");
    alert("Autentificare reușită!");
  };

  if (signUpLogin) {
    return (
      <div className="login-signup">
        <h1>Înregistrează-te</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitUp();
          }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nume"
            type="text"
            id="name"
            name="name"
          />
          <input
            value={prenume}
            onChange={(e) => setPrenume(e.target.value)}
            placeholder="Prenume"
            type="text"
            id="prenume"
            name="prenume"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parola"
            type="password"
            id="password"
            name="password"
          />
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirmă Parola"
            type="password"
            id="confirm"
            name="confirm"
          />
          <button
            type="submit"
            onClick={() => {
              handleSubmitIn();
            }}
          >
            Înregistreăza-te
          </button>
        </form>
        <p>
          Sunteți deja înregistrat?{" "}
          <span onClick={() => setSignUpLogin(!signUpLogin)}>Logați-vă</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="login-signup">
        <h1>Loghează-te</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitUp();
          }}
        >
          <input
            value={inEmail}
            onChange={(e) => setInEmail(e.target.value)}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
          />
          <input
            value={inPassword}
            onChange={(e) => setInPassword(e.target.value)}
            placeholder="Parola"
            type="password"
            id="password"
            name="password"
          />
          <button type="submit">Loghează-te</button>
        </form>
        <p>
          Nu sunteți înregistrat?{" "}
          <span onClick={() => setSignUpLogin(!signUpLogin)}>
            Înregistrează-te
          </span>
        </p>
      </div>
    );
  }
};

export default LoginSignup;
