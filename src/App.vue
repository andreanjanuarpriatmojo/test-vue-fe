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
                <AppButton variant="link" size="lg" label="Cancel" style="margin-right: 25px;margin-top: 20px;text-decoration: none;color: black"/>
                <AppButton variant="outline-secondary" size="lg" label="Save as Draft" style="margin-left: 25px;margin-right: 25px;width: 200px;margin-top: 20px;"/>
                <AppButton variant="success" size="lg" label="Submit" style="margin-left: 25px;width: 250px;margin-top: 20px;"/>
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
