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
                        <b-button pill variant="secondary" size="sm" style="width: 175px;">Draft</b-button>
                        <hr>
                        <b-row>
                          <b-col cols="10" style="border-right: 1px dotted gainsboro;">
                              <b-row>
                                  <b-col cols="3">
                                      <b-form-group label="Assigned Vendor">
                                          <b-form-select v-model="forms.vendor" :options="vendorOptions" required></b-form-select>
                                      </b-form-group>
                                  </b-col>
                                  <b-col cols="3">
                                      <b-form-group label="Attention Of">
                                          <b-form-input v-model="forms.attention_of" required></b-form-input>
                                      </b-form-group>
                                  </b-col>
                                  <b-col cols="3">
                                      <b-form-group label="Quotation No.">
                                          <b-form-input v-model="forms.quotation_no" required></b-form-input>
                                      </b-form-group>
                                  </b-col>
                                  <b-col cols="3">
                                      <b-form-group label="Invoice To">
                                          <b-form-select v-model="forms.invoice" :options="invoiceOptions" required></b-form-select>
                                      </b-form-group>
                                  </b-col>
                                  <b-col cols="12">
                                      <b-form-group label="Vendor Address">
                                          <b-form-input v-model="forms.vendor_address" required></b-form-input>
                                      </b-form-group>
                                  </b-col>
                              </b-row>
                          </b-col>
                          <b-col cols="2">
                              <b-row>
                                  <b-col cols="12">
                                      <b-form-group label="Customer - Contract">
                                          <b-form-select v-model="customer" :options="customerOptions" required></b-form-select>
                                      </b-form-group>
                                  </b-col>
                                  <b-col cols="12">
                                      <b-form-group label="Customer PO No.">
                                          <b-form-select v-model="po" :options="poOptions" required></b-form-select>
                                      </b-form-group>
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
export default {
  name: 'ComponentA',
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
