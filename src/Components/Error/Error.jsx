import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "280px",
        height: "40px",
        fontSize: "24px",
        cursor: "pointer",
        backgroundColor: "#000000",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
      }}
    >
      <h1>Eroare</h1>
      <p>A apărut o eroare. Vă rugăm să încercați din nou.</p>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Acasa</button>
    </div>
  );
};

export default Error;
