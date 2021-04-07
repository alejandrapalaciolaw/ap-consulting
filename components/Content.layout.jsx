import styled from "styled-components";
import { color, space, layout } from "styled-system";
import Typography from "@material-ui/core/Typography";

const BoxComponent = styled.div`
  ${space}
  ${layout}
  ${color}
`;

const Box = ({ children, title }) => {
  return (
    <BoxComponent
      width="100%"
      height="100vh"
      color="secondary"
      bg={["main"]}
      position="relative"
      display="flex"
    >
      <BoxComponent
        position="absolute"
        bg="darkMain"
        width={["50px", "100px", "150px", "15%"]}
        height="100vh"
        pt="80vh"
        pl="130px"
      >
        <Typography variant="h3" fontFamily="Helvetica" fontSize={2}>
          {title}
        </Typography>
      </BoxComponent>
      <BoxComponent
        width={1}
        p="large"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
      >
        {children}
      </BoxComponent>
    </BoxComponent>
  );
};

export default Box;
