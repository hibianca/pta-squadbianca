import React from 'react';
import SideBar from '../SideBar';
import Navbar from '../NavBar';
import { TemplateContainer, ContentWrapper, ContentContainer } from './style';

interface SidebarTemplateProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
}

const SidebarTemplate: React.FC<SidebarTemplateProps> = ({ children, title, showBackButton = false }) => {
  return (
    <TemplateContainer>
      <SideBar />
      <ContentWrapper>
        <Navbar title={title} showBackButton={showBackButton} />
        <ContentContainer>
          {children}
        </ContentContainer>
      </ContentWrapper>
    </TemplateContainer>
  );
};

export default SidebarTemplate;
