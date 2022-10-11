import React, { useState } from 'react';
import Navigation from '../Navigation';
import Header from '../Header';
import { Body, ContainerStyle } from './styled';
import { useAuth } from '../../lib/api-hooks';
import { useRouter } from 'next/router';

const Layout = ({ children, headerTitle }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data, isLoading } = useAuth();

  if (!isLoading && !data) {
    router.push('/login');
  }

  return (
    <ContainerStyle>
      {!isLoading && data && (
        <>
          <Navigation openMobileMenu={open} />
          <Body>
            <Header
              title={headerTitle}
              onClickBurgerButton={() => setOpen(!open)}
              openMobileMenu={open}
            />
            {children}
          </Body>
        </>
      )}
    </ContainerStyle>
  );
};

export default Layout;
