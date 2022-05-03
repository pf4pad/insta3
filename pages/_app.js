import '../styles/globals.sass'
import {createContext, useEffect, useState} from "react";
import useAxios from "../hooks/useAxios";
export const MeContext = createContext()
function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);
  const axios = useAxios()
  const [allInfo, setAllInfo] = useState({});
  const [price, setPrice] = useState({});
  const [additionalPrice, setAdditionalPrice] = useState([]);
  const [comment, setComment] = useState([]);
  const getComment = async (service,type) => {
    try {
      const data = new FormData()
      data.append('system', service)
      data.append('service', type)
      const res = await axios.post('/review_list.php', data)

      if (res.status === 200) {
        setComment(prev => res.data.data)
      }
    } catch (e) {
      console.log(e)
    }
  }
  const getAllInfo = async() => {
    try{
      const res = await axios.post('/user_info.php')
      if (res.status === 200) {
        setAllInfo(prev => res.data.data)
      }
    }catch(e){
      console.log(e)
    }
  }
  const getAdditionalPrice = async(service ,type) => {
    try{
      const res = await axios.post('/additional_services.php')

      if (res.status === 200) {
        setAdditionalPrice(prev =>  Object.entries(res?.data?.data[service][type]['plans']))

      }
    }catch(e){
      console.log(e)
    }
  }
  const getPrice = async() => {
    try{
      const res = await axios.post('/get_plans.php')

      if (res.status === 200) {
        setPrice(prev => res?.data?.data?.Instagram)

      }
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getAllInfo()
    getPrice()

  }, [])
useEffect(()=>{
  setIsSSR(false);
},[])

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
        !isSSR &&<MeContext.Provider value={{allInfo, getAllInfo, price,getComment,comment,additionalPrice,getAdditionalPrice,setAdditionalPrice}}>
          <Component {...pageProps} />
          <link rel="shortcut icon" href="/favicon.ico"/>
        </MeContext.Provider>
    );
  }
}
export default MyApp
