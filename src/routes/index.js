import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  console.log('header: ' + header);
  console.log('content ' + content);

  header.innerHTML = await Header();
  let hash = getHash();
  console.log('hash: ' + hash);
  let route = await resolveRoutes(hash);
  console.log('route: ' + route);
  //debugger;
  console.log('-->' + routes[route])
  let render = routes[route] ? routes[route] : Error404;
  //console.log('render: ' + render);
  content.innerHTML = await render();
};

export default router;