import { lazy } from "react";

const Main  = lazy(() => import("./main/Main")) ;
const Main2  = lazy(() => import("./main2/Main2")) ;

export const routes = [
    { path: '/main1', component: Main },
    { path: '/main2', component: Main2 }
];
