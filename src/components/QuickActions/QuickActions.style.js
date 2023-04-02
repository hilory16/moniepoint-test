import styledComponents from "styled-components";

export const QuickActionsWrapper = styledComponents.div`
    display:flex;
    justify-content:space-between;
    margin:25px 0 30px 0;
`;

export const QuickActionItemWrapper = styledComponents.div`
    cursor:pointer;
    justify-content:center;

    .icon-container{
        background:${({ theme }) => theme.grey2};
        width:40px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:6px;
        margin:0 auto 10px;
    }

    .quick-action-text{
        font-size:12px;
        color:${({ theme }) => theme.grey1};
        font-weight:300;
        text-align:center;
    }
  
`;
