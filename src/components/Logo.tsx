import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import routeLinks from "@/routeLinks";
import { AppContext } from "@/context/AppContext";
import logoIcon from "@/assets/img/icon-layout.png";

const logo = css`
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  height: 40px;
  width:40px;
`;

const Logo: FC = () => {
  return (
    <Link href={routeLinks.homePage()}>
      <img src={logoIcon.src} css={logo} alt="June" />
    </Link>
  );
};

export default Logo;
