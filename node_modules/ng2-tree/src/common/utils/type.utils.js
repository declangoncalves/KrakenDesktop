"use strict";
var _ = require('lodash');
function applyNewValueToRenamable(value, newValue) {
    var renamableValue = _.merge({}, value);
    renamableValue.setName(newValue);
    return renamableValue;
}
exports.applyNewValueToRenamable = applyNewValueToRenamable;
function isValueEmpty(value) {
    return _.isEmpty(_.trim(value));
}
exports.isValueEmpty = isValueEmpty;
function isRenamable(value) {
    return value.setName !== undefined;
}
exports.isRenamable = isRenamable;
//# sourceMappingURL=type.utils.js.map