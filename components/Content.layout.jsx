import style from "../styles/Content.module.css";

const Box = ({ children, title }) => {
  return (
    <div
      className={style.container}
      style={{ minHeight: "100vh", height: "auto" }}
    >
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
