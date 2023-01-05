import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px 30px 30px 30px;

  @media screen and (min-width: 768px) {
    width: 25%;
    flex-direction: row;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 190px;
`

export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const ChannelLogo = styled.img`
  width: 40px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const VideoTextContainer = styled.div`
  margin-top: 10px;
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

  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
`
