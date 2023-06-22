import styled from "styled-components/macro";
import CallMadeIcon from "@mui/icons-material/CallMade";

export default function Main() {
  return (
    <Container>
      <Left>
        <h1>First In The Family</h1>
        <p className="para">
          They are the global citizens of tomorrow. Start your study abroad
          journey today.
        </p>
        <p className="icon-text-logo">
          <CallMadeIcon />
          &nbsp; Live on &nbsp;
          <img src="/disney_logo.png" />
        </p>
        <div className="buttons">
          <button className="blue">Get Your Shortlist for FREE</button>
          <button className="white">Talk to an Expert</button>
        </div>
        <div className="paras">
          <span>95% of students get an admit in less than 4 weeks</span>
          <span>
            Our students finished university to work at global offices of:
          </span>
        </div>
        <div className="imgs">
          <img src="" alt="google_logo" />
          <img src="" alt="barclays_logo" />
          <img src="" alt="ey_logo" />
          <img src="" alt="amazon_logo" />
          <img src="" alt="accenture_logo" />
        </div>
      </Left>
      <Right>
        <img src="./main_img.png" />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 85vh;
  /* border: 1px solid white; */
  color: white;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    height: min-content;
    gap: 30px;
  }
`;
const Left = styled.div`
  flex: 0.3;

  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    padding: 15px 0 20px;
  }

  p.para {
    font-size: 2.7rem;
  }

  p.icon-text-logo {
    margin: 20px 0;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    img {
      width: 10%;
      border-radius: 10px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    button {
      padding: 15px 20px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-size: 1.7rem;
      margin-bottom: 15px;
      font-weight: bold;
      width: 100%;
    }

    button.blue {
      color: white;
      background: rgb(24, 11, 149);
      background: linear-gradient(
        90deg,
        rgba(24, 11, 149, 1) 0%,
        rgba(9, 9, 121, 1) 16%,
        rgba(0, 168, 255, 1) 100%
      );
    }

    button.white {
      background-color: white;
      color: blue;
    }
  }

  div.paras {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;

    span {
      font-size: 1.5rem;
    }
  }

  div.imgs {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 680px) {
    flex: 1;

    .buttons > button {
      width: 350px;
    }
  }
`;
const Right = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
  padding-left: 40px;

  /* justify-content: flex-end; */

  img {
    flex: 0.85;
  }

  @media screen and (max-width: 680px) {
    padding-left: 0;

    img {
      width: 100%;
    }
  }
`;
