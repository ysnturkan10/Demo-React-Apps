import { useContext } from "react";
import { ThemeContext } from "../App";

export default function AboutPage() {
    const theme = useContext(ThemeContext)
  return (
    <>
    <div id="about">
      <h1 className={theme==="light" ? "light-text" : "dark-text"}>About us!</h1>
      <p className={theme==="light" ? "light-text" : "dark-text"}>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla similique consequuntur odio, eum voluptatibus officiis, numquam rem doloremque enim nisi sed quis cum explicabo suscipit. Hic in nulla temporibus nobis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum adipisci tempora perferendis excepturi optio dolorum reiciendis illum harum placeat! Labore qui delectus deleniti voluptatibus facere natus voluptates ab veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam quidem eligendi nulla minus suscipit, iusto alias recusandae maxime. Aliquid maxime numquam doloribus! Obcaecati amet inventore doloribus ad dolorem molestias?
      </p>
      </div>
    </>
  );
}
