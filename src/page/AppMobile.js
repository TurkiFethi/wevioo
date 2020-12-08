import React,{useEffect,useState} from 'react'
import NavMenuMobile from '../components/nav menu mobile/NavMenuMobile'
import SocialMedia from '../components/social media/SocialMedia'
import DisplayTimeMobile from '../components/dispaly time mobile/DisplayTimeMobile'
import StatisticalCartMobile from '../components/statistical cart mobile/StatisticalCartMobile'
import TriCartStatistical from '../components/tri statistical cart/TriStatisticalCart'
import Pagiantion from '../components/pagination/Pagiantion'

function AppMobile({cart}) {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)
    useEffect(() => {
      const fetchCart= async () => {
        setPosts(cart);
      }
      
      fetchCart();
    }, [])
  
    //Get current posts
    const indexOfLastPost=currentPage*postsPerPage
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=cart.slice(indexOfFirstPost,indexOfLastPost)
  
    // Change page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber);
    return (
        <div className="p-grid mr p-dir-col">
        <div className="p-col">
            <NavMenuMobile/>
        </div>
        <div className="p-col" style={{backgroundColor:"#FCFCFC"}}>
            <DisplayTimeMobile/>
        </div>
        <div className="p-col " style={{backgroundColor:"#FCFCFC"}}>
            <SocialMedia/>
        </div>
        <div className="p-col-12" style={{backgroundColor:"#FCFCFC"}}>
            <TriCartStatistical/>
        </div>
        <div className="p-col-12" style={{backgroundColor:"#FCFCFC"}}>
            <StatisticalCartMobile cartStatistical={cart}/>
        </div>
        


    </div>
    )
}

export default AppMobile
