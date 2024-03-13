import { useContext } from "react";
import HomeImg from "../assets/business.jpg";
import Footer from "../components/Footer";
import { ThemeContext } from "../App";

export default function HomePage() {
  const theme = useContext(ThemeContext)
  return (
    <>
      <div className="container">
        <div className="homeimg">
          <img src={HomeImg} alt="A woman who is dealing with laptop." />{" "}
        </div>
        <div className="homeimgtitle">
          <p className={theme==="light" ? "light-text" : "dark-text"}>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Reprehenderit voluptate quasi fuga? Corrupti, itaque deserunt.{" "}
            <br />
            Quisquam consectetur at ea mollitia voluptates. Delectus possimus{" "}
            <br />
            aut cumque expedita vitae fugit molestias nam."
          </p>{" "}
        </div>
      </div>
      <Footer/>
    </>
  );
}
