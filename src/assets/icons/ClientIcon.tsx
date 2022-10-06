import React from "react";
import { colorsTheme } from "../../components/theme";

function ClientIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
    >
      <path fill={`${colorsTheme.primary}`} d="M0 0H56V56H0z"></path>
      <path
        fill={`${colorsTheme.primary}`}
        d="M0 0H1920V1383H0z"
        transform="translate(-1612 -37)"
      ></path>
      <path
        fill={`${colorsTheme.white}`} //background
        d="M0 0H1646V130H0z"
        transform="translate(-1338 -37)"
      ></path>
      <circle cx="28" cy="28" r="28" fill={`${colorsTheme.azul4}`}></circle>
      <path
        stroke={`${colorsTheme.primary}`}
        strokeLinecap="round"
        strokeWidth="2"
        d="M38.303 39.263c-.607-1.701-1.947-3.204-3.81-4.276-1.862-1.073-4.145-1.654-6.493-1.654-2.348 0-4.63.581-6.493 1.654-1.863 1.072-3.202 2.575-3.81 4.276"
      ></path>
      <ellipse
        cx="28"
        cy="22.667"
        stroke={`${colorsTheme.primary}`}
        strokeLinecap="round"
        strokeWidth="2"
        rx="5.333"
        ry="5.333"
      ></ellipse>
    </svg>
  );
}

export default ClientIcon;
