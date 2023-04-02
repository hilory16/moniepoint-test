import styledComponents from "styled-components";

export const BottomNavWrapper = styledComponents.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background:${({ theme }) => theme.grey4};
    box-shadow:1px 1px 80px rgba(10,10,10,.3);
   

    .bottom-nav-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

`;

export const BottomNavItemWrapper = styledComponents.div`
    .bottom-nav-icon{
        margin-bottom:10px;

        display:flex;
        justify-content:center;
        align-items:center;
        svg{

        }
    }

    .menu-text{
        text-align:center;
        font-weight:300;
        font-size:14px;
        color:${({ theme }) => theme.black};
    }
`;
