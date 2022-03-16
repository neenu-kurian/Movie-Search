import SearchPage from '../components/SearchPage';
import MovieDetail from "../components/MovieDetail";
import NotFoundPage from "../components/NotFoundPage";

const routes =  [
    {
        path: '/',
        component: SearchPage,
        redirect: '/search'
    },
    {
        path: '/search/:searchtext?',
        component: SearchPage,
    },
    {
        path: '/movie/:title',
        component: MovieDetail,
    },
    {
        path: "*",
        component: NotFoundPage
    }
]

export default routes;