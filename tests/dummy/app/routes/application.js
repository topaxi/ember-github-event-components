import Route from 'ember-route'
import EVENT_STREAM from '../event-stream'

export default Route.extend({
  model() {
    return EVENT_STREAM
  }
})
