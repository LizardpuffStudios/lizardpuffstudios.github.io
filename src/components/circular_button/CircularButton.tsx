import React, { useState } from "react";

interface Props {
  image: string;
  hoverImage?: string;
  link: string;
}

const CircularButton: React.FC<Props> = ({
  image,
  hoverImage,
  link
}) => {
  const [isMouseHover, setIsMouseHover] = useState(false);

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
      onMouseEnter={() => { if ((hoverImage !== undefined)) setIsMouseHover(true) }}
      onMouseLeave={() => { if ((hoverImage !== undefined)) setIsMouseHover(false) }}
    >
      <img src={isMouseHover ? hoverImage : image} alt="" height="50px" width="50px" />
    </button>
  );
}

export default CircularButton;
