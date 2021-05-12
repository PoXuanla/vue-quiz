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
          <select class="select" v-model="quizType.selectedCategory">
            <option v-if="category.length <= 0" value="-1">加載中...</option>
            <option value="0">Any</option>
            <option v-for="item in category" :key="item.id" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>

        <!-- 困難度 -->
        <div class="d-flex flex-column">
          <label class="mb-1 mt-1"> 困難度 </label>
          <select name="diff" class="select" v-model="quizType.selectedDiff">
            <option value="">無限制</option>
            <option value="easy">簡單</option>
            <option value="medium">一般</option>
            <option value="hard">困難</option>
          </select>
        </div>

        <!-- 答題模式 -->
        <div class="d-flex flex-column">
          <label class="mb-1 mt-1"> 答題模式 </label>
          <select class="select" v-model="quizType.selectedMode">
            <option value="">無限制</option>
            <option value="boolean">True/False</option>
            <option value="multiple">多選</option>
          </select>
        </div>
        <!-- 開始 -->
        <div class="d-flex justify-center">
          <router-link
            :to="{ name: 'Question', params: { quizType: quizType } }"
          >
            <button class="btn mt-1 mb-1">Go!</button>
          </router-link>
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
        quizType: {
          selectedCategory: -1,
          selectedDiff: "",
          selectedMode: "",
        },
      };
    },
    components: {},
    mounted() {
      this.$store.commit('arrivedHome')
      // get category
      this.$http
        .get("https://opentdb.com/api_category.php")
        .then((response) => {
          console.log(response);
          this.category = response.data.trivia_categories;
          this.quizType.selectedCategory = 0;
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