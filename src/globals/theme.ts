import { DefaultTheme } from "styled-components";

const landingTheme: DefaultTheme = {
  colors: {
    primary: "#0A192F",
    secondary: "#80A0FC",
    white: "#FFFFFF",
    black: "#151515",
    // #CEDAFD
  },

  breakpoints: {
    xxs: "0",
    xs: "599",
    sm: "959",
    md: "1279",
    lg: "1919",
    xl: "5000",
  },
  maxContainer: {
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
  },
  images: {
    virtualPlatorm: "/images/virtual_plataform_image.png",
  },
};
export { landingTheme };
