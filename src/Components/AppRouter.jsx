import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/posts";
import {publicRoutes, privateRoutes} from "../router/routes";
import Login from "../pages/login";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?<Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.component />}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Posts />} />
            </Routes>
            :<Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.component />}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Login />} />
            </Routes>
    );
};

export default AppRouter;