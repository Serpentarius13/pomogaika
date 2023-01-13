interface IRoute {
  path: string;
  component: any;
  name?: string;
}

const routes: IRoute[] = [
  { path: "/", component: () => import("@/views/PageHome.vue"), name: "Home" },
];

export default routes;
