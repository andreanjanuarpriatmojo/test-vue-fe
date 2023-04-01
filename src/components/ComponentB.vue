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
                        <b-table responsive :head-variant="headVariants" :foot-variant="footVariants" :items="items" :fields="fields" style="margin-top: 20px;" outlined>
                            <template v-slot:head()="data">
                                <span v-b-tooltip.hover :title='data.field.label'>
                                    {{ data.label }}
                                </span>
                            </template>
                            <template #cell(desc)="row">
                                <b-form-input v-model="row.item.desc" type="text" placeholder="Description" required></b-form-input>
                            </template>
                            <template #cell(qty)="row">
                                <b-form-input v-model="row.item.qty" type="number" placeholder="Qty" required></b-form-input>
                            </template>
                            <template #cell(uom)="row">
                                <b-form-select v-model="row.item.uom" required></b-form-select>
                            </template>
                            <template #cell(unit_price)="row">
                                <b-form-input v-model="row.item.unit_price" type="number" placeholder="Unit Price" required></b-form-input>
                            </template>
                            <template #cell(discount)="row">
                                <b-form-input v-model="row.item.discount" type="number" placeholder="Discount (%)" required></b-form-input>
                            </template>
                            <template #cell(vat)="row">
                                <b-form-input v-model="row.item.vat" type="number" placeholder="VAT (%)" required></b-form-input>
                            </template>
                            <template #cell(icon)>
                                <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                            </template>
                            <template #cell(currency)="row">
                                <b-form-select v-model="row.item.currency" required></b-form-select>
                            </template>
                            <template #cell(vat_amount)>
                                <p class="text-center">{{ '0.00' }}</p>
                            </template>
                            <template #cell(sub_total)>
                                <p class="text-center">{{ '0.00' }}</p>
                            </template>
                            <template #cell(total)>
                                <p class="text-center">{{ '0.00' }}</p>
                            </template>
                            <template #cell(charge_to)="row">
                                <b-form-select v-model="row.item.charge_to" required></b-form-select>
                            </template>
                            <template #cell(index)>
                                <b-button title="Remove">
                                    <b-icon icon="dash-lg" aria-hidden="true"></b-icon>
                                </b-button>
                            </template>
                            <!-- <template #foot(index)>
                                <b-button title="Add" variant="success">
                                    <b-icon icon="plus-lg" aria-hidden="true"></b-icon>
                                </b-button>
                            </template> -->
                            <template #custom-foot>
                                <b-tr>
                                    <b-td colspan="7">
                                        <b-form inline>
                                            <label style="margin-right: 5px;">Exchange Rate 1 USD = </label>
                                            <b-form-input style="width: 100px" v-model="currency"></b-form-input>
                                            <label style="margin-left: 5px;">AED</label>
                                        </b-form>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">AED in Total</p>
                                        <p class="text-center">USD in Total</p>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">{{ '0.00' }}</p>
                                        <p class="text-center">{{ '0.00' }}</p>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">{{ '0.00' }}</p>
                                        <p class="text-center">{{ '0.00' }}</p>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">{{ '0.00' }}</p>
                                        <p class="text-center">{{ '0.00' }}</p>
                                    </b-td>
                                    <b-td></b-td>
                                    <b-td>
                                        <b-button title="Add" variant="success">
                                            <b-icon icon="plus-lg" aria-hidden="true"></b-icon>
                                        </b-button>
                                    </b-td>
                                </b-tr>
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
        { key: 'desc', label: 'Description', thStyle: { width: '15%' } },
        { key: 'qty', label: 'Qty', thStyle: { width: '7%' } },
        { key: 'uom', label: 'UOM', thStyle: { width: '7%' } },
        { key: 'unit_price', label: 'Unit Price', thStyle: { width: '10%' } },
        { key: 'discount', label: 'Discount (%)', thStyle: { width: '7%' } },
        { key: 'vat', label: 'VAT (%)', thStyle: { width: '7%' } },
        { key: 'icon', label: '' },
        { key: 'currency', label: 'Currency' },
        { key: 'vat_amount', label: 'VAT Amount', thClass: 'text-center' },
        { key: 'sub_total', label: 'Sub Total', thClass: 'text-center' },
        { key: 'total', label: 'Total', thClass: 'text-center' },
        { key: 'charge_to', label: 'Charge To', thStyle: { width: '15%' } },
        { key: 'index', label: '' }
      ],
      items: [
        { desc: null, qty: null, uom: null, unit_price: null, discount: 0, vat: 0, icon: null, currency: null, vat_amount: null, sub_total: null, total: null, charge_to: null, index: null },
        { desc: null, qty: null, uom: null, unit_price: null, discount: 0, vat: 0, icon: null, currency: null, vat_amount: null, sub_total: null, total: null, charge_to: null, index: null }
      ],
      headVariants: 'light',
      footVariants: 'none',
      currency: 3.6725
    }
  }
}
</script>
<style scoped>
    .text-center {
        text-align: center;
    }
</style>
