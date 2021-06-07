import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [name in "primary" | "secondary" | "white" | "black"];
    };
    breakpoints: {
      [name in "xs" | "sm" | "md" | "lg" | "xl" | "xxs"];
    };
    maxContainer?: {
      [name in "xs" | "sm" | "md" | "lg" | "xl"]?;
    };
    images?: {
      virtualPlatorm: string;
    };
  }
}
