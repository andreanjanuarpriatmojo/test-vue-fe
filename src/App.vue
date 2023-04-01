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
                <b-button variant="link" size="lg" style="margin-right: 25px;margin-top: 20px;text-decoration: none;color: black">Cancel</b-button>
                <b-button variant="outline-secondary" size="lg" style="margin-left: 25px;margin-right: 25px;width: 200px;margin-top: 20px;">Save as Draft</b-button>
                <b-button variant="success" size="lg" style="margin-left: 25px;width: 250px;margin-top: 20px;">Submit</b-button>
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

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
