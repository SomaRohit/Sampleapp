import ResCard from "./ResCard";
import restrautList from "../Utils/mockData";
import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { useState } from "react";

const Body=()=>{
    //Local State Variable
    const [restrautListNew , setResturantList ]= useState(restrautList);

    // useEffect(()=>{
    //     fetchData();
    // },[]);
    // //  Recieved @ arguments- One is Fuction and Another one is Dependency Array

    //  const fetchData= async ()=>{
    //     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
    //     const json = await data.json();
    //     console.log(json);
    //     setResturantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     // (json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    
    // }

    return (
        <div className="body">
            <div className="search">
            <input type="text" placeholder="Search"/>
            </div>
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>
                { 
                const restrautListop=restrautList.filter((res)=>res.data.avgRating > 4);
                    setResturantList(restrautListop);
                }}>Top Rated Restaurant</button>
               
               <button className="restore-btn" onClick={()=>{
                setResturantList(restrautList);
               }}>
                     Show All Restaurant
                     </button>
               
            </div>
            <div className="res-container">
            {restrautListNew.map(restaurant =><ResCard key={restaurant?.info?.id} resData={restaurant.info} />)}
            </div>
            
            
            
            </div>
            

    );
};

export default Body;
