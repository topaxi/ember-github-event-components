import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('gh-event/issues-event', 'Integration | Component | gh event/issues event', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{gh-event/issues-event}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#gh-event/issues-event}}
      template block text
    {{/gh-event/issues-event}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
