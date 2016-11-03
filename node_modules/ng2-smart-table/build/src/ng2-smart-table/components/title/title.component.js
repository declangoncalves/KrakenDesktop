"use strict";
var core_1 = require('@angular/core');
var data_source_1 = require('../../lib/data-source/data-source');
var column_1 = require('../../lib/data-set/column');
var TitleComponent = (function () {
    function TitleComponent() {
        this.currentDirection = '';
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source.onChanged().subscribe(function (elements) {
            var sortConf = _this.source.getSort();
            if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                _this.currentDirection = sortConf[0]['direction'];
            }
            else {
                _this.currentDirection = '';
            }
            sortConf.forEach(function (fieldConf) {
            });
        });
    };
    TitleComponent.prototype.sort = function () {
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction()
            }
        ]);
        return false;
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', column_1.Column)
    ], TitleComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', data_source_1.DataSource)
    ], TitleComponent.prototype, "source", void 0);
    TitleComponent = __decorate([
        core_1.Component({
            selector: 'ng2-smart-table-title',
            styles: [require('./title.scss')],
            template: "\n    <a href=\"#\"\n    *ngIf=\"column.isSortable\"\n    (click)=\"sort($event, column)\" \n    class=\"ng2-smart-sort-link sort\"\n    [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TitleComponent);
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;
