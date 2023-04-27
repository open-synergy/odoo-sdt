/*
Copyright 2023 OpenSynergy Indonesia
Copyright 2023 PT. Simetri Sinergi Indonesia
License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl-3.0-standalone.html).
*/
odoo.define("sdt_pos_invoice_always_active.models", function (require) {
    "use strict";

    var models = require("point_of_sale.models");
    const {Order} = require("point_of_sale.models");
    const Registries = require("point_of_sale.Registries");

    const PosInvoiceAlwaysActiveOrder = (Order) =>
        class PosInvoiceAlwaysActiveOrder extends Order {
            constructor() {
                super(...arguments);
                this.to_invoice = true;
            }
            set_to_invoice(to_invoice) {
                this.assert_editable();
                this.to_invoice = true;
            }
        };
    Registries.Model.extend(Order, PosInvoiceAlwaysActiveOrder);
});
