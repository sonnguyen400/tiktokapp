import classNames from 'classnames/bind';
import style from './sidebar.module.scss';
const cx = classNames.bind(style);
function Sidebar() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>Sidebar</div>
        </div>
    );
}

export default Sidebar;
