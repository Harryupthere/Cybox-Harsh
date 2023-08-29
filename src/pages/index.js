import HomeOne from "./HomeOne";
import FAQ from "./FAQ";
import Page404 from "./404";
import RoadMapOne from "./RoadMapOne";
import RoadMapTwo from "./RoadMapTwo";

const routes = [
  { path: "/", component: <HomeOne /> },
  { path: "/tree-structure", component: <FAQ /> },
  { path: "/404", component: <Page404 /> },
  { path: "/uplines", component: <RoadMapOne /> },
  { path: "/direct-referral", component: <RoadMapTwo /> },
];

export default routes;
