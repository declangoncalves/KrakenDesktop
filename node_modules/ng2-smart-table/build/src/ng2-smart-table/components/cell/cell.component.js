"use strict";
var core_1 = require('@angular/core');
var cell_1 = require('../../lib/data-set/cell');
var CellComponent = (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.edited = new core_1.EventEmitter();
    }
    CellComponent.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    CellComponent.prototype.onEdited = function (event) {
        this.edited.emit(event);
        return false;
    };
    CellComponent.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cell_1.Cell)
    ], CellComponent.prototype, "cell", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CellComponent.prototype, "inputClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CellComponent.prototype, "mode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CellComponent.prototype, "edited", void 0);
    CellComponent = __decorate([
        core_1.Component({
            selector: 'ng2-smart-table-cell',
            styles: [require('./cell.scss')],
            template: "\n    <div *ngIf=\"!cell.getRow().isInEditing && cell.getColumn().type !== 'html'\">{{ cell.getValue() }}</div>\n    <div *ngIf=\"!cell.getRow().isInEditing && cell.getColumn().type === 'html'\" [innerHTML]=\"cell.getValue()\"></div>\n    <input *ngIf=\"cell.getRow().isInEditing\" \n      [ngClass]=\"inputClass\"\n      class=\"form-control\"\n      [(ngModel)]=\"cell.newValue\"\n      [name]=\"cell.getColumn().id\" \n      [placeholder]=\"cell.getColumn().title\"\n      [disabled]=\"!cell.getColumn().isEditable\"\n      (click)=\"onClick($event)\"\n      (keydown.enter)=\"onEdited($event)\" \n      (keydown.esc)=\"onStopEditing()\">\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CellComponent);
    return CellComponent;
}());
exports.CellComponent = CellComponent;
