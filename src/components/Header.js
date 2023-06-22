import styled from "styled-components/macro";
import SearchIcon from "@mui/icons-material/Search";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Header() {
  const header_info = [
    "Study Abroad",
    "Accommodation",
    "Test Prep",
    "Finance",
    "Community",
    "Products",
    "More",
  ];

  return (
    <Container>
      <Left>
        <img src="leverage-logo.svg" alt="main-lgoo" />
      </Left>
      <Right>
        <DivLeft>
          {header_info.map((curr) => (
            <span>{curr}</span>
          ))}
        </DivLeft>
        <DivRight>
          <SearchIcon />
          <PhoneEnabledIcon />
          <AccountBoxIcon />
        </DivRight>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 0.3;
  img {
    width: 30%;
    height: 30%;
  }

  @media screen and (max-width: 680px) {
    img {
      width: 100%;
      height: 100%;
    }
    margin-left: 10px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex: 0.7;
`;

const DivLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.9;
  width: 100%;

  span {
    font-size: 1.7rem;
    cursor: pointer;
    font-weight: 400;
  }

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const DivRight = styled.div`
  flex: 0.25;
  /* justify-content: flex-end; */
  padding-right: 5vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  .MuiSvgIcon-root {
    font-size: 3rem;
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
  }

  @media screen and (max-width: 680px) {
    flex: 1;
    padding-right: 10px;
    justify-content: right;

    .MuiSvgIcon-root {
      margin: 0 10px;
    }
  }
`;
