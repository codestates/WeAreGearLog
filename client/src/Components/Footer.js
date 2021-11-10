import styled from 'styled-components'
import { MdPerson, MdEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'


const StyledFooter = styled.footer`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  width: 100vw;
  height: 50vh;
  background-color: black;
  display: flex;
  padding: 2rem 2rem;
  box-sizing: border-box;
  column-gap: 3rem;
  
  a {
    text-decoration: none;
  }
  .footer-left {
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    span, p {
      color: #ebebeb;
      padding-left: 0.5rem;
    }
  }
  .footer-right {
    flex: 1 1 70%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    color: #F5C3B8;
    letter-spacing: 1.5px;
    padding: 0;
    li {
      transition: 0.2s;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      span {
        color: #fff;
        transition: 0.2s;
      }
      a {
        color: #ebebeb;
        &:hover {
          cursor: pointer;
          color: #fff;
        }
      }
    }
  }
  
  @media (max-width: 600px) {
    height: auto;
    padding: 2rem 1rem;
    row-gap: 2rem;
    .footer-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      li {
        justify-content: center;
        align-items: flex-start;
        width: 250px;
      }
    }
  }
`

const CopyMessage = styled.p`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #FECF2D;
  padding: 0.2rem 0.5rem;
  color: #444444;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 999px;
  bottom: -22px;
  right: 20px;
  z-index: 9990;
  
`

const StyledDevInfo = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0.5rem;
  div {
    display: flex;
    column-gap: 1rem;
    color: #c9c9c9;
    transition: 0.2s;
    position: relative;
    svg {
      fill: #c9c9c9;
    }
    a {
      display: flex;
      column-gap: 1rem;
    }
    &:hover{
      color: #fff;
      transform: translateY(-2px);
    }
  }
  .copy-email {
    &:hover{
      .copy-m {
        display: flex;
      }
    }
  }
`

export default function Footer() {
  const handleClickCopy = (e) => {
    const el = document.createElement('textarea')
    document.body.appendChild(el)
    el.value = e.target.textContent
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
  
  return (
    <StyledFooter>
      <div className="footer-left">
        <div>
          <span>Gear Log</span>
          <p>
            CodeStates SEP 31th Team AOC
          </p>
        </div>
        <span>Copyrirght &copy; {new Date().getFullYear()} Team Art of Code. <br/> Gear Review Community</span>
      </div>
      <ul className="footer-right">
        <li>
          <span>YOUNGKWANG LEE</span>
          <StyledDevInfo>
            <div><MdPerson/>이영광</div>
            <div className="copy-email" onClick={handleClickCopy}>
              <MdEmail/>hi06077@gmail.com
              <CopyMessage className="copy-m">누르면 복사되요!</CopyMessage>
            </div>
            <div><a href='https://github.com/DevLeeYG'><AiFillGithub/>DevLeeYG</a></div>
          </StyledDevInfo>
        </li>
        <li>
          <span>DONGCAHN KIM</span>
          <StyledDevInfo>
            <div><MdPerson/>김동찬</div>
            <div className="copy-email" onClick={handleClickCopy}>
              <MdEmail/>dongchan1583@gmail.com
              <CopyMessage className="copy-m">누르면 복사되요!</CopyMessage>
            </div>
            <div><a href='https://github.com/kedm717'><AiFillGithub/>kedm717</a></div>
          </StyledDevInfo>
        </li>
        <li>
          <span>SEONGHYEON HWANG</span>
          <StyledDevInfo>
            <div><MdPerson/>황성현</div>
            <div className="copy-email" onClick={handleClickCopy}>
              <MdEmail/>raidi90@naver.com
              <CopyMessage className="copy-m">누르면 복사되요!</CopyMessage>
            </div>
            <div><a href='https://github.com/SH-HWA'><AiFillGithub/>SH-HWA</a></div>
          </StyledDevInfo>
        </li>
        <li>
          <span>CHANGYOON LEE</span>
          <StyledDevInfo>
            <div onClick={handleClickCopy}><MdPerson/>이창윤</div>
            <div className="copy-email" onClick={handleClickCopy}>
              <MdEmail/>seismman@gmail.com
              <CopyMessage className="copy-m">누르면 복사되요!</CopyMessage>
            </div>
            <div><a href='https://github.com/seismman'><AiFillGithub/>seismman</a></div>
          </StyledDevInfo>
        </li>
      </ul>
    </StyledFooter>
  )
}