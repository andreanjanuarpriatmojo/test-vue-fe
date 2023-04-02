<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-card title="3rd Party Instruction" footer-tag="footer">
            <b-row>
              <b-col>
                <ComponentA style="margin-top: 75px"/>
                <ComponentB />
              </b-col>
            </b-row>
            <template #footer>
              <div style="float: right; height: 75px;">
                <AppButton @hit-click="reset" variant="link" size="lg" label="Cancel" style="margin-right: 25px;margin-top: 20px;text-decoration: none;color: black"/>
                <AppButton @hit-click="draft" variant="outline-secondary" size="lg" label="Save as Draft" style="margin-left: 25px;margin-right: 25px;width: 200px;margin-top: 20px;"/>
                <AppButton @hit-click="submit" variant="success" size="lg" label="Submit" style="margin-left: 25px;width: 250px;margin-top: 20px;"/>
              </div>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
import AppButton from './components/AppButton.vue'

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB,
    AppButton
  },
  data () {
    return { }
  },
  methods: {
    validateForm () {
      const form = this.$store.state.form
      if (form.vendor && form.attention_of && form.quotation_no && form.invoice && form.vendor_address && form.customer && form.po) {
        return true
      } else {
        return false
      }
    },
    validateCost () {
      const cost = this.$store.state.cost
      if (cost.length > 0) {
        for (let x = 0; x < cost.length; x++) {
          if (cost[x].desc && cost[x].qty && cost[x].uom && cost[x].unit_price && cost[x].currency && cost[x].charge_to) {
            return true
          }
        }
        return false
      } else {
        return false
      }
    },
    reset () {
      console.log('reset')
    },
    draft () {
      const cost = this.$store.state.cost
      for (let x = 0; x < cost.length; x++) {
        cost[x].vat_amount = (cost[x].qty * cost[x].unit_price) * (cost[x].vat) / 100
        cost[x].sub_total = (cost[x].qty * cost[x].unit_price) - (cost[x].qty * cost[x].unit_price * cost[x].discount / 100)
        cost[x].total = (cost[x].vat_amount + cost[x].sub_total)
      }
      const payload = {
        form: this.$store.state.form,
        cost: cost,
        total: {
          vat_aed: this.$store.state.vat_amount_aed,
          vat_usd: this.$store.state.vat_amount_usd,
          sub_aed: this.$store.state.sub_total_aed,
          sub_usd: this.$store.state.sub_total_usd,
          total_aed: this.$store.state.total_aed,
          total_usd: this.$store.state.total_usd
        }
      }
      this.$store.dispatch('draft', payload)
    },
    submit () {
      if (this.validateForm() && this.validateCost()) {
        const cost = this.$store.state.cost
        for (let x = 0; x < cost.length; x++) {
          cost[x].vat_amount = (cost[x].qty * cost[x].unit_price) * (cost[x].vat) / 100
          cost[x].sub_total = (cost[x].qty * cost[x].unit_price) - (cost[x].qty * cost[x].unit_price * cost[x].discount / 100)
          cost[x].total = (cost[x].vat_amount + cost[x].sub_total)
        }
        const payload = {
          form: this.$store.state.form,
          cost: cost,
          total: {
            vat_aed: this.$store.state.vat_amount_aed,
            vat_usd: this.$store.state.vat_amount_usd,
            sub_aed: this.$store.state.sub_total_aed,
            sub_usd: this.$store.state.sub_total_usd,
            total_aed: this.$store.state.total_aed,
            total_usd: this.$store.state.total_usd
          }
        }
        this.$store.dispatch('submit', payload)
      } else {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill all form!'
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.cancelButton {
  margin-right: 25px;
  margin-top: 20px;
  text-decoration: none;
  color: black
}
</style>
