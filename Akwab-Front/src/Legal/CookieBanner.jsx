import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#1a1a2e",
      color: "white",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
      zIndex: 9999,
    }}>
      <p style={{ margin: 0, fontSize: "14px" }}>
        Ce site utilise des cookies techniques nécessaires à votre connexion.
        Consultez notre{" "}
        <Link to="/mentions-legales" style={{ color: "#F59A1E", textDecoration: "underline" }}>
          politique de confidentialité
        </Link>.
      </p>
      <button
        onClick={handleAccept}
        style={{
          backgroundColor: "#F59A1E",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "8px 20px",
          fontWeight: "bold",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        J'ai compris
      </button>
    </div>
  );
}

export default CookieBanner;