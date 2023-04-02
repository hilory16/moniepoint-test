import styledComponents from "styled-components";

export const QuickActionsWrapper = styledComponents.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
`;

export const QuickActionItemWrapper = styledComponents.div`
    cursor:pointer;
    justify-content:center;

    .icon-container{
        background:${({ theme }) => theme.grey2};
        width:35px;
        height:35px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:5px;
        margin:0 auto 10px;
    }

    .quick-action-text{
        font-size:12px;
        color:${({ theme }) => theme.black};
        font-weight:400;
        text-align:center;
    }
  
`;
