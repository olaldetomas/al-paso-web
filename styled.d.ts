import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      g1: string;
      g2: string;
      g3: string;
      g4: string;
      g5: string;
      g6: string;
      g7: string;
      g8: string;
      g9: string;
      g10: string;
      text: {
        primary: string;
        secondary: string;
      };
      background: {
        main: string;
      };
    };
    rounded: {
      sm: string;
    };
  }
}
