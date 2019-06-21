import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('library');
  this.route('add-library');
  this.route('edit-library', { path: '/edit-library/:id' });
});

export default Router;
