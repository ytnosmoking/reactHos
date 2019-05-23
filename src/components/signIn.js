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
    }
    &>div {
      width:100%;
    }
  }


`