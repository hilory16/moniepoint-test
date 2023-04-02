import styledComponents from "styled-components";

export const ProductDescriptionWrapper = styledComponents.div`

    padding-bottom:80px;

    .store-area{
        margin-top:20px;

        .store-details{
            display:flex;
            align-items:center;
            margin-bottom:10px;

            .store-name{
                margin-left:10px;
                font-size:16px;
                color:${({ theme }) => theme.grey1}
            }
        }

        .product-name{
            font-size:24px;
            line-height:32px;
            font-weight:500;
            margin-bottom:15px;
        }

        .product-meta{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:30px;
            font-size:16px;
            font-weight:300;
            color:${({ theme }) => theme.grey1};


            .product-rating{
                display:flex;
                 align-items:center;
                 svg{
                    fill:${({ theme }) => theme.gold};
                }
                p{
                    margin-left:10px;
                }
            }
        }
    }

    .product-info{
        margin-bottom:20px;

        .product-info-tab{
            display:flex;
            align-items:center;
            border-bottom:2px solid ${({ theme }) => theme.grey3};
            padding-bottom:15px;
            margin-bottom:20px;

            li{
                list-style:none;
                font-size:16px;;
                color: ${({ theme }) => theme.grey1};
                padding:0 30px 0 25px;
                font-weight:300;
                
                :first-child{
                    margin-right:10px;
                }
            }

            li.active{
                color: ${({ theme }) => theme.green};
                position:relative;
                font-weight:400;

                :after{
                    content:"";
                    position:absolute;
                    bottom:-17px;
                    left:0;
                    height:2px;
                    width:100%;
                    background: ${({ theme }) => theme.green};

                }
            }
        }

        .about-prouduct-item{
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            justify-content:space-between;
            padding-bottom:20px;
            border-bottom:2px solid ${({ theme }) => theme.grey3};
            margin-bottom:30px;

            li{
                width:45%;
        
                :nth-child(even){
                    text-align:left;
                    width:45%;
                
                }
            }


        }
    }

    .product-description{
        border-bottom:2px solid ${({ theme }) => theme.grey3};
        margin-bottom:30px;

        .product-description-list{
            padding-left:26px;
            margin-bottom:20px;
            font-weight:300px;

            li{
                font-size:14px;
                line-height:20px;
                font-weight:300px;
            }
        }

        .product-description-list li, .support{
            color: ${({ theme }) => theme.grey1};
            font-size:14px;
            line-height:20px;
            font-weight:300px;
        }

        .support{
            margin-bottom:20px;
        }

        .see-more{
            margin-bottom:30px;
            display:flex;
            align-items:center;

            span{
                font-size:14px;
                color: ${({ theme }) => theme.green};
                margin-right:10px;
            }
        }
    }

    .shipping-info{
        border-bottom:2px solid ${({ theme }) => theme.grey3};
        padding-bottom:15px;
        margin-bottom:30px;

        .sub-section-title{
            margin-bottom:25px;
        }
    }

    .seller-info{
        margin-bottom:30px;
        padding-bottom:30px;
        border-bottom:1px solid ${({ theme }) => theme.grey3};

        .sub-section-title{
            margin-bottom:25px;
        }

        .seller-info-content{
            display:flex;
            align-items:flex-start;
            width:100%;

            .store-display-picture{
                width:70px;
                height:70px;
                background:${({ theme }) => theme.grey3};
                border-radius:50%;
                margin-right:20px;
                flex-shrink: 0;
                position:relative;

                :before,:after{
                    content:"";
                    position:absolute;
                    border-radius:50%;
                }

                :before{
                    bottom:4px;
                    right:4px;
                    height:15px;
                    width:15px;
                    background: ${({ theme }) => theme.white};

                }

                :after{
                    bottom:7px;
                    right:7px;
                    height:10px;
                    width:10px;
                    background: ${({ theme }) => theme.grey3};
                }
                
            }

            .store-display-info{
                width:100%;

                h5{
                    font-weight:500;
                    font-weight:18px;
                    margin-bottom:10px;
                }

                .availability{
                    display:flex;
                    align-items:center;
                    width:100%;
                    margin-bottom:15px;

                    span{
                        font-size:12px;
                        color:${({ theme }) => theme.grey3};
                        display:block;
                        margin-right:12px;
                    }
                }
            }

            .visit-store-btn{
                display:flex;
                align-items:center;
                border:1.5px solid ${({ theme }) => theme.green};
                padding:7px 25px;
                border-radius:8px;
                width:fit-content;

                svg{

                }

                p{
                    margin-left:10px;
                    font-size:14px;
                    color:${({ theme }) => theme.green};
                }
            }
        }
    }

    .review-rating{
        margin-bottom:35px;

        .sub-section-title{
            margin-bottom:20px;
        }

        .review-rating-content{
            display:flex;
            margin-bottom:20px;

            .average-rating{
                margin-right:20px;
                width: 45%;
                display:flex;
                justify-content:space-between;
                flex-direction:column;
                height:auto;

                h5 {    
                    margin-bottom:15px;

                    .big{
                        font-size:40px;
                        color:${({ theme }) => theme.black};
                    }

                    .small{
                        color:${({ theme }) => theme.grey1};
                        font-size:13px;
                    }
                }


                .full-stars{
                    margin-bottom:15px;

                    svg{
                        fill:${({ theme }) => theme.gold};
                        margin-right:2px
                    }
                }

                .total-reviews{
                    color:${({ theme }) => theme.grey1};
                    font-size:13px;
                }
            }

            .rating-breakdown{
                width:100%;

                li{
                    list-style:none;
                    display:flex;
                    align-items:center;
                    width:100%;
                    margin-bottom:10px;

                    :last-child{
                        margin-bottom:0;
                    }

                    .stars{
                        display:flex;
                        align-items:center;
                        margin-right:15px;

                        svg{
                            fill:${({ theme }) => theme.gold};
                        }

                        p{
                            margin-left:5px;
                            font-size:14px;
                            color:${({ theme }) => theme.grey1};
                        }   
                    }

                    .gauge{
                        display:flex;
                        align-items:center;
                        width:100%;
                        justify-content:space-between;

                        .rating-meter{
                            height:10px;
                            border-radius:50px;
                            width:100%;
                            background:${({ theme }) => theme.grey3};
                            margin-right:15px;
                            position:relative;

                            :after{
                                content:"";
                                position:relative;
                                height:10px;
                                border-radius:50px;
                                background:${({ theme }) => theme.green};
                                width:80%;
                                bottom:0;
                                right:0;
                                display:flex;
                            }
                        }

                        .actual-rating-figure{
                            font-size:14px;
                            font-weight:500;
                            width:25px;
                            text-align:right;
                        }
                    }

                    
                }
            }
        }
    }

    .review-pictures{
        border-bottom:2px solid ${({ theme }) => theme.grey3};
        padding-bottom:25px;
        margin-bottom:30px;

        .sub-section-title{
            margin-bottom:20px;
        }
        
        .review-image-list{
            display:flex
            align-items:center;
            justify-content:space-between;
            width:100%;

            .review-image{
                height:75px;
                width:75px;
                border-radius:10px;
                background:${({ theme }) => theme.green};
            }
        }
    }

    .top-reviews{
        .section-header{
            display:flex;
            align-items:flex-end;
            justify-content:space-between;
            margin-bottom:30px;
            width:100%;
            
            p{
                color:${({ theme }) => theme.grey1};
                font-size:14px;
            }
        }

        .pagination-area{
            margin-bottom:50px;
            display:flex;
            align-items:flex-end;
            justify-content:space-between;

            .see-more{
                color:${({ theme }) => theme.green};
                font-size:14px;
            }
        }
    }

    .product-recommendation{
        
        .product-recommendation-heading{
            display:flex;
            align-items:flex-end;
            justify-content:space-between;
            margin-bottom:20px;

            .sub-section-title{
                margin-bottom:0;
            }

            .section-link{
                font-size:14px;
            }
        }
    }
`;
