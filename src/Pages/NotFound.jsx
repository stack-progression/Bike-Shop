import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>404 Nu a Fost Gasit</h1>
      <button
        style={{ width: "280px", height: "40px", fontSize: "24px", cursor: "pointer", backgroundColor: "#000000", color: "#fff", border: "none", borderRadius: "4px" }}
        onClick={() => navigate("/")}
      >
        Inapoi
      </button>
    </div>
  );
};

export default NotFound;
