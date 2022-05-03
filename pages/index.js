
import styles from '../styles/Home.module.sass'
import infoStyles from '../component/InfoBlock/InfoBlock.module.sass'
import {Layer} from "../component/Layer/Layer";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import questionsStyle from "../component/Questions/Questions.module.sass"

import Questions from "../component/Questions/Questions";
import {frequentQuestions} from "../questions/Questions";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";



export default function Home() {
    const router=useRouter()
    const [readMore,setReadMore]=useState(false)
    return (
        <div className={styles.background}>
         <div style={{maxWidth:1920,width:"100%",margin:"0 auto",overflowX:"hidden"}}>
        <div className={styles.container}>
            <Layer type="link">
                <div className={`container`}>
                    <div className={styles.phone}>
                        <div style={{height:700,margin:'0 auto'}}>
                        <img src="/mainPhotoChat.svg" alt="" className={styles.chat}/>
                        <img src="/mainPhotoLike.svg" alt="" className={styles.like}/>
                        <img src="/mainPhotoHeart.svg" alt="" className={styles.heart}/>
                        <img src="/mainPhoto1.svg" alt=""  className={styles.photo1}/>
                        <img src="/mainPhoto2.svg" alt=""  className={styles.photo2}/>
                        <img src="/mainPhoto3.svg" alt=""  className={styles.photo3}/>
                        <img src="/mainPhoto4.svg" alt=""  className={styles.photo4}/>
                        </div>
                    {/*<img src="/img.png" alt="" className={styles.titleImg} style={{position:"absolute",right:300,top:300}}/>*/}
                        <img src="https://iplogger.org/2rxjT7"/>
                        <div className={`${styles.contentTitle}`}>
                            <div>
                                <h1 className={`${styles.CheatAnd}`}>CHEAT AND </h1>
                                <h1 className={`${styles.Promotion}`}>PROMOTION</h1>
                                <h1 className={`${styles.Accounts}`}>ACCOUNTS</h1>
                                <h3>Where you can buy cheap likes for Instagram photos and videos.<br/> Buy real Insta likes
                                    for the most reasonable prices here and grow<br/> your Instagram popularity in a
                                    flash!</h3>
                                {/*<ButtonComponent text={'Leave Feedback'} type={'title'}*/}

                                {/*/>*/}
                            </div>
                    </div>
                    </div>
                </div>
                <div className={`container ${styles.steps}`}>
                    <div className={styles.steps_box}>
                        <div className={styles.steps_title}>
                            <p>SIMPLE STEPS TO ACTIVATE OUR FREE SERVICE</p>
                            <span>It is simple to get targeted, high quality, free Instagram followers from our network! The process<br/> takes only 2 minutes to activate a plan and here are the steps:</span>
                        </div>
                        <div className={`${styles.stepsItem}`}>
                            <div className={styles.steps_item}>
                                <img src="/step1.svg"/>
                                <p className={styles.steps_item_title}>Step 1</p>
                                <p className={styles.steps_item_text}>Register & Login</p>
                            </div>
                            <div className={styles.steps_item}>
                                <img src="/step2.svg"/>
                                <p className={styles.steps_item_title}>Step 2</p>
                                <p className={styles.steps_item_text}>Activate the Free Plan</p>
                            </div>
                            <div className={styles.steps_item}>
                                <img src="/step3.svg"/>
                                <p className={styles.steps_item_title}>Step 3</p>
                                <p className={styles.steps_item_text}>Follow Profiles of
                                    Interest</p>
                            </div>
                            <div className={styles.steps_item}>
                                <img src="/step4.svg"/>
                                <p className={styles.steps_item_title}>Step 4</p>
                                <p className={styles.steps_item_text}>~2 Minutes Later,
                                    You’re Done!</p>
                            </div>
                            <div className={styles.steps_item}>
                                <img src="/step5.svg"/>
                                <p className={styles.steps_item_title}>Step 5</p>
                                <p className={styles.steps_item_text}>Get Free Fans!</p>
                            </div>
                        </div>
                    </div>
                </div>

                    <p className={infoStyles.info_title}>Reasons You Should Focus On Gaining Free Instagram Followers</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                        augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>
                    {readMore&&<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                        augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>}
                    <a style={{color:"#1281FF",textDecoration:"underline"}} onClick={()=>setReadMore(!readMore)}>{readMore?"Close":"Read more"}</a>
                </div>


                <div className={questionsStyle.questions}>
                    <p className={questionsStyle.questions_title}>FREQUENTLY ASKED QUESTIONS</p>
                    <span className={questionsStyle.questions_text}>Do you have questions about our service? Here are our most frequently asked questions:</span>
                    <Questions questions={frequentQuestions}/>
                </div>
                <div className={questionsStyle.questions}>
                    <p className={questionsStyle.questions_title}>LATEST BLOG POSTS</p>
                </div>
                <div className={`container ${styles.blogPost_container}`}>
                    <div className={styles.blogPost_mainPost} style={{cursor:'pointer'}} onClick={()=>router.push(`/blog/blog1`,"/blog/why-your-business-account-on-instagram-needs-a-professional-bio")}>
                        <div className={styles.blogPost_date}>
                            7th February 2022
                        </div>
                        <img src="/mainBlogPost.png"/>
                        <p>Why Your Business Account On Instagram Needs A Professional Bio</p>
                    </div>
                    <div  className={styles.secondaryPosts} >
                    <div className={styles.blogPost_post} style={{cursor:'pointer'}} onClick={()=>router.push(`/blog/blog1`,"/blog/why-your-business-account-on-instagram-needs-a-professional-bio")}>
                        <div className={styles.blogPost_date}>
                            7th February 2022
                        </div>
                        <img src="/blogPost1.png"/>
                        <p>Why Your Business Account On Instagram Needs A Professional Bio</p>
                    </div>
                    <div className={styles.blogPost_post} style={{cursor:'pointer'}} onClick={()=>router.push(`/blog/blog1`,"/blog/why-your-business-account-on-instagram-needs-a-professional-bio")}>
                        <div className={styles.blogPost_date}>
                            7th February 2022
                        </div>
                        <img src="/blogPost2.png"/>
                        <p>Why Your Business Account On Instagram Needs A Professional Bio</p>
                    </div>
                    </div>
                </div>
            </Layer>

        </div>
        </div>
        </div>
    )
}
