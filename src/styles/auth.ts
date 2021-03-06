import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: strech;
  height: 100vh;

  aside {
    flex: 7;
    background: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      min-height: 250px;
      max-width: 320px;
      height: 100%;
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-theme {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: strech;
    text-align: center;
    > div {
      align-self: center;
    }
    > img {
      align-self: center;
    }
    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: "Poppins", sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: ${(props) => props.theme.colors.background};
        border: 1px solid ${(props) => props.theme.colors.text};
        color: ${(props) => props.theme.colors.text};
      }

      input::placeholder {
        color: ${(props) => props.theme.colors.text};
      }

      button {
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: #737388;
      margin-top: 16px;

      a {
        color: #e559d9;
      }
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  }

  @media (max-height: 650px) {
    aside {
      padding: 120px 80px;
      strong {
        font-size: 28px;
      }
      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 850px) {
    aside {
      padding: 120px 40px;
      strong {
        font-size: 28px;
      }
      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: strech;
    height: 100%;

    aside {
      flex: 7;
      background: #835afd;
      color: #fff;

      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 40px 40px 80px;

      img {
        max-width: 320px;
        max-height: 320px;
      }

      strong {
        font: 700 26px "Poppins", sans-serif;
        line-height: 42px;
        margin-top: 16px;
      }

      p {
        font-size: 20px;
        line-height: 32px;
        margin-top: 16px;
        color: #f8f8f8;
      }
    }

    main {
      flex: 8;

      padding: 120px 28px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-theme {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: strech;
      text-align: center;

      > img {
        align-self: center;
      }
      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: "Poppins", sans-serif;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: #fff;
          border: 1px solid #a8a8b3;
        }

        button {
          margin-top: 16px;
        }

        button,
        input {
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        color: #737388;
        margin-top: 16px;

        a {
          color: #e559d9;
        }
      }
    }

    .create-room {
      margin-top: 64px;
      height: 60px;
      border-radius: 8px;
      font-weight: 500;
      background: #ea4335;
      color: #fff;
      font-size: 12px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      img {
        max-width: 20px;
        margin-right: 5px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .separator {
      font-size: 14px;
      color: #a8a8b3;

      margin: 32px 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-right: 16px;
      }

      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: #a8a8b3;
        margin-left: 16px;
      }
    }
  }

  @media (max-width: 300px) {
    aside {
      padding: 80px 40px 80px;

      strong {
        font-size: 18px;
        line-height: 22px;
      }

      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;
