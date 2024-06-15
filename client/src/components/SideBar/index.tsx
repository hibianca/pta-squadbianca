import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  SideBarContainer,
  LogoContainer,
  Button,
  PartOne,
  PartTwo,
  FooterText,
} from "./style";
import { IconButtonExplorarPartidas, IconButtonPerfil, LogoCITi } from "assets";

const SideBar: React.FC = () => {
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <SideBarContainer>
      <LogoContainer>
        <img src={LogoCITi.src} style={{ width: "111.75px", height: "auto" }} />
        <PartTwo>
          <Link href="/ExploreMatches" passHref>
            <Button className={isActive("/ExploreMatches") ? "active" : ""}>
              <PartOne>
                <img
                  src={IconButtonExplorarPartidas.src}
                  style={{ width: "32px", height: "auto" }}
                />
                Explorar partidas
              </PartOne>
            </Button>
          </Link>
          <Link href="/Profile" passHref>
            <Button className={isActive("/Profile") ? "active" : ""}>
              <PartOne>
                <img
                  src={IconButtonPerfil.src}
                  style={{ width: "32px", height: "auto" }}
                />
                Profile
              </PartOne>
            </Button>
          </Link>
          <FooterText>
            <p>
              made with <strong>&hearts;</strong> and{" "}
              <span style={{ fontFamily: "Barlow" }}>{"</>"}</span> by{" "}
            </p>
            <img src={LogoCITi.src} style={{ width: "42px", height: "auto" }} />
          </FooterText>
        </PartTwo>
      </LogoContainer>
    </SideBarContainer>
  );
};

export default SideBar;
