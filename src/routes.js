import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Caio Robert',
    email: 'caio.robert@live.com',
    password_hash: '21465813531',
  });

  return res.json(user);
});

export default routes;
