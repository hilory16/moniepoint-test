import styledComponents from "styled-components";

export const HeaderWrapper = styledComponents.div`
    position:fixed;
    left:0;
    right:0;
    width:100%;

    .header-content{
        display:flex;
        justify-content:space-between;

        .search-input{
            display:flex;   
            align-items:center;
            height:35px;
            border:1px solid ${({ theme }) => theme.grey1};
            padding:0 10px;
            border-radius:5px;
            margin-right:20px;
            width:100%;
    
            input{
                border:none;
                background:${({ theme }) => theme.transparent};
            }
            svg{
                margin-right:10px;
            }
        }

        .header-actions-container{
            display:flex; 
            align-items:center;
    
            .header-actions-icon {
                position:relative;
    
                .badge-number{
                    position:absolute;
                    top:-3px;
                    right:-3px;
                }
            }
    
            .icon-1{
                margin-right:20px;
            }
    
            .icon-2{
                
            }
        }
    }
`;
