import Component from 'ember-component'
import computed  from 'ember-computed'
import layout    from '../../templates/components/gh-event/release-event'

export default Component.extend({
  layout,
  classNames: [ 'simple' ],
  icon: 'tag'
})
