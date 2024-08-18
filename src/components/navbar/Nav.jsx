import { useTranslation } from 'react-i18next'
import me from "../../assets/me.png"
import { NavLink, Link } from 'react-router-dom';
import "../navbar/Nav.css"


const Nav = () => {
    const [t,i18n]  = useTranslation();

    const handleChange = (e) => {
      i18n.changeLanguage(e.target.value);
    }
   
  return (
<>
<div className='p-6 flex justify-between items-center bg-[#FFFFFF] shadow-md  navbar '>
<div className='flex gap gap-4 items-center m-w-[220px] h-[36px text-[#424242] text-3xl font-bold leading-[36px] text-[#424242] justify-between '>
 <Link to={"/"}> <h1 className='text-3xl m-w-[220px] h-[36px text-[#424242]'> sad zeppelins</h1></Link>
  <img className=' w-[90px] ' src={me} alt="" />
</div>
<div className='flex gap-[40px]'>
<select   defaultValue={i18n.language} onChange={handleChange}className="select-custom til rounded-full">
  <option value="uz">UZ uz </option>
  <option value="en">EN us </option>
  <option value="ru">RU ru </option>
</select>
  <ul className="flex gap-10">
  <li className="flex gap-10">
    <NavLink to="/portfolio" className="nav-link ">{t("t1")} </NavLink>
    <NavLink to="/blog" className="nav-link">{t("t2")}</NavLink>
    <NavLink to="/cv" className="nav-link">{t("t3")}</NavLink>
    <NavLink to="/store" className="nav-link">{t("t4")}</NavLink>
    <NavLink to="/freelance" className="nav-link">{t("t5")}</NavLink>
    <NavLink to="/about" className="nav-link">{t("t6")}</NavLink>
    <NavLink to="/contact" className="nav-link">{t("t7")}</NavLink>
  </li>
</ul>

</div>

</div>
</>
  )
}

export default Nav