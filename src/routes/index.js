import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';
import DefaultLayout from '~';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: null },
    { path: '/search', component: Search, layout: null },
    { path: '/profile', component: Upload, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
