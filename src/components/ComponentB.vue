<template>
    <div class="componentb">
        <b-card>
            <b-card-body>
                <b-row>
                    <b-col>
                        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none">
                            <template #button-content>
                                Cost Detail
                            </template>
                            <b-dropdown-item href="#">Action</b-dropdown-item>
                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                        </b-dropdown>
                        <b-table responsive :head-variant="headVariants" :items="items" :fields="fields">
                            <template #cell(desc)="row">
                                <b-form-input v-model="row.item.desc" required></b-form-input>
                            </template>
                            <template #cell(qty)="row">
                                <b-form-input v-model="row.item.qty" required></b-form-input>
                            </template>
                            <template #cell(index)>
                                <b-button title="Remove">
                                    <b-icon icon="dash-lg" aria-hidden="true"></b-icon>
                                </b-button>
                            </template>
                        </b-table>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'ComponentB',
  data () {
    return {
      fields: [
        { key: 'desc', label: 'Description' },
        { key: 'qty', label: 'Qty' },
        { key: 'uom', label: 'UOM' },
        { key: 'unit_price', label: 'Unit Price' },
        { key: 'discount', label: 'Discount (%)' },
        { key: 'vat', label: 'VAT (%)' },
        { key: 'currency', label: 'Currency' },
        { key: 'vat_amount', label: 'VAT Amount' },
        { key: 'sub_total', label: 'Sub Total' },
        { key: 'total', label: 'Total' },
        { key: 'charge_to', label: 'Charge To' },
        { key: 'index', label: '' }
      ],
      items: [
        { desc: 'test', qty: 'test', uom: 'test', unit_price: 'test', discount: 'test', vat: 'test', currency: 'test', vat_amount: 'test', sub_total: 'test', total: 'test', charge_to: 'test', index: 'test' },
        { desc: 'test', qty: 'test', uom: 'test', unit_price: 'test', discount: 'test', vat: 'test', currency: 'test', vat_amount: 'test', sub_total: 'test', total: 'test', charge_to: 'test', index: 'test' }
      ],
      headVariants: 'light'
    }
  }
}
</script>
<style scoped></style>
