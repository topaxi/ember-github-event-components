import Component from 'ember-component'
import computed  from 'ember-computed'
import layout    from '../../templates/components/gh-event/public-event'

export default Component.extend({
  layout,
  classNames: [ 'simple' ],
  icon: 'repo'
})
