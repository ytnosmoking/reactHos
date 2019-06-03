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
  .sidebar {
    flex: none !important;
    min-width:128px !important;
    max-width: 128px !important;
    width: 128px !important;
    padding: 20px 0 0 14px;
    background: #fff;
    li {
      margin:0;
      height: 108px;
      line-height: 1;
      transition: all .3s ease;
      &.ant-menu-item-active {
        a {color: #28b7a3!important;}
      }
      a {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        font-size: 20px;
        font-weight: bold;
      }
      &.ant-menu-item-selected {
        background: #28b7a3;
        box-shadow: 0px 0px 11px 1px rgba(40, 183, 163, 0.2);
        border-radius: 12px 0px 0px 12px;
        &:after {
          border-right: none ;
        }
        a {color: #fff!important;}
        svg {
          fill:  #fff;
        }
      }
    }
    svg {
      width: 36px;
      height: 36px;
      fill: #28b7a3;
    }
  }
}
 
`