import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import {IoBeerOutline, IoFootstepsOutline} from "react-icons/io5";

const MobileTab = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <BsHandbag />,
            name: "Delivery",
            isActive: false
        },
        {
            id: `dining`,
            icon: <IoFootstepsOutline />,
            name: "Dining Out",
            isActive: false
        },
        {
            id: `night`,
            icon: <IoBeerOutline />,
            name: "Night Life",
            isActive: false
        }
    ]);
    const {type} = useParams();
    // useEffect(() => {
    //     if(type) {
    //         const updateTypes = allTypes.map((item) => {
    //             if(item.id===type) {
    //                 rteurn ( ...item, isActive: true);
    //             }
    //             return item;
    //         });
    //         setAllTypes(updateTypes);
    //     }
    // },[type]);
    const userOptions = allTypes.map((items) => {
        // console.log(type);
        return(
        <Link to={`/${items.id}`}>
        <div 
        // className={
        //  type===items.id
        // ? "flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400"
        // : "flex flex-col items-center text-xl"}
        >
        <div
        className={
            type===items.id &&
            "absolute -top-3 w-full h-2 border-t-2 border-zmato-400"
        }/>
            
        <items.icon/>
        <h5 className="text-sm">{items.name}</h5>
        </div>
      
        </Link>);
    });
    return(
        <>
          <div className="fixed flex justify-between w-full lg:hidden text-gray-500 border bg-white shadow-lg p-3 bottom-0 z-10">
              {userOptions}
          </div>
        </>
    );
};

const FoodTab = () => {
    return(
        <>
            <div>
                <MobileTab />
            </div>
        </>
    );
};

export default FoodTab;

//master_url: type

//Delivery, dining, nightlife -> type