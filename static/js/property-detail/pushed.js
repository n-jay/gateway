/**
 * PushedDetail
 *
 * A bubble showing pushed state.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

const StringLabelDetail = require('./string-label');
const Utils = require('../utils');

class PushedDetail extends StringLabelDetail {
  constructor(thing, name, property) {
    super(thing, name, property.label || 'Pushed');
    this.id = `pushed-${Utils.escapeHtmlForIdClass(this.name)}`;
  }

  view() {
    return `
      <webthing-pushed-property data-value="NOT PUSHED"
        data-name="${Utils.escapeHtml(this.label)}" id="${this.id}">
      </webthing-pushed-property>`;
  }

  update(value) {
    if (!this.label) {
      return;
    }

    this.labelElement.value = value ? 'PUSHED' : 'NOT PUSHED';
    this.labelElement.inverted = value;
  }
}

module.exports = PushedDetail;
