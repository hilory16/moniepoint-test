import styledComponents from "styled-components";

export const SelectWrapper = styledComponents.div`
    background:${({ theme }) => theme.grey3};
    width:100px;
    border-radius:5px;
    height:100%;

    select{
        background:${({ theme }) => theme.grey2};
        color:${({ theme }) => theme.black};
        outline:none;
        font-size:12px;
        border:1px solid ${({ theme }) => theme.grey1};
        height:36px;
        width:100%;
        border-radius:5px;
        padding:0 5px;
        font-weight:500;

        ::placeholder{
            color:${({ theme }) => theme.black};
            font-size:12px;
            font-weight:500;
        }
    }
`;
