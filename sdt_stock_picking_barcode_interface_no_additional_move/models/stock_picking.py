from odoo import api, fields, models, _
from odoo.exceptions import ValidationError


class StockPicking(models.Model):
    _inherit = 'stock.picking'

    def _check_product(self, product, qty=1.0):
        if product.id not in self.move_ids_without_package.mapped('product_id.id'):
            raise ValidationError(_(f'Product {product.display_name} is invalid.'))
        res = super(StockPicking, self)._check_product(product, qty)
        return res
