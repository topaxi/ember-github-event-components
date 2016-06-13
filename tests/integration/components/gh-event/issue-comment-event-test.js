import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('gh-event/issue-comment-event', 'Integration | Component | gh event/issue comment event', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{gh-event/issue-comment-event}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#gh-event/issue-comment-event}}
      template block text
    {{/gh-event/issue-comment-event}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
