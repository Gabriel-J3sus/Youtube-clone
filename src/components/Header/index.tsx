import React from 'react';

import { 
    Container,
    SelectionIcon,
    YoutubeLogo,
    InputContainer,
    Input,
    KeyboardIcon,
    SearchIcon,
    CreateIcon,
    AppsIcon,
    ConfigIcon,
    UserIcon,
} from './styles';

const Header: React.FC = () => {
  return (
      <Container>
        <div className="left-side">
          <button>
            <SelectionIcon />
          </button>
            <YoutubeLogo />
            <h2>Youtube</h2>
        </div>
        
        <div className="center">
          <InputContainer>
            <Input placeholder="Pesquisar" />
            <KeyboardIcon />
          </InputContainer>
            
          <button>
            <SearchIcon />    
          </button>
        </div>
        
        <div className="right-side">
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
        </div>
      </Container>
  );
}

export default Header;