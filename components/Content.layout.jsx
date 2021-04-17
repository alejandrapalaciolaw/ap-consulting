import styled from "styled-components";
import { color, space, layout } from "styled-system";
import Typography from "@material-ui/core/Typography";

import style from "../styles/Content.module.css";

const BoxComponent = styled.div`
  ${space}
  ${layout}
  ${color}
`;

const Box = ({ children, title }) => {
  return (
    <div className={style.container}>
      <div className={style.aside}>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={style.children_container}>{children}</div>
    </div>
  );
};

export default Box;
