<template>
    <div class="componentb">
        <b-card>
            <b-card-body>
                <b-row>
                    <b-col>
                        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                            <template #button-content>
                                <span style="color: #6BCACC;">Cost Detail <b-icon icon="chevron-down" aria-hidden="true" style="margin-left: 10px"></b-icon></span>
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
                              <input-desc name="desc" :index="row.index" placeholder="Description" :required="true" v-model="row.item.desc" />
                            </template>
                            <template #cell(qty)="row">
                              <input-qty name="qty" :index="row.index" type="number" placeholder="Qty" :required="true" v-model="row.item.qty" />
                            </template>
                            <template #cell(uom)="row">
                              <select-uom name="uom" :index="row.index" :required="true" :options="uomOptions" v-model="row.item.uom" />
                            </template>
                            <template #cell(unit_price)="row">
                              <input-unit-price name="unit_price" :index="row.index" type="number" placeholder="Unit Price" :required="true" v-model="row.item.unit_price" />
                            </template>
                            <template #cell(discount)="row">
                              <input-discount name="discount" :index="row.index" type="number" placeholder="Discount (%)" :required="true" v-model="row.item.discount" />
                            </template>
                            <template #cell(vat)="row">
                              <input-vat name="vat" :index="row.index" type="number" placeholder="VAT (%)" :required="true" v-model="row.item.vat" />
                            </template>
                            <template #cell(icon)>
                                <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                            </template>
                            <template #cell(currency)="row">
                              <select-currency name="currency" :index="row.index" :required="true" :options="currencyOptions" v-model="row.item.currency" />
                            </template>
                            <template #cell(vat_amount)="row">
                                <p class="text-center">{{ vatAmountFix(row.item).toFixed(2) }}</p>
                            </template>
                            <template #cell(sub_total)="row">
                                <p class="text-center">{{ subTotalFix(row.item).toFixed(2) }}</p>
                            </template>
                            <template #cell(total)="row">
                                <p class="text-center">{{ totalFix(row.item).toFixed(2) }}</p>
                            </template>
                            <template #cell(charge_to)="row">
                              <select-charge-to name="charge_to" :index="row.index" :required="true" :options="chargeToOptions" v-model="row.item.charge_to" />
                            </template>
                            <template #cell(index)="row">
                                <b-button @click="removeCostDetail(row.index)" title="Remove">
                                    <b-icon icon="dash-lg" aria-hidden="true"></b-icon>
                                </b-button>
                            </template>
                            <template #custom-foot>
                                <b-tr>
                                    <b-td colspan="7">
                                        <b-form inline>
                                            <label style="margin-right: 5px;">Exchange Rate 1 USD = </label>
                                            <b-form-input style="width: 100px" v-model="currency" disabled></b-form-input>
                                            <label style="margin-left: 5px;">AED</label>
                                        </b-form>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">AED in Total</p>
                                        <p class="text-center">USD in Total</p>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">{{ allVatAmountFixAed }}</p>
                                        <p class="text-center">{{ allVatAmountFixUsd }}</p>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">{{ allSubTotalFixAed }}</p>
                                        <p class="text-center">{{ allSubTotalFixUsd }}</p>
                                    </b-td>
                                    <b-td style="font-weight: bold;background-color: #F5F6F8">
                                        <p class="text-center">{{ allTotalFixAed }}</p>
                                        <p class="text-center">{{ allTotalFixUsd }}</p>
                                    </b-td>
                                    <b-td></b-td>
                                    <b-td>
                                        <b-button @click="addCostDetail" title="Add" variant="success" style="background-color: #56BDBE;border-color: #56BDBE;">
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
import AppInput from './AppInput.vue'
import AppSelect from './AppSelect.vue'
export default {
  name: 'ComponentB',
  components: {
    'input-desc': AppInput,
    'input-qty': AppInput,
    'input-unit-price': AppInput,
    'input-discount': AppInput,
    'input-vat': AppInput,
    'select-uom': AppSelect,
    'select-currency': AppSelect,
    'select-charge-to': AppSelect
  },
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
        { key: 'total', label: 'Total', thClass: 'text-center', thStyle: { width: '7%' } },
        { key: 'charge_to', label: 'Charge To', thStyle: { width: '10%' } },
        { key: 'index', label: '' }
      ],
      items: [
        { desc: null, qty: null, uom: null, unit_price: null, discount: 0, vat: 0, icon: null, currency: null, vat_amount: null, sub_total: null, total: null, charge_to: null, index: null }
      ],
      headVariants: 'light',
      footVariants: 'none',
      currency: 3.6725
    }
  },
  computed: {
    uomOptions () {
      return this.$store.state.uom.map(item => {
        return {
          value: item.id,
          text: item.name
        }
      })
    },
    currencyOptions () {
      return this.$store.state.currency.map(item => {
        return {
          value: item.id,
          text: item.name
        }
      })
    },
    chargeToOptions () {
      return this.$store.state.charge_to.map(item => {
        return {
          value: item.id,
          text: item.name
        }
      })
    },
    allSubTotalFixUsd () {
      const total = this.items
        .map(item => this.subTotalFixUsd(item))
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
      this.$store.commit('setTotal', { type: 'subtotal-usd', value: total })
      return total
    },
    allSubTotalFixAed () {
      const total = this.items
        .map(item => this.subTotalFixAed(item))
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
      this.$store.commit('setTotal', { type: 'subtotal-aed', value: total })
      return total
    },
    allVatAmountFixUsd () {
      const total = this.items
        .map(item => this.vatAmountFixUsd(item))
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
      this.$store.commit('setTotal', { type: 'vat-usd', value: total })
      return total
    },
    allVatAmountFixAed () {
      const total = this.items
        .map(item => this.vatAmountFixAed(item))
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
      this.$store.commit('setTotal', { type: 'vat-aed', value: total })
      return total
    },
    allTotalFixUsd () {
      const total = this.items
        .map(item => this.totalFixUsd(item))
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
      this.$store.commit('setTotal', { type: 'total-usd', value: total })
      return total
    },
    allTotalFixAed () {
      const total = this.items
        .map(item => this.totalFixAed(item))
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
      this.$store.commit('setTotal', { type: 'total-aed', value: total })
      return total
    }
  },
  methods: {
    addCostDetail () {
      this.items.push({ desc: null, qty: null, uom: null, unit_price: null, discount: 0, vat: 0, icon: null, currency: null, vat_amount: null, sub_total: null, total: null, charge_to: null, index: null })
    },
    removeCostDetail: function (index) {
      this.items.splice(index, 1)
      this.$store.commit('unsetCost', { index: index })
    },
    fetchUom () {
      this.$store.dispatch('fetchUom')
    },
    fetchCurrency () {
      this.$store.dispatch('fetchCurrency')
    },
    fetchChargeTo () {
      this.$store.dispatch('fetchChargeTo')
    },
    subTotalFix (item) {
      const total = (item.qty * item.unit_price) - (item.qty * item.unit_price * item.discount / 100)
      return total
    },
    subTotalFixUsd (item) {
      const total = item.currency ? item.currency === 1 ? this.subTotalFix(item) : this.subTotalFix(item) / this.currency : 0
      return total
    },
    subTotalFixAed (item) {
      const total = item.currency ? item.currency === 2 ? this.subTotalFix(item) : this.subTotalFix(item) * this.currency : 0
      return total
    },
    vatAmountFix (item) {
      const total = (item.qty * item.unit_price) * (item.vat) / 100
      return total
    },
    vatAmountFixUsd (item) {
      const total = item.currency ? item.currency === 1 ? this.vatAmountFix(item) : this.vatAmountFix(item) / this.currency : 0
      return total
    },
    vatAmountFixAed (item) {
      const total = item.currency ? item.currency === 2 ? this.vatAmountFix(item) : this.vatAmountFix(item) * this.currency : 0
      return total
    },
    totalFix (item) {
      const total = (this.subTotalFix(item) + this.vatAmountFix(item))
      return total
    },
    totalFixUsd (item) {
      const total = item.currency ? item.currency === 1 ? this.totalFix(item) : this.totalFix(item) / this.currency : 0
      return total
    },
    totalFixAed (item) {
      const total = item.currency ? item.currency === 2 ? this.totalFix(item) : this.totalFix(item) * this.currency : 0
      return total
    }
  },
  created () {
    this.fetchUom()
    this.fetchCurrency()
    this.fetchChargeTo()
  }
}
</script>
<style scoped>
    .text-center {
        text-align: center;
    }
    .btn-link {
        color: #6BCACC !important;
    }
</style>
