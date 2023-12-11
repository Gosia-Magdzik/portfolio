import React, { useState, useEffect } from 'react';
import {
    PaddingContainer,
    Container,
    FlexContainer,
    BlueText,
} from '../styles/Global.styled';
import { NavbarContainer,
        Logo,
        MenuIcon,
} from '../styles/Navbar.styled';
import { NavMenu } from './layouts/NavMenu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme'

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        }

        window.addEventListener('scroll', onScroll)
        //clean up
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

  return (
    <NavbarContainer 
        bgColor={ sticky ? theme.colors.primary : 'transparent' }
    >
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                responsiveLeft="1rem"
                responsiveRight="1rem"
            >
                <Container>
                    <FlexContainer 
                        justify="space-between" 
                        responsiveFlex
                    >     
                        <Logo>Code<BlueText>Craft</BlueText></Logo>
                        <MenuIcon
                            onClick={() => { setOpenMenu(true) }}
                        >
                            <GiHamburgerMenu/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>

                {openMenu && <NavMenu setOpenMenu={ setOpenMenu }/>}
            </PaddingContainer>
    </NavbarContainer>
  )
}

