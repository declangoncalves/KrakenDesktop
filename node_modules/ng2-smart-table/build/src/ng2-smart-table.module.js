"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng2_smart_table_directives_1 = require('./ng2-smart-table.directives');
var cell_component_1 = require('./ng2-smart-table/components/cell/cell.component');
var filter_component_1 = require('./ng2-smart-table/components/filter/filter.component');
var pager_component_1 = require('./ng2-smart-table/components/pager/pager.component');
var title_component_1 = require('./ng2-smart-table/components/title/title.component');
var Ng2SmartTableModule = (function () {
    function Ng2SmartTableModule() {
    }
    Ng2SmartTableModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                cell_component_1.CellComponent,
                filter_component_1.FilterComponent,
                pager_component_1.PagerComponent,
                title_component_1.TitleComponent
            ].concat(ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES),
            exports: ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2SmartTableModule);
    return Ng2SmartTableModule;
}());
exports.Ng2SmartTableModule = Ng2SmartTableModule;
