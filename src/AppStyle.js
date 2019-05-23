import styled from 'styled-components'
let bg = require('./assets/img/headbg.png')

export default styled.div `
&>.ant-layout {
  width: 100vw;
  height: 100vh;
  &>header {
    height: 80px;
    background: url(${bg}) no-repeat center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #fff;
    transition: all 0.3s ease;
    &.active {
      justify-content: space-between;
      padding-right: 100px;
    }
    .headerInfo {
      font-size: 16px;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        border-radius: 50%;
      }
    }
    .headerExit {
      display: inline-block;
      width: 88px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 15px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }
  }
}
 
`