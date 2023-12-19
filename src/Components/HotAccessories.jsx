import React from 'react'
import HotItemCard from './HotItemCard'
import "../Styles/HotAccessories.css"


const HotAccessories = ({music ,musicCover ,smartDevice , smartDeviceCover , home , homeCover , lifeStyle ,lifeStyleCover , mobileAccessories , mobileAccessoriesCover  }) => {
  return (
    <>
    <div className="HotAccessories">
        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="" />
        </div>
        <div>
            {music &&  music.map((item , index)=>(
             <HotItemCard key={index} name={item.name} price={item.price} image={item.image}/>
            ))}

            {smartDevice &&  smartDevice.map((item , index)=>(
             <HotItemCard key={index} name={item.name} price={item.price} image={item.image}/>
            ))}

            {home &&  home.map((item , index)=>(
             <HotItemCard key={index} name={item.name} price={item.price} image={item.image}/>
            ))}

            {lifeStyle &&  lifeStyle.map((item , index)=>(
             <HotItemCard key={index} name={item.name} price={item.price} image={item.image}/>
            ))}

            {mobileAccessories &&  mobileAccessories.map((item , index)=>(
             <HotItemCard key={index} name={item.name} price={item.price} image={item.image}/>
            ))}

            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
        </div>
    </div>
    </>
  )
}

export default HotAccessories