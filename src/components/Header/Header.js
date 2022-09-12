import AuthBtn from '../AuthBtn/AuthBtn';
import style from './Header.module.scss';
import logo from '../../assets/logo.svg';
import search from '../../assets/search-icon.svg';

const Header = () => {
    return (
        <div className={style.header_wrapper}>
            <img className={style.logo} src={logo} alt="logo" />
            <div className={style.search_wrapper}>
                <input className={style.search} type="text" placeholder='Search' />
                <img className={style.search_icon} src={search} alt="search" />
            </div>
            <div className={style.auth}>
                <AuthBtn name='Login In' type='unfill' />
                <AuthBtn name='Register' type='fill' />
            </div>
        </div>
    );
}
 
export default Header;