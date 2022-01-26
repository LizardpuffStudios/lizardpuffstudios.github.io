import React, { useState } from "react";

interface Props {
  color?: string;
  image?: string;
  hoverImage?: string;
  link: string;
}

const CircularButton: React.FC<Props> = ({
  color,
  image,
  hoverImage,
  link
}) => {
  const [img, setImg] = useState(image)

  return (
    <button
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "white",
        borderRadius: "50%",
        cursor: "pointer",
        margin: "10px",
        height: "60px",
        width: "60px",
      }}
      className="mouse"
      onMouseEnter={() => setImg(hoverImage)}
      onMouseLeave={() => setImg(image)}
    >
      <img src={img} alt="" height="50px" />
    </button>
  );
}

export default CircularButton;
