import styled from "styled-components";

const Wrapper= styled.div`
  
& > .sub{
    width: 1180px;
    zoom: 1;
    margin: auto;
    display: flex;
    border-top: 1px solid #dfdfe5;
    border-bottom: 1px solid #dfdfe5;

    & >.sub1{
        margin-bottom: 30px;
        margin-top: 30px;
        margin-right: auto;
        margin-left: auto;
        

        & > .sub2{
            margin-top:20px;

            & > .subcard{
                vertical-align: top;
                display: inline-block;
                margin-right: 10px;

                & > .subcard1{
                    width: 360px;
                    padding: 20px;

                    & > .head{
                        margin: 0;
                        font-weight: 700;
                        font-size: 30px;
                    }

                    & > .btn{
                        padding: 15px 30px;
                        background-color: #14bef0;
                        cursor: pointer;
                        font-size: 14px;
                        text-decoration: none;
                           color: #fff;
                        display: inline-block;
                         text-align: center;
                        border: 0;
                         border-radius: 4px;
                         margin-top: 30px;
                         font-weight: 700;
                    }
                }
            }
        }
    }
}


`

export default Wrapper