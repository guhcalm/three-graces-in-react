import styled from "styled-components"

export default styled.section`
  min-height: 80vh;
  width: 100vw;
  background-color: var(--gray);
  display: flex;
  align-items: center;
  & > div {
    flex: 4.5;
    height: 100%;
    min-height: 300px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    & > aside {
      width: 100%;
      padding: 20px 40px;
      & > p {
        max-width: fit-content;
      }
    }
    & > div {
      width: 100%;
      position: relative;
      height: 50%;
    }
  }
`

export const Info = styled.aside`
  position: relative;
  flex: 5.5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 75px;
  padding-right: 20px;
  gap: 24px;
  z-index: 2;
  & > ul {
    position: relative;
    display: flex;
    align-items: center;
    gap: 25px;
    & > li {
      font-size: 30px;
      padding-bottom: 18px;
      font-family: "Yeseva One", cursive;
      font-family: "Bodoni Moda", serif;
      font-family: "Playfair Display", serif;
      opacity: 0.3;
      cursor: pointer;
      &.active {
        opacity: 1;
      }
    }
    &::after {
      display: block;
      content: "";
      width: 12%;
      height: 2px;
      border-radius: 100vmax;
      background-color: white;
      position: absolute;
      bottom: 0;
      transition: 0.5s;
    }
    &.Aglaea::after {
      left: 0;
    }
    &.Thalia::after {
      left: 47%;
      transform: translateX(-50%);
    }
    &.Euphere::after {
      width: 16%;
      left: 100%;
      transform: translateX(-100%);
    }
  }

  & > p {
    font-size: 12px;
    line-height: 25px;
    opacity: 0.6;
    max-width: 440px;
  }
`

export const ReadMore = styled.button`
  background-color: transparent;
  color: var(--text);
  opacity: 0.4;
  font-size: 12px;
  padding-top: 10px;
  cursor: pointer;
`
