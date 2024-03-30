import HomePageHero from "@/components/HomePage/HomePageHero";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageMyServices from "@/components/HomePage/HomePageMyServices";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const link = css`
  font-size: 2rem;
  font-weight: bold;
  background-color: ${colors.yellow};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`;
const icon = css`
  font-size: 2.5rem;
`;

const infoContainer = css`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-family: "confiteria_scriptbold";
  color: #adadad;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`;
const HomePage: NextPage = () => {
  return (
    <PageContainer dark={false}>
      <PageMeta title="June - Duyen Nguyen" description={"Duyen Nguyen"} />
      <Header dark={false} />
      <HomePageHero />
      <div css={infoContainer}>
        <div>june nguyen</div>
        <div>Design is problem solving</div>
        <div>Product designer</div>
      </div>
      <HomePageMyServices />

      <Link href={routeLinks.projects()} css={link}>
        See how I untied the knots <ArrowForwardIcon css={icon} />
      </Link>

      <Footer />
    </PageContainer>
  );
};

export default HomePage;
