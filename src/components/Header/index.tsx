import React from 'react';

import { 
    Container,
    LeftSide,
    YoutubeLogo,
    RightSide,
    SearchIcon,
    CreateIcon,
    UserIcon,
} from './styles';

const Header: React.FC = () => {
  return (
      <Container>
        <LeftSide>
            {/* <SelectionIcon /> */}
            <YoutubeLogo />
            <h2>Youtube</h2>
        </LeftSide>
        
        {/* <SearchButtonIcon /> */}
        {/* <KeyboardIcon /> */}

        <RightSide>
            <SearchIcon />
            
            <CreateIcon />
            {/* <AppsIcon /> */}
            {/* <ConfigIcon /> */}
            <UserIcon />
        </RightSide>
      </Container>
  );
}

export default Header;