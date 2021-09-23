<template>
  <div class="container-fluid">
      <div id="movieapp">
          <!-- Search Field of the App -->
          <SearchField/>

          <div class="result">
              <div class="row">
                  <!-- <div class="col-xs-12">
                      <p class="px-3 text-mute" v-html="noResultsMessage"></p>
                  </div> -->

                  <!-- Search Result list Component -->
                  <ResultUI/>
                  <!-- Disclaimer Text -->
                  <Disclaimer/>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import SearchField from './components/searchfield/SearchField.vue';
import ResultUI from './components/resultslist/ResultUI.vue';
import Disclaimer from './components/disclaimer/Disclaimer.vue';

export default {
  name: 'App',
  methods: {
    updateDisclaimerInfo(results) {
      // eslint-disable-next-line no-undef
      this.moviesSearched = results;
    },
  },
  components: {
    SearchField,
    ResultUI,
    Disclaimer,
  },
  created() {
    this.eventBus.on('resultFetched', this.updateDisclaimerInfo);
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
