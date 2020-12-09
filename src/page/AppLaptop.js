import React,{useState,useEffect} from 'react'
import NavBar from '../components/navBar/NavBar';
import NavMenu from '../components/navMenu/NavMenu';
import DisplayTime from '../components/displayTime/DisplayTime'
import SocialMedia from '../components/social media/SocialMedia';
import TriCartStatistical from '../components/tri statistical cart/TriStatisticalCart';
import Pagiantion from '../components/pagination/Pagiantion'
import StatisticalCartMobile from '../components/statistical cart mobile/StatisticalCartMobile';

function AppLaptop({cart}) {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  useEffect(() => {
    const fetchCart= async () => {
      setPosts(cart);
    }
    
    fetchCart();
  }, [cart])

  //Get current posts
  const indexOfLastPost=currentPage*postsPerPage
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=cart.slice(indexOfFirstPost,indexOfLastPost)

  // Change page
  const paginate = (pageNumber)=>setCurrentPage(pageNumber);
    return (
        <div className="p-grid nested-grid mr">
      <div className="p-col-2 container-nav-menu-app">
        <NavMenu />
      </div>
      <div className="p-col-10 ">
        <div className="p-grid mr">
          <div className="p-col-12 ">
            <NavBar />
          </div>
          <div className="p-col-12 container-body">
            <DisplayTime />
          </div>
          <div className="p-col-12 container-body">
            <div className="p-grid mr">
              <div className="p-col-9">
                <SocialMedia />
              </div>
              <div className="p-col-3 container-tri-cart-statistical-app">
                <TriCartStatistical />
              </div>
            </div>
          </div>
          <div className="p-col-12 container-body">
            <StatisticalCartMobile cartStatistical={currentPosts}/>
          </div>
          <div className="p-col-12 container-body">
            <Pagiantion postsPerPage={postsPerPage} totalPosts={cart.length} paginate={paginate}/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AppLaptop
