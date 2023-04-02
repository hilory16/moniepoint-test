import styledComponents from "styled-components";

export const ProductSlideWrapper = styledComponents.div`
    height:40vh;
    width:100%;
    background:${({ theme }) => theme.grey1};
    border-radius:8px;
`;
