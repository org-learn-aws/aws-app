import './HomeView.css';

export function HomeView() {
  return <h1>Home</h1>;
}

export const HomeRoute = {
  path: '/',
  element: <HomeView />,
}
