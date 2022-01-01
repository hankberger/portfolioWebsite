import {Link} from "react-router-dom";

const html = document.documentElement;
const canvas = document.querySelector(".background-image");
const context = canvas.getContext("2d");

const currentFrame = index => (
  ''
)

export default function App() {
  return (
    <html lang = "en">
      <div>
        <canvas class = "background-image"></canvas>
        <h1>Bookkeeper!</h1>
        <nav
          style={{
            borderBottom: "soild 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to= "/contact">Contact</Link> |{" "}
          <Link to="/gallery">Gallery</Link>
        </nav>
      </div>
    </html>
  );
}
