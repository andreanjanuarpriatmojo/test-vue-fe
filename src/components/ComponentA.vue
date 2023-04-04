<template>
    <div class="componenta">
        <b-card>
            <b-card-body>
                <b-row>
                    <b-col cols="2">
                        <b-dropdown variant="outline-secondary" style="width: 100%">
                            <template #button-content>
                                <b-icon icon="truck" aria-hidden="true" style="margin-right: 10px;color: #6BCACC;"></b-icon>  Logistic Instruction
                            </template>
                            <b-dropdown-item><b-icon icon="globe2" aria-hidden="true" style="margin-right: 10px;color: #6BCACC;"></b-icon>  Send Instruction</b-dropdown-item>
                            <b-dropdown-item><b-icon icon="gear-wide-connected" aria-hidden="true" style="margin-right: 10px;color: #6BCACC;"></b-icon>  Admin Instruction</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col cols="10">
                        <AppButton :pill="true" label="Draft" variant="secondary" size="sm" style="width: 175px;"/>
                        <hr>
                        <b-row>
                          <b-col cols="10" style="border-right: 1px dotted gainsboro;">
                              <b-row>
                                  <b-col cols="3">
                                    <select-vendor label="Assigned Vendor" name="vendor" :required="true" :options="vendorOptions" v-model="forms.vendor" />
                                  </b-col>
                                  <b-col cols="3">
                                    <input-attention label="Attention Of" name="attention_of" :required="true" v-model="forms.attention_of" />
                                  </b-col>
                                  <b-col cols="3">
                                    <input-quotation label="Quotation No." name="quotation_no" :required="true" v-model="forms.quotation_no" />
                                  </b-col>
                                  <b-col cols="3">
                                    <select-invoice label="Invoice To" name="invoice" :required="true" :options="invoiceOptions" v-model="forms.invoice" />
                                  </b-col>
                                  <b-col cols="12">
                                    <input-address label="Vendor Address" name="vendor_address" :required="true" v-model="forms.vendor_address" />
                                  </b-col>
                              </b-row>
                          </b-col>
                          <b-col cols="2">
                              <b-row>
                                  <b-col cols="12">
                                    <select-customer label="Customer - Contract" name="customer" :required="true" :options="customerOptions" v-model="forms.customer" />
                                  </b-col>
                                  <b-col cols="12">
                                    <select-po label="Customer PO No." name="po" :required="true" :options="poOptions" v-model="forms.po" />
                                  </b-col>
                              </b-row>
                          </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'
import AppSelect from './AppSelect.vue'
export default {
  name: 'ComponentA',
  components: {
    AppButton,
    'input-attention': AppInput,
    'input-quotation': AppInput,
    'input-address': AppInput,
    'select-vendor': AppSelect,
    'select-invoice': AppSelect,
    'select-customer': AppSelect,
    'select-po': AppSelect
  },
  data () {
    return {
      forms: {
        vendor: null,
        attention_of: null,
        quotation_no: null,
        invoice: null,
        vendor_address: null,
        customer: null,
        po: null
      }
    }
  },
  computed: {
    vendorOptions () {
      return this.$store.state.vendor.map(item => {
        return {
          value: item.id,
          text: item.name
        }
      })
    },
    invoiceOptions () {
      return this.$store.state.invoice.map(item => {
        return {
          value: item.id,
          text: item.name
        }
      })
    },
    customerOptions () {
      return this.$store.state.customer.map(item => {
        return {
          value: item.id,
          text: item.name
        }
      })
    },
    poOptions () {
      return this.$store.state.po.map(item => {
        return {
          value: item.id,
          text: item.number
        }
      })
    }
  },
  methods: {
    fetchVendor () {
      this.$store.dispatch('fetchVendor')
    },
    fetchInvoice () {
      this.$store.dispatch('fetchInvoice')
    },
    fetchCustomer () {
      this.$store.dispatch('fetchCustomer')
    },
    fetchPo () {
      this.$store.dispatch('fetchPo')
    },
    getAll () {
      console.log(this.forms)
    }
  },
  created () {
    this.fetchVendor()
    this.fetchInvoice()
    this.fetchCustomer()
    this.fetchPo()
  }
}
</script>
