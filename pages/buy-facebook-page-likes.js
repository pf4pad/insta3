import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import youtubeStyles from "../styles/BuyYoutube.module.sass";
import {colors} from "../colors/colors";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import ReactStars from "react-rating-stars-component";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";
import {ModalComponent} from "../component/Modal/ModalComponent";
import ReviewsGenerator from "../component/ReviewsGenerator";
import Head from "next/head";
import {useRouter} from "next/router";
const BuyFacebookPageLikes = () => {
    const[isOpen,setIsOpen]=useState(false)
    const [windowInnerWidth, setWindowInnerWidth] = useState('');
    const {comment,getComment,additionalPrice,setAdditionalPrice,getAdditionalPrice} = useContext(MeContext)
    const [service,setService]=useState('')
    const [counts, setCounts] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [readMore,setReadMore]=useState(false)
    const [readTextMore,setReadTextMore]=useState(false)
    const router=useRouter()
    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth)
        getComment("Facebook","Likes")
        getAdditionalPrice("Facebook","Page likes")
    }, [ ])

    return (
        <div className={styles.background} style={{background:"url('facebookBg.png') no-repeat  100%  ",backgroundSize:'cover'}}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>MakeTop</title>
                <meta name="description" content="Buy Facebook page likes from MakeTop . Instant delivery, real likes and friendly 24/7 customer support. Try us today."/>
                <meta name="description" content="Buy Facebook page likes from MakeTop . Instant delivery, real auto likes and friendly 24/7 customer support. Try us today."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Facebook page likes From The world's #1 Site (2022)- maketop"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Buy Facebook page likes from MakeTop. Instant delivery, real auto likes and friendly 24/7 customer support. Try us today."/>
                <meta name="twitter:description" content="Buy Facebook page likes from MakeTop. Instant delivery, real  likes and friendly 24/7 customer support. Try us today."/>
                <meta name="twitter:title" content="Buy Facebook page likes From The world's #1 Site (2022)- maketop"/>
                <meta name="twitter:title" content="Buy Facebook page likes From The world's #1 Site (2022)- maketop"/>
                <meta property="og:url" content="https://likes.io/buy-facebook-page-likes"/>
                <link rel="canonical" href="https://likes.io/buy-facebook-page-likes"/>
            </Head>
        <div style={{maxWidth:1920,width:"100%",margin:"0 auto",overflowX:"hidden"}}>
            <div className={styles.container}    >
                <div className={styles.background} />
                <Layer type="facebook">
                    <div className={`container`}>
                        <PageTitle title={'Buy Facebook likes '}/>
                        <div className={styles.phone}>
                            <img src="/facebookImg1.svg" className={styles.facebookImg1}/>
                            <img src="/facebookImg2.svg" className={styles.facebookImg2}/>
                            <img src="/facebookImg3.svg" className={styles.facebookImg3}/>
                            <img src="/facebookImg4.svg" className={styles.facebookImg4}/>
                            <div className={buyLikesStyles.mainTitle}>
                                <p className={buyLikesStyles.title}>FACEBOOK LIKES</p>
                                <p className={buyLikesStyles.text}>Where you can buy cheap likes for Instagram photos and
                                    videos. Buy real Insta likes<br/> for the
                                    most reasonable prices here and grow your Instagram popularity in a flash!</p>
                                <ButtonComponent text={'Leave Feedback'} type={'facebook'}
                                                 onClick={()=>router.push("/")}
                                />
                            </div>

                        </div>
                        { isOpen&&
                            < ModalComponent open={isOpen} setOpen={setIsOpen} service={service} counts={counts} priceValue={priceValue} system="Facebook"/>}
                        <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                            <p>GET STARTED</p>

                        </div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            {/*<div className={youtubeStyles.buyLikes_item_backButton} style={colors["facebook"].arrowButtonsColor}>*/}
                            {/*    <img src="/leftArrow.svg"/>*/}
                            {/*</div>*/}
                            <div className={youtubeStyles.buyLikes_item_container}>

                                    {additionalPrice?.map( (item,index)  => <BuyLikes key={item[0]} likes={item[0]} newPrice={item[1]}
                                                                                      text="Real Facebook Page likes" type={"facebook"}
                                                                                      onClick={() => {
                                                                                          router.push({
                                                                                              pathname: '/basket',
                                                                                              query: { service:'Likes',counts:item[0],system:"Facebook",priceValue:item[1] },
                                                                                          } )

                                                                                      }} />)}




                            </div>
                            {/*<div className={youtubeStyles.buyLikes_item_backButton} style={colors["facebook"].arrowButtonsColor}>*/}
                            {/*    <img src="/rightArrow.svg"/>*/}
                            {/*</div>*/}
                        </div>
                        <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
                        <div className={buyLikesStyles.reviews_container}>
                            {comment&&<ReviewsGenerator type="facebook" comment={comment}/>}
                            <div className={buyLikesStyles.ownComment}>
                                <p className={buyLikesStyles.ownComment_title}>Leave comment</p>

                                <div className={buyLikesStyles.commentBlock}>
                                    <p>Your name</p>
                                    <input placeholder="Name"/>
                                </div>
                                <div className={buyLikesStyles.commentBlock}>
                                    <p>Comment</p>
                                    <input placeholder="Leave some words"/>
                                </div>
                                <div className={buyLikesStyles.commentButton}>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#176BE8"
                                    />
                                    <ButtonComponent text={'Leave comment'} type={'facebook'}
                                                     style={{maxWidth:228,width:'100%'} }

                                    />
                                </div>
                            </div>
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
                            <a style={{color:"#176BE8",textDecoration:"underline"}} onClick={()=>setReadTextMore(!readTextMore)}>{readTextMore?"Close":"Read more"}</a>
                        </div>
                    </div>
                </Layer>
            </div>
        </div>
        </div>
    );
};

export default BuyFacebookPageLikes;
