import style from './header.module.scss';
import classNames from 'classnames/bind';
const cv = classNames.bind(style);
function Header() {
    return (
        <div className={cv('header-container')}>
            <div className={cv('header')}>Content</div>
        </div>
    );
}

export default Header;
