import About from "../pages/about";
import PostIdPage from "../pages/postIdPage";
import Posts from "../pages/posts";
import Login from "../pages/login";

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]