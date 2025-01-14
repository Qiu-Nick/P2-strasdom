import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./footer.css";

function Footer() {
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === "!admin") {
      navigate("/backoffice"); // Use navigate to go to BackOffice
    } else {
      alert("La suite au prochain épisode..");
    }
    setShowPasswordDialog(false);
    setPassword("");
  };

  const navigateToBackOffice = () => {
    setShowPasswordDialog(true);
  };

  const handleAboutUsClick = () => {
    navigate("/about"); // Naviguer vers la route racine où le composant App est rendu
  };

  const handlegalsClick = () => {
    navigate("/legals"); // Naviguer vers la route racine où le composant App est rendu
  };

  return (
    <div className="footer-container">
      {showPasswordDialog && (
        <div className="password-dialog">
          <div className="password-dialog-content">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Please enter the password"
            />
            <button type="button" onClick={handlePasswordSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      <button type="button" id="button" onClick={navigateToBackOffice}>
        Go to BackOffice
      </button>
      <button type="button" id="button" onClick={handleAboutUsClick}>
        About Us
      </button>
      <button type="button" id="button" onClick={handlegalsClick}>
        Mentions Légales
      </button>
    </div>
  );
}

export default Footer;
