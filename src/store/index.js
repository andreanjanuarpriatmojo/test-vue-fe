import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vendor: [],
    invoice: [],
    customer: [],
    po: [],
    uom: [],
    currency: [],
    charge_to: [],
    form: {},
    cost: [],
    total: {},
    vat_amount_aed: null,
    vat_amount_usd: null,
    sub_total_aed: null,
    sub_total_usd: null,
    total_aed: null,
    total_usd: null
  },
  getters: {
  },
  mutations: {
    setVendor (state, payload) {
      state.vendor = payload
    },
    setInvoice (state, payload) {
      state.invoice = payload
    },
    setCustomer (state, payload) {
      state.customer = payload
    },
    setPo (state, payload) {
      state.po = payload
    },
    setUom (state, payload) {
      state.uom = payload
    },
    setCurrency (state, payload) {
      state.currency = payload
    },
    setChargeTo (state, payload) {
      state.charge_to = payload
    },
    setForm (state, payload) {
      state.form = {
        ...state.form,
        [payload.key]: payload.value
      }
    },
    setCost (state, payload) {
      state.cost[payload.index] = {
        ...state.cost[payload.index],
        [payload.key]: payload.value
      }
    },
    unsetCost (state, payload) {
      state.cost.splice(payload.index, 1)
    },
    setTotal (state, payload) {
      if (payload.type === 'vat-aed') {
        state.vat_amount_aed = payload.value
      } else if (payload.type === 'vat-usd') {
        state.vat_amount_usd = payload.value
      } else if (payload.type === 'subtotal-aed') {
        state.sub_total_aed = payload.value
      } else if (payload.type === 'subtotal-usd') {
        state.sub_total_usd = payload.value
      } else if (payload.type === 'total-aed') {
        state.total_aed = payload.value
      } else if (payload.type === 'total-usd') {
        state.total_usd = payload.value
      }
    }
  },
  actions: {
    fetchVendor ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/instruction/vendor')
        .then(({ data }) => {
          // console.log(data)
          commit('setVendor', data.data)
        })
        .catch(console.log)
    },
    fetchInvoice ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/instruction/invoice')
        .then(({ data }) => {
          // console.log(data)
          commit('setInvoice', data.data)
        })
        .catch(console.log)
    },
    fetchCustomer ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/instruction/customer')
        .then(({ data }) => {
          // console.log(data)
          commit('setCustomer', data.data)
        })
        .catch(console.log)
    },
    fetchPo ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/instruction/po')
        .then(({ data }) => {
          // console.log(data)
          commit('setPo', data.data)
        })
        .catch(console.log)
    },
    fetchUom ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/cost/uom')
        .then(({ data }) => {
          // console.log(data)
          commit('setUom', data.data)
        })
        .catch(console.log)
    },
    fetchCurrency ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/cost/currency')
        .then(({ data }) => {
          // console.log(data)
          commit('setCurrency', data.data)
        })
        .catch(console.log)
    },
    fetchChargeTo ({ commit }) {
      axios.get('http://127.0.0.1:8000/api/cost/chargeto')
        .then(({ data }) => {
          // console.log(data)
          commit('setChargeTo', data.data)
        })
        .catch(console.log)
    },
    submit (context, payload) {
      console.log(payload)
      // const { form, cost, total } = payload
      // axios.post('yourlink', {
      //   form, cost, total
      // })
      //   .then(({ data }) => {
      //     console.log(data)
      //   })
      //   .catch(console.log)
    },
    draft (context, payload) {
      console.log(payload)
      // const { form, cost, total } = payload
      // axios.post('yourlink', {
      //   form, cost, total
      // })
      //   .then(({ data }) => {
      //     console.log(data)
      //   })
      //   .catch(console.log)
    }
  },
  modules: {
  }
})
