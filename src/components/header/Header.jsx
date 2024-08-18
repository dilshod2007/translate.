import { useTranslation } from 'react-i18next'

import { BsMedium } from "react-icons/bs"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import { ImTwitter } from "react-icons/im"; 
import header from "../../assets/header.png"
 
import React from 'react'

const Header = () => {
  const [t,i18n]  = useTranslation();
  return (
    <>

<div className="flex  justify-between items-center  p-6  ">
       <div>
       <h1 className=' h1 m-w-[291px] h-[63px text-[#D05270] text-[52px] font-bold leading-[63px] '>{t("t8")} </h1>
       <br />
       <strong className='font-bold text-[#424242 ]  w-[282px] h-[63px] text-[52px] text-[#424242]' >{t("t9")} </strong>
       <br /><br />
       <p className=' w-[632px] h-[63px]  font-normal text-[#424242] text-[18px] text-[#424242]'>{t("t10")}</p>
       <br /><br />
               <div className="flex gap-[20px]">
                <div className="flex gap-[20px] items-center text-[#424242] bg-[#47ACDF] w-[201px] h-[42px] my-[40px] px-[10px] justify-center ">
              <ImTwitter className='w-[20px] h-[32px] text-[#FFFFFF]' />
             <a href=" https://x.com/ "> <p className="w-[55px] h-[15px]  text-[#FFFFFF] text-[12px] mx-[-60px]">{(t("t13"))}</p></a>
                </div>
                <div className="flex gap-[20px] items-center text-[#424242] bg-[#1275B1] w-[201px] h-[42px] my-[40px] px-[10px] justify-center">
             <FaLinkedinIn className="w-[20px] h-[32px] text-[#FFFFFF] " />
             <a href="https://ru.linkedin.com/"> <p className="w-[55px] h-[15px]  text-[#FFFFFF] text-[12px] mx-[-60px]">{(t("t12"))}</p></a>
                </div>
                <div className="flex gap-[20px] items-center text-[#424242] bg-[#000000] w-[201px] h-[42px] my-[40px] px-[10px] justify-center">
              <BsMedium className="w-[20px] h-[32px] text-[#FFFFFF]" />
              <a href="https://medium.com/"> <p className="w-[55px] h-[15px]  text-[#FFFFFF] text-[12px] mx-[-60px]">{(t("t11"))}</p></a>
                </div>
               
               </div>
       </div>
       <div>
        <img src={header}alt="" />
       </div>
</div>

    </>
  )
}

export default Header