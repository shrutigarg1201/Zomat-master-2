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
    // const userOptions = allTypes.map((items) => {
        // console.log(type);
        return(
            <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
                {allTypes.map((items) => (
                    <Link to={`/${items.id}`}>
                        <div 
                            className={
                            type===items.id
                            ? "flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400"
                            : "flex flex-col items-center text-xl"}
                            >
                            <div
                                className={
                                    type===items.id &&
                                    "absolute -top-3 w-full h-2 border-t-2 border-zmato-400"
                                }/>
                            {/* <items.icon/>  */}
                            {items.icon}
                            <h5 className="text-sm">{items.name}</h5>
                        </div>  
                    </Link> 
                ))}
            </div>
            </>
        );
};  

const LaptopTab = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                        className="h-14 bg-tab-50 p-3"/>,
            icon2: <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                        className="h-14 bg-yellow-100 p-3"/>,
            name: "Delivery",
            isActive: false
        },
        {
            id: `dining`,
            icon: <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                        className="h-14 bg-tab-50 p-3"/>,
            icon2: <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                        className="h-14 bg-blue-100 p-3"/>,
            name: "Dining Out",
            isActive: false
        },
        {
            id: `night`,
            icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmsE2sIQC8PAih4WY8emOIJ8BoDJOjomtI_MCDdIo2gt5nFOFJSo7_8RsrbIbdgfjbkU&usqp=CAU"
                        className="h-14 bg-tab-50 w-16 p-3"/>,
            icon2: <img src="https://c8.alamy.com/comp/G1WBG4/beer-mug-cartoon-with-foam-G1WBG4.jpg"
                        className="h-14 bg-yellow-100 p-3"/>,
                        
            name: "Night Life",
            isActive: false
        }
    ]);
    function changeImg(id){
        console.log("Change Img is called");
        console.log(id);
        var allTypesNew = allTypes;
        allTypesNew.map((item)=>{
            if(item.id===id){
                item.isActive = true;
                
            }
            else{
                item.isActive = false;
            }
        })
        console.log(allTypesNew);

    }
    
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
    // const userOptions = allTypes.map((items) => {
        // console.log(type);
        return(
            <>
            <div className="hidden lg:flex bg-white p-3 fixed z-10 mx-44 mt-10 w-full flex items-center gap-3 text-gray-500">
                {allTypes.map((items) => (
                    <Link to={`/${items.id}`}>
                        <div 
                            className={
                            type===items.id
                            ? "flex flex-col items-center text-xl text-zomato-400 border-b-2 p-3 border-zomato-400"  
                            : "flex flex-col items-center text-xl"} 
                            >
                             {/* <div
                                className={
                                    type===items.id &&
                                    "absolute -top-3 w-full h-2 border-t-2 border-zmato-400"
                                }/> */}
                            {/* <items.icon/>  */}
                            
                            <div className="flex items-center gap-3" onClick = {()=>changeImg(items.id)}>
                                <button className="h-30 border rounded-full border-tab-50 hover:bg-yellow-200 overflow-hidden"  >
                                    {items.isActive=== false ? items.icon : items.icon2}
                                </button>      
                                <h5>{items.name}</h5>
                            </div>
                        </div>  
                    </Link> 
                ))}
            </div>
            </>
        );
};












// {
//     return(
//         <>
//             <div className="container flex mx-48 mt-10 gap-3">
//                 <div className="flex items-center gap-3">
//                     <div className="h-30 border rounded-full border-tab-50 overflow-hidden">
//                         <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
//                         className="h-14 bg-tab-50 p-3 onclick"/>
//                     </div>
//                     <button className="text-xl text-text-500 focus:text-red-500">Delivery</button>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <div className="h-30 border rounded-full border-tab-50 overflow-hidden">
//                         <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
//                         className="h-14 bg-tab-50 p-3"/>
//                     </div>
//                     <button className="text-xl text-text-500 focus:text-red-500">Dining Out</button>
//                 </div>
//             </div>
//         </>
//     )
// }

const FoodTab = () => {
    return(
        <>
            <div>
                <MobileTab />
                <LaptopTab className="hidden lg:flex "/>
            </div>
        </>
    );
};

export default FoodTab;

//master_url: type

//Delivery, dining, nightlife -> type
