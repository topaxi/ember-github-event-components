import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('gh-event/pull-request-event', 'Integration | Component | gh event/pull request event', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{gh-event/pull-request-event}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#gh-event/pull-request-event}}
      template block text
    {{/gh-event/pull-request-event}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
