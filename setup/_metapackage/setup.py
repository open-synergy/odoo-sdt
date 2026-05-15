import setuptools

with open('VERSION.txt', 'r') as f:
    version = f.read().strip()

setuptools.setup(
    name="odoo-addons-open-synergy-odoo-sdt",
    description="Meta package for open-synergy-odoo-sdt Odoo addons",
    version=version,
    install_requires=[
        'odoo-addon-sdt_pos_invoice_always_active>=16.0dev,<16.1dev',
    ],
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Odoo',
        'Framework :: Odoo :: 16.0',
    ]
)
