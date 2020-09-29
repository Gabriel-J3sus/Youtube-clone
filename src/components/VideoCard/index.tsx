import React from 'react';

import { Container, Wrapper, VideoImage, VideoData, Avatar, CheckIcon } from './styles';

const VideoCard: React.FC = () => {
  return (
      <Container>
        <Wrapper>

          <VideoImage />
          
          <VideoData>
            
            <div>
              <Avatar />
              <span> Titulo do video </span>
            </div>

            <p> 
              Canal
              <CheckIcon />
            </p>
            <span> 30 mil visualizações <span>•</span> </span>
            <span> há 2 horas</span>

          </VideoData>

        </Wrapper>

      </Container>
  );
}

export default VideoCard;