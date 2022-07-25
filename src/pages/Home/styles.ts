import styled from "styled-components"

export default styled.section`
  background-color: var(--black);
  min-height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Navbar = styled.nav`
  z-index: 2;
  & > ul {
    display: flex;
    align-items: center;
    gap: 20px;
    & > li {
      position: relative;
      margin-top: 10px;
      padding: 10px 20px;
      font-family: "Inter", sans-serif;
      font-size: 11px;
      letter-spacing: 3px;
      &:hover::after,
      &.ART::after {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 25%;
        height: 2px;
        border-radius: 100vmax;
        background-color: var(--text);
        opacity: 0.9;
      }
    }
  }
  @media screen and (max-width: 700px) {
    overflow: hidden;
    height: 24px;
    width: 15px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    border-radius: 50%;
    align-self: flex-end;
    margin-top: 15px;
    margin-right: 15px;

    &:hover,
    &:focus,
    &:active {
      position: relative;
      margin-top: 0px;
      margin-right: 0px;
      border: none;
      width: 80vw;
      min-height: 100vh;
      transition: 0.5s;
      background-color: white;
      border-radius: 5px;
      & > ul {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > li {
          color: black;
          &::after {
            background-color: black;
          }
        }
      }
    }
  }
`

export const Info = styled.div`
  z-index: 2;
  max-width: 600px;
  color: white;
  padding: 0 10px;
  padding-bottom: 10vh;
  & > h1 {
    padding-bottom: 25px;
    text-align: center;
    letter-spacing: 15px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      border-radius: 100vmax;
      background-color: var(--text);
    }
  }
  & > h2 {
    text-align: center;
    font-style: italic;
    letter-spacing: 5px;
  }
  & > p {
    padding-top: 30px;
    background-image: linear-gradient(to top, black, transparent);
  }
`

export const Canvas = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`
