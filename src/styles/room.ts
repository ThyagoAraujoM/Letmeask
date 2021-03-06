import styled from "styled-components";

export const Div = styled.div`
header {
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-switch{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
      }
    }
  }
}
main {
  max-width: 800px;
  margin: 0 auto;

  .room-title {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      color: ${(props) => props.theme.colors.text};
    }

    span {
      margin-left: 16px;
      background: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
    }
  }
  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #f9f9f9;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
      color: #29292e;
    }
    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #f9f9f9;  
        }
        span {
          margin-left: 8px;
          color: #29292e;
          font-weight: 500;
          font-size: 14px;
        }
      }

      > span {
        font-size: 14px;
        color: #737380;
        font-weight: 500;
        button {
          background: transparent;
          border: 0;
          color: #835afd;
          text-decoration: underline;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }

  .question-list {
    margin-top: 32px;
  }
}
}

@media (max-width: 800px) {

  main {
    padding: 0 20px;
  }
}

@media (max-width: 580px) {
  header {
    .content {
      flex-direction: column;
      gap: 15px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  main {
    padding: 0 20px;
    .room-title {
      flex-direction: column;
      gap: 10px;
      h1 {
        font-size: 18px;
      }
    }
  }
`;
