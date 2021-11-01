import "styled-components";

declare module "styles-componets" {
  export interface DefaultTheme extends Component {
    title: string;

    colors: {
      primary: string;
      background: string;
      text: string;
    };
  }
}
