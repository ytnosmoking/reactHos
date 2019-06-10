import styled from 'styled-components'

import variable from '../../assets/style/var'

export default styled.li `
  margin-bottom: 20px;
  height: 138px;
  background: #fff;
  box-shadow: 0px 0px 5px 1px rgba(53, 53, 53, 0.1);
  .location {
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: space-between;
    padding: 10px 30px;
    background-color: ${variable.c5};
    font-size:  ${variable.f12};
    color: #999;
    .shop {
      font-size: 20px;
      font-weight: bold;
      color: #666;
    }
  }

  .user {
    display: flex;
    align-items: center
    height: 98px;
    padding: 20px 30px;
    justify-content: space-between;
    .userName {
      font-size: @f24;
      color: @bg;
    }
    .userWant {
      padding-left: 30px;
      font-size: @f16;
      color: @c33;
    }
    .userDetail {
      padding-top: 20px;
      font-size: @f14;
      line-height: 14px;
      color: @c9;
      span + span {
        padding-left: 30px;
      }
    }
    .userCtr {
      button {
        .shape(98px, 36px);
        color: #fff;
        font-size: @f18;
        font-weight: bold;
        border-radius: 18px;
        cursor: pointer;
        & + button {
          margin-left: 30px;
        }
      }
    }
  }
`