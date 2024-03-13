import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <h1 className="footerTitle">Contact us!</h1>
        <div className="infos">
          {" "}
          <ul className="informations">
            <li>Phone : +902578575667</li>
            <li>Email : corporation@gmail.com</li>
            <li>Instagram : Corporationn</li>
          </ul>
          <div className="location">
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Turkiye
            </p>{" "}
          </div>
        </div>
      </footer>
    </>
  );
}
