import styled from "styled-components";

const Wrapper= styled.div `

   & > .content{
    width: 1180px;
    zoom: 1;
    margin: auto;
    display: flex;

      & > .head{
        position: relative;
        margin-top: 15px;

        & > .btn{
            font-size: 14px;
    color: #14bef0;
    font-weight: 400;
    padding: 12px 16px;
    border: 1.5px solid #14bef0;
    background-color: #fff;
    right: 10px;
    top: 22px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    border-radius: 4px;
    outline: none;
    position: absolute;
    overflow: visible;
        }

      }
   }
`
export default Wrapper;
