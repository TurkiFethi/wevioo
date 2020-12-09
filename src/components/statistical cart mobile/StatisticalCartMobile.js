import React,{useState} from 'react'
import { ScrollPanel } from 'primereact/scrollpanel';
import { CircularProgressbar } from 'react-circular-progressbar';
import './statisticalCartMobile.css'
import 'react-circular-progressbar/dist/styles.css';

function StatisticalCartMobile({cartStatistical}) {
    const [action] = useState([
        {
            action: "action 1"
        },
        {
            action: "action 2"
        },
        {
            action: "action 3"
        },
        {
            action: "action 4"
        }
    ])
    const [cart, setCart] = useState(cartStatistical)
    const openSelectedStatisticCard = (id) => {
        setCart(cart.map((el, i) => (el.id === id ? { ...el, isSelected: true } : { ...el, isSelected: false })))
    }
    const closeSelectedStatisticCard=(id)=>{
        setCart(cart.map((el,i)=>(el.id===id?{...el,isSelected:false}:{ ...el, isSelected: false })))
    }
    return (
        <div className="p-grid mr">
               
 
                    <div className="p-col-12 mr ">
                       
                        {cart.map((el, index) => (
                             <ScrollPanel className="custombar2"id="p-scrollpanel-content" key={index}>
                    <div key={el.id} className="p-grid p-col-12 p-md-12 p-lg-12 mr container-cart  " id="container-cart-mobile" >
                        <div className=" p-col-4 p-md-4 p-lg-4  container-ref-title-cart">
                            <span className="ref-cart">{el.ref}</span>
                            <span className="title-cart">{el.title}</span>
                            <div className="container-social-media-cart">
                                <i className="pi pi-facebook icon-facebook-cart"></i>
                                <i className="pi pi-camera icon-instagram-cart"></i>
                                <i className="pi pi-twitter icon-twitter-cart"></i>
                            </div>
                        </div>

                        <div className="p-col  container-icon-price-title-cart"style={{marginLeft:"25px"}}>
                            <i className="pi pi-chart-bar icon-chart-bar-cart"></i>
                            <div className="container-price-title-cart">
                                <span>${el.price}</span>
                                <span>Conversion</span>
                            </div>
                        </div>

                        <div className="p-col  container-icon-price-title-cart" style={{marginLeft:"25px"}}>
                            <i className="pi pi-eye icon-eye-cart"></i>
                            <div className="container-price-title-cart">
                                <span>{el.view}K</span>
                                <span>Engagement</span>
                            </div>
                        </div>

                        <div className="p-col  container-icon-price-title-cart" style={{marginLeft:"25px"}}>
                            <i className="pi pi-thumbs-up icon-thumbs-up-cart"></i>
                            <div className="container-price-title-cart">
                                <span>{el.like}K</span>
                                <span>Likes</span>
                            </div>
                        </div>

                        <div className="p-col  container-icon-price-title-cart" style={{marginLeft:"25px"}}>
                            <i className="pi pi-comment icon-comment-cart"></i>
                            <div className="container-price-title-cart">
                                <span>{el.comment}</span>
                                <span>Comments</span>
                            </div>
                        </div>

                        <div className="p-col-2  icon-chart-percentage-cart" style={{marginLeft:"25px"}}>
                            <CircularProgressbar value={el.percentage} text={`${el.percentage}%`} style={{ stroke: "blue" }} />
                        </div>
                        <div className="casc p-col  " key={index} onClick={() =>el.isSelected?closeSelectedStatisticCard(el.id): openSelectedStatisticCard(el.id)}>
                            <div>
                                <i className="pi pi-ellipsis-v  p-col-3 p-md-3 p-lg-3  " style={{marginRight:"25px"}}></i>
                            </div>
                            {el.isSelected &&
                            <div className="p-col  container-open-action">
                             {   action.map((el, i) => (
                                    <div className="open-action" key={i}>
                                        <span>{el.action}</span>
                                    </div>
                                ))}
                                </div>
                            }


                        </div>
                    </div>
                    </ScrollPanel>
                ))}
                      
                    </div>
                </div>
    )
}

export default StatisticalCartMobile
