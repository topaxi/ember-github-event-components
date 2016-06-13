import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('gh-event/watch-event', 'Integration | Component | gh event/watch event', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{gh-event/watch-event}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#gh-event/watch-event}}
      template block text
    {{/gh-event/watch-event}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
