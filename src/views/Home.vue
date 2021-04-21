<template>
  <div>
    <div class="p-1 bg-green">
      <p class="text-center">答題測驗</p>
    </div>

    <div class="p-1 bg-pink">
      <div class="d-flex flex-column w-70 m-auto">
        <!-- 分類 -->
        <div class="d-flex flex-column">
          <label class="mb-1 mt-1"> 分類 </label>
          <select class="select" v-model="selectedCategory">
            <option v-if="category.length <= 0" value="loading">
              加載中...
            </option>
            <option v-for="item in category" :key="item.id" :value="item.name">
              {{ item.name }}
            </option>
          </select>
        </div>

        <!-- 困難度 -->
        <div class="d-flex flex-column">
          <label class="mb-1 mt-1"> 困難度 </label>
          <select name="diff" class="select" v-model="selectedDiff">
            <option value="easy">簡單</option>
            <option value="medium">一般</option>
            <option value="hard">困難</option>
          </select>
        </div>

        <!-- 答題模式 -->
        <div class="d-flex flex-column">
          <label class="mb-1 mt-1"> 答題模式 </label>
          <select class="select" v-model="selectedMode">
            <option value="">無限制</option>
            <option value="boolean">True/False</option>
            <option value="multiple">多選</option>
          </select>
        </div>
        <!-- 開始 -->
        <div class="d-flex justify-center">
          <a class="btn mt-1 mb-1">開始</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Home",
    data() {
      return {
        category: [],
        selectedCategory: "loading",
        selectedDiff: "easy",
        selectedMode: "",
      };
    },
    components: {},
    mounted() {
      this.$http
        .get("https://opentdb.com/api_category.php")
        .then((response) => {
          console.log(response);
          this.category = response.data.trivia_categories;
          this.selectedCategory = this.category[0].name;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
</script>
<style lang="scss" scoped>
@media (max-width: 700px) {
}
</style>