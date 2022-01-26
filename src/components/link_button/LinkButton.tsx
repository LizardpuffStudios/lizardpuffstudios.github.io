import { Grid } from "@mui/material";
import React from "react";
import './LinkButton.css'

interface Props {
  children?: React.ReactNode;
  color?: string;
  image?: string;
  link: string;
}

const LinkButton: React.FC<Props> = ({
  children,
  color,
  image,
  link
}) => {
  return (
    <button
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "white",
        cursor: "pointer",
        margin: "10px",
        height: "40px",
        width: "300px",
      }}
      className="click"
    >
      <div className="LinkButton-text">
        <Grid container
          direction="row"
        >
          <Grid item xs={2} />
          <Grid item xs={2}>
            <img src={image} alt="" height="20px" />
          </Grid>
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </div>
    </button>
  );
}

export default LinkButton;
