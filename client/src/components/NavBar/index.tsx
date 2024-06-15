import React from 'react';
import { useRouter } from 'next/router';
import { NavbarContainer, BackButton, Title } from './style';
import { FaArrowLeft } from 'react-icons/fa';

interface NavbarProps {
  title: string;
  showBackButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ title, showBackButton = false }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <NavbarContainer>
      {showBackButton && (
        <BackButton onClick={handleBackClick}>
          <FaArrowLeft size={20} />
        </BackButton>
      )}
      <Title>{title}</Title>
    </NavbarContainer>
  );
};

export default Navbar;
