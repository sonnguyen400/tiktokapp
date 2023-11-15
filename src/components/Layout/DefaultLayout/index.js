import style from './defaultlayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
export { Sidebar, Header };
