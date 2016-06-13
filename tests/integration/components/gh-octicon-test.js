import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('gh-octicon', 'Integration | Component | gh octicon', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{gh-octicon}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#gh-octicon}}
      template block text
    {{/gh-octicon}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
