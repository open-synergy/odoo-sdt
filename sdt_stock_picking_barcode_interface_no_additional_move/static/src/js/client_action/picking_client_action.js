odoo.define('stock_barcode.picking_lot_validation_client_action', function (require) {
'use strict';

var core = require('web.core');
var PickingClientAction = require('stock_barcode.picking_client_action');

var _t = core._t;

var PickingLotValidationClientAction = PickingClientAction.include({
    init: function (parent, action) {
        this._super.apply(this, arguments);
    },

    _check_lot_stock: function (barcode, linesActions) {
        this.linesActions = linesActions
        var self = this;
        var def;
        var errorMessage;
        def = self._rpc({
            model: 'stock.production.lot',
            method: 'search_read',
            domain: [['name', '=', barcode]],
        });
        return def.then(function (res) {
            if (self.initialState.picking_type_code == 'outgoing' && ! res[0].quant_ids.length) {
                errorMessage = _t('The scanned lot is out of stock.');
                return self.do_warn(false, errorMessage);
            };
            return Promise.resolve({
                linesActions: linesActions
            });
        });
    },

    _step_lot: function (barcode, linesActions) {
        var self = this;
        var errorMessage;

        return this._super.apply(this, arguments).then(function (res) {
            return self._check_lot_stock(barcode, res.linesActions);
        });
    },

});
return PickingLotValidationClientAction;

});
