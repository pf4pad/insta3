import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import youtubeStyles from "../styles/BuyYoutube.module.sass";
import {colors} from "../colors/colors";
import BuyLikes from "../component/BuyLikes/BuyLikes";

import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";

import ReviewsGenerator from "../component/ReviewsGenerator";
import OwnComment from "../component/OwnComment";
import ModalReview from "../component/Modal/ModalReview";
import Head from "next/head";
import {useRouter} from "next/router";

const BuyTiktokViews = () => {
    const[isOpen,setIsOpen]=useState(false)
    const [windowInnerWidth, setWindowInnerWidth] = useState('');
    const {comment,getComment,additionalPrice,setAdditionalPrice,getAdditionalPrice} = useContext(MeContext)
    const [readMore,setReadMore]=useState(false)
    const[isReviewButtonPress,setIsReviewButtonPress]=useState(false)
    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth)
        getComment("TikTok","Views")
        getAdditionalPrice("TikTok","Views")
    }, [ ])
    const router=useRouter()
    const [readTextMore,setReadTextMore]=useState(false)
    return (
        <div className={styles.background} style={{background:"url('tiktokBg.png') no-repeat 100%  ",backgroundSize:'cover'}}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>MakeTop</title>
                <meta name="description" content="Buy TikTok views from MakeTop . Instant delivery, real views and friendly 24/7 customer support. Try us today."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy TikTok Views From The world's #1 Site (2022)- tagiamtop"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Buy TikTok Views from MakeTop. Instant delivery, real views and friendly 24/7 customer support. Try us today."/>
                <meta name="twitter:title" content="Buy TikTok Views From The world's #1 Site (2022)- maketop"/>
                <meta name="twitter:title" content="Best Site to Buy TikTok Views (Instant &amp; Automatic)"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:url" content="https://likes.io/buy-tiktok-views"/>
                <link rel="canonical" href="https://likes.io/buy-tiktok-views"/>
            </Head>
            <div style={{maxWidth:1920,width:"100%",margin:"0 auto",overflowX:"hidden"}}>
                <div className={styles.container}    >
                    <div className={styles.background} />

                    <Layer type="tiktok">
                        <div className={`container`}>
                            <PageTitle title={'Buy TikTok views  '}/>
                            <div className={styles.phone}>
                                <img src="/tiktokPhoto.png" alt="" className={styles.tiktokImg} />
                                <div className={buyLikesStyles.mainTitle}>
                                    <p className={buyLikesStyles.title}>TIKTOK VIEWS</p>
                                    <p className={buyLikesStyles.text}>Where you can buy cheap likes for  Instagram photos and
                                        videos. Buy real Insta likes<br/> for the
                                        most reasonable prices here and grow your Instagram popularity in a flash!</p>
                                    <ButtonComponent text={'Leave Feedback'} type={'tiktok'}
                                                     onClick={()=>router.push("/")}
                                    />
                                </div>
                            </div>

                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>

                            </div>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                {/*<div className={youtubeStyles.buyLikes_item_backButton} style={colors["tiktok"].arrowButtonsColor}>*/}
                                {/*    <img src="/leftArrow.svg"/>*/}
                                {/*</div>*/}
                                <div className={youtubeStyles.buyLikes_item_container}>

                                        {additionalPrice?.map( (item,index)  => <BuyLikes key={item[0]} likes={item[0]} newPrice={item[1]}
                                                                                          text="Real TikTok Views" type={"tiktok"}
                                                                                          onClick={() => {
                                                                                              router.push({
                                                                                                  pathname: '/basket',
                                                                                                  query: { service:'Views',counts:item[0],system:"TikTok",priceValue:item[1] },
                                                                                              } )

                                                                                          }} />)}



                                </div>
                                {/*<div className={youtubeStyles.buyLikes_item_backButton} style={colors["tiktok"].arrowButtonsColor}>*/}
                                {/*    <img src="/rightArrow.svg"/>*/}
                                {/*</div>*/}
                            </div>
                            <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
                            <div className={buyLikesStyles.reviews_container}>
                                {comment&&<ReviewsGenerator type="tiktok" comment={comment}/>}
                                <OwnComment type="tiktok" service="Views"/>
                                {isReviewButtonPress&&<ModalReview open={isReviewButtonPress} setOpen={setIsReviewButtonPress} type="tiktok" service="Views"/>}
                                <span className={buyLikesStyles.ownHiddenButton}><ButtonComponent text={'Leave comment'} type={'tiktok'}
                                                                                                  style={{ maxWidth:228,width:'100%'} } onClick={()=>setIsReviewButtonPress(true)} /></span>

                            </div>
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                                        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                                        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                                        augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Quisque rutrum.
                                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
                                        eget dui. Etiam rhoncus. </p>
                                    <div className={infoStyles.info_video}>
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8vfxHE2DGzU"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe></div>
                                </div>
                                <p  >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                    pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                                    nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>
                                {readTextMore&&<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                    pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                                    nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>}
                                <a style={{color:"#03E5F4",textDecoration:"underline"}} onClick={()=>setReadTextMore(!readTextMore)}>{readTextMore?"Close":"Read more"}</a>
                            </div>
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyTiktokViews;
