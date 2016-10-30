/**
 * Created by jack on 10/29/16.
 */
import { Template } from 'meteor/templating';

import { Tasks } from '../api/task.js';

import './task.html';

Template.task.events({
    'click .toggle-checked'() {
        // set it to opposite checked value
        Tasks.update(this._id, {
            $set: { checked: ! this.checked },
        });
    },
    'click .delete'() {
        Tasks.remove(this._id);
    },
});