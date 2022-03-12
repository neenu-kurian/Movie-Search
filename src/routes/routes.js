import SearchPage from '../components/SearchPage';
import MovieDetail from "../components/MovieDetail";

const routes =  [
    {
        path: '/',
        component: SearchPage,
    },
    {
        path: '/movie/:title',
        component: MovieDetail,
    },
]

export default routes;