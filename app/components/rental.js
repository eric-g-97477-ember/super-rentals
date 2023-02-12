import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

class UpdateRouter extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

export default class RentalComponent extends Component {
  @tracked count = 0;

  @action
  increment() {
    this.count = this.count + 1;
  }

  @action
  decrement() {
    this.count = this.count - 1;
  }

  @action
  updateRouter() {
    console.log('updateRouter');
    UpdateRouter.map(function () {
      this.route('about');
      this.route('aaa');
    });
  }
}
