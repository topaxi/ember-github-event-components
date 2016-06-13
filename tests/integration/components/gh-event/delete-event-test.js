import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gh-event/delete-event', 'Integration | Component | gh event/delete event', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gh-event/delete-event}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gh-event/delete-event}}
      template block text
    {{/gh-event/delete-event}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
