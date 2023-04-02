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
    cost: []
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
    fetchVendorForm (commit, payload) {
      commit('setVendorForm', payload)
    }
  },
  modules: {
  }
})
