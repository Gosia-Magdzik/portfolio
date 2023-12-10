import React from 'react';

import {
    PaddingContainer,
    FlexContainer,
} from '../../styles/Global.styled';
import { NavMenuContainer,
        MenuIcon,
        MenuItem,
} from '../../styles/Navbar.styled';

import { AiOutlineClose } from 'react-icons/ai'

export const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer>
        <PaddingContainer left="5%" right="5%" top="2rem">
            <FlexContainer justify="flex-end">
                <MenuIcon
                    onClick = {() => setOpenMenu(false)}
                >
                    <AiOutlineClose/>
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        <PaddingContainer top="8%">
            <FlexContainer
                direction="column"
                align="center"
            >
                <MenuItem 
                    href="#Home"
                    onClick={() => setOpenMenu(false) }
                >
                    Home
                </MenuItem>

                <MenuItem 
                    href="#Skills"
                    onClick={() => setOpenMenu(false) }
                >
                    My Skills
                </MenuItem>

                <MenuItem 
                    href="#Projects"
                    onClick={() => setOpenMenu(false) }
                >
                    My Projects
                </MenuItem>

                <MenuItem 
                    href="#Contact"
                    onClick={() => setOpenMenu(false) }
                >
                    Contact
                </MenuItem>
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

