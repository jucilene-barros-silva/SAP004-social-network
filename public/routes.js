
import { home } from './pages/home/main.js';
import { createAccount } from './pages/createAccount/main.js';
import { perfil } from './pages/perfil/main.js';
import { feed } from './pages/feedNoticias/main.js';
import { about } from './pages/about/main.js';

export default {
  home: home(),
  'create-account': createAccount(),
  perfil: perfil(),
  feed: feed(),
  about: about(),
};
