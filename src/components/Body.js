import ResCard from "./ResCard";
import restrautList from "../Utils/mockData";
import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

const Body=()=>{
    //Local State Variable
    const [restrautListNew , setResturantList ]= useState(restrautList);



    return(
        <div className="body">
            <div className="search">
            <input type="text" placeholder="Search"/>
            </div>
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>
                { 
                   
                    const restrautListop=restrautList.filter((resData)=>resData.data.avgRating > 4);
                    setResturantList(restrautListop);
                }}>Top Rated Restaurant</button>
               
               <button className="restore-btn" onClick={()=>{
                setResturantList(restrautList);
               }}>
                     Show All Restaurant
                     </button>
               
            </div>
            <div className="res-container">
            {restrautListNew.map(restaurant =><ResCard key={restaurant.data.id} resData={restaurant} />)}
            </div>
            
            
            
            </div>
            

    );
};

export default Body;
