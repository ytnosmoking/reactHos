import styled from 'styled-components'


export default styled.div `

  display: flex;
  justify-content: center;
  align-items:center;
  height: 100%;
  background: #ccf9e8;
  &>form {
    width: 400px;
    height: 364px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 5px 1px rgba(53, 53, 53, 0.1);
    border-radius: 12px;
    padding:20px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    &>img {
      width: 80px;
      height: 80px;
      margin-bottom: 24px;
    }
    &>div {
      width:100%;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background: #28b7a3;
    }
    .ant-checkbox-inner {
      transform:scale(1.4);
      
      border-radius: 50%;
      border-color:#28b7a3!important;
    }
    .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
      border-color: #28b7a3;
      border-right-width: 1px !important;
    }
    .ant-input {
      height: 40px;
      border-radius: 18px;
      &:hover,&:focus {
        border-color:#28b7a3;
        box-shadow: 0 0 0 2px hsla(152, 67%, 39%, 0.2);
      }
    }
    .ant-btn {
      width: 100%;
      height: 38px;
      line-height: 38px;
      font-size: 18px;
      color: #fff;
      font-weight: bold;
      text-align: center;
      border-radius: 19px;
      background-color: #28b7a3;
    }
  }


`