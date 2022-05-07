import React, { useContext } from "react";
import Navigator from "../Navigation";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import logo from "../../../public/assets/images/black2.png";
interface IProps {
  toggleTheme(): void;
}
function Header({ toggleTheme }: IProps) {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <img src={logo} style={{ width: 125 }} />
      <Navigator
        listItem={[
          { title: "Lançamentos" },
          { title: "Generos" },
          { title: "Populares" },
        ]}
      />
      <Switch
        onChange={() => toggleTheme()}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={theme.colors.secundary}
        onColor={theme.colors.primary}
      />
    </Container>
  );
}

export default Header;
