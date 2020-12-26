import BG from "../assets/cover5.jpeg";
export default function Cover() {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: window.innerHeight,
        width: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "white" }}>SPACE X</h1>
        SpaceX designs, manufactures and launches advanced rockets and
        spacecraft. The company was founded in 2002 to revolutionize space
        technology, with the ultimate goal of enabling people to live on other
        planets.
      </div>
    </div>
  );
}
