import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  MainContainer,
  ContentWrapper,
  ContentInnerBox,
} from './MainLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import useAuth from 'hooks/useAuth';
import { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const MainLayout = () => {
  const { isLoggedIn } = useAuth();
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  function addScrollLock() {
    document.body.classList.add('add-scroll-lock');
  }

  function removeScrollLock() {
    document.body.classList.remove('add-scroll-lock');
  }

  function openSideBar() {
    setIsSideBarOpened(true);
    addScrollLock();
  }

  const closeSideBar = useCallback(() => {
    setIsSideBarOpened(false);
    removeScrollLock();
  }, []);

  useEffect(() => {
    if (isDesktop) {
      closeSideBar();
    }
  }, [isDesktop, closeSideBar]);

  return (
    <>
      {isLoggedIn && (
        <MainContainer>
          <SideBar
            isSideBarOpened={isSideBarOpened}
            closeSideBar={closeSideBar}
          />
          <ContentWrapper>
            <ContentInnerBox>
              <Header
                isSideBarOpened={isSideBarOpened}
                openSideBar={openSideBar}
              />
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ContentInnerBox>
          </ContentWrapper>
        </MainContainer>
      )}
    </>
  );
};

export default MainLayout;
