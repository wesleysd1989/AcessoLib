import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
    colors: {
      primary: string;
      secondary: string;
      disabled: string;
      inactive: string;
      text: string;
      textAlternative: string;
      textWhite: string;
      error: string;
      warning: string;
      success: string;
      shadow: string;
      background: string;
      backgroundAlternative: string;
      lemon: string;
      linkEnabler: string;
      orange: string;
    };
    button: {
      primary: {
        color: string;
        textColor: string;
        hoverColor: string;
      };
      secondary: {
        color: string;
        textColor: string;
        hoverColor: string;
      };
      action: {
        color: string;
        iconColor: string;
        textColor: string;
        hoverColor: string;
      };
      link: {
        color: string;
        iconColor: string;
        textColor: string;
        hoverColor: string;
      };
    };
    input: {
      lineColor: string;
      placeHolderColor: string;
      actionColor: string;
    };
    switch: {
      circleOn: string;
      circleOff: string;
      enabled: string;
      disabled: string;
    };
    modal: {
      background: string;
    };
    feedItem: {
      hover: string;
    };
    screens: {
      main: {
        background: string;
        header: {
          background: string;
        };
        flotableMenu: {
          background: string;
        };
      };
    };
    notification: {
      primary: {
        background: string;
        textColor: string;
      };
      secondary: {
        background: string;
        textColor: string;
      };
    };
    tooltip: {
      background: string;
      textColor: string;
    };
    cardOption: {
      borderColor: string;
      labelColor: string;
    };
  }
}
