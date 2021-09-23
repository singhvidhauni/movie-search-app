<template>
  <div class="offset-sm-1 col-sm-5 mx-auto">
    <div class="pull-right px-3 my-3" v-if="searchedMovies.length !== 0">
      <form action="#">
        <div class="form-group">
          <label
            data-toggle="tooltip"
            data-placement="left"
            title="This demonstrates a query duration."
            ><strong>Query Duration</strong></label
          >
          <p class="text-mute">{{ queryDuration }} secs.</p>
        </div>

        <div class="form-group">
          <label
            data-toggle="tooltip"
            data-placement="left"
            title="This demonstrates the 'count' parameter."
            ><strong>Query Results</strong></label
          >
          <p class="text-mute">{{ resultCount }}</p>
        </div>

        <div class="form-group">
          <label data-toggle="tooltip"><strong>Disclaimer</strong></label>
          <p class="card-body card-text text-justify text-mute">
            The data in this search service is fictional. It is not intended to
            be used for real beers.
            <br /><br />
            The data in this search service is in a shared environment. There
            may be other individuals modifying the data while you're using it.
            Please be aware that you may experience unexpected results because
            of this.
            <br /><br />
            You can reset the data to its original state by clicking the button
            below.
            <br /><br />
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ResultUI',
  data() {
    return {
      searchedMovies: [],
      queryDuration: 0,
      resultCount: 0,
    };
  },
  methods: {
    updateDisclaimerInfo(result) {
      // eslint-disable-next-line no-undef
      this.queryDuration = result.queryDuration;
      this.resultCount = result.count;
      this.searchedMovies = result.results;
    },
  },
  created() {
    this.eventBus.on('resultFetched', this.updateDisclaimerInfo);
  },
};
</script>
<style>

</style>
