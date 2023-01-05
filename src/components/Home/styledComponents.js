import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 90vh;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const HomeMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const HomeContainer = styled.div`
  height: 100%;
  overflow-x: auto;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const GetPremium = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
`

export const BannerLogo = styled.img`
  width: 140px;
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 20px;
`

export const GetItButton = styled.button`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  width: 100px;
  height: 40px;
  font-weight: 700;
  font-family: Roboto;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
`
export const InputSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #7e858e;
  height: 40px;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ffffff'} !important;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInput = styled.input`
  width: 80%;
  border: none;
  color: #7e858e;
  font-size: 16px;
  padding-left: 10px;
  outline: none;
  background: transparent;
`

export const SearchButton = styled.button`
  width: 20%;
  height: 100%;
  padding-top: 5px;
  border: none;
  border-left: 1px solid #7e858e;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  cursor: pointer;
`
export const VideosList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
`

export const LoaderContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px;
`

export const FailureImg = styled.img`
  width: 60%;
  padding-top: 15px;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
`

export const NoVideosContainer = styled(FailureContainer)``

export const NoVideosImg = styled(FailureImg)``
