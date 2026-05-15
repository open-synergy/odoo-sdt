import setuptools

with open('VERSION.txt', 'r') as f:
    version = f.read().strip()

setuptools.setup(
    name="odoo14-addons-open-synergy-odoo-sdt",
    description="Meta package for open-synergy-odoo-sdt Odoo addons",
    version=version,
    install_requires=[
        'odoo14-addon-sdt_stock_picking_barcode_interface_no_additional_move',
    ],
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Odoo',
        'Framework :: Odoo :: 14.0',
    ]
)
