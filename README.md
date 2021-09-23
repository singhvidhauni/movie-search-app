# search-movie-app

## Vue-CLI Project, uses local Vue components
### Vue Components in the App component (<template> section)
```
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
```
### Vue Components in the App component, <script></script>
  
<script>
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
```
  
### Vue Components in the App component, <style></style>
<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Important Features used
**[Vue App uses local Vue Components]**<br>
**[Uses Bootstrap 4 for mobile first responsive app]**<br>
**[Uses a third party library mitt to dispatch events between components(Event Bus)]**<br>
**[Axios library to make ajax calls to TMDB(The Movie Database https://api.themoviedb.org))]**<br>

![image](https://user-images.githubusercontent.com/4363033/134492983-ad73c8b4-3891-47ed-90f3-fe8bd4a3fabb.png) ![image](https://user-images.githubusercontent.com/4363033/134493097-6ef5d615-2fcd-4f4b-9b11-002364e839eb.png)
![image](https://user-images.githubusercontent.com/4363033/134493217-cd6cca62-d8bf-4e98-8f7b-130161add153.png) ![image](https://user-images.githubusercontent.com/4363033/134493316-930aad7a-bbaf-4628-ac71-c5755eabf071.png)



