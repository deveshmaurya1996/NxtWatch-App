import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: 100%;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 33%;
    height: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  margin: 0px;
  font-weight: 600;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
`
export const VideoTextContainer = styled.div`
  margin-left: 5px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsText = styled.p`
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  color: #475569;
  padding: 0px;
  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
`
