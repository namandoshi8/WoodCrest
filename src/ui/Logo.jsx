import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 80;
  width: 80;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/woodcrest5.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
