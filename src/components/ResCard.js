import { CDN_URL } from "../Utils/constants";
const ResCard=(props )=>{
    const {resData}=props;
    const{
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        deliveryTime,
        }=resData?.data;
    return(
        <div className="res-card">
            <img className="res-card-logo" src={
          CDN_URL+cloudinaryImageId
        }
 alt="NotRender"/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime}</h5>
            
        </div>
    );
};

export default  ResCard;