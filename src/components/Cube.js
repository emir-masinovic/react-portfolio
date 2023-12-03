import "../css/cube.css";

export default function Cube({ text, buttonLink }) {
  return (
    <>
      <div className="cube">
        <div className="top" />
        <div className="right" />
        <div className="bottom" />
        <div className="left" />
        <div className="front" />
        <div className="back" />
      </div>
    </>
  );
}
