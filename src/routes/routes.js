import SearchPage from '../components/SearchPage';
import MovieDetail from "../components/MovieDetail";

const routes =  [
    {
        path: '/',
        component: SearchPage,
    },
    {
        path: '/movie/:id',
        component: MovieDetail,
    },
]

export default routes;