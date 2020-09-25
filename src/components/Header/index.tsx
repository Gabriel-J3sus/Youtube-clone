import React from 'react';

import { 
    Container,
    LeftSide,
    SelectionIcon,
    YoutubeLogo,
    Center,
    InputContainer,
    Input,
    KeyboardIcon,
    Button,
    SearchIcon,
    RightSide,
    CreateIcon,
    AppsIcon,
    ConfigIcon,
    UserIcon,
} from './styles';

const Header: React.FC = () => {
  return (
      <Container>
        <LeftSide>
          <button>
            <SelectionIcon />
          </button>
            <YoutubeLogo />
            <h2>Youtube</h2>
        </LeftSide>
        
        <Center>
          <InputContainer>
            <Input placeholder="Pesquisar" />
            <KeyboardIcon />
          </InputContainer>
            
          <Button>
            
            <SearchIcon />
            
          </Button>
        </Center>
        
        <RightSide>
          <button>
            <CreateIcon />
          </button>
          <button>
            <AppsIcon />
          </button>
          <button>
            <ConfigIcon />
          </button>  
          <button>
            <UserIcon />
            <span> fazer login </span>
          </button>
        </RightSide>
      </Container>
  );
}

export default Header;