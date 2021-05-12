<template>
  <div>
    <div class="p-1 bg-green d-flex justify-around">
      <div>{{ currentQuestion.category }}</div>
      <div>{{ currentQuestion.difficulty }}</div>
    </div>
    <div class="p-1 bg-pink">
      <loading :active.sync="isLoading"></loading>
      <!-- 題目名稱 -->
      <div class="d-flex flex-column w-70 m-auto font-weight-900">
        {{ currentQuestion.question }}
      </div>
      <hr class="hr" />
      <!-- 題目選項 -->
      <div class="d-flex flex-column align-items-center">
        <option-data
          v-for="item in currentQuestion.ramdomAnswer"
          :key="item"
          :value="item"
          :class="{ active: item === selectOption }"
          @selfClick="optionClick"
        >
        </option-data>
        <div>
          <button
            class="btn mt-1 mb-1"
            v-if="currentIndex === 9"
            :disabled="selectOption === ''"
            @click="goAnswerPage()"
          >
            提交
          </button>
          <button
            class="btn mt-1 mb-1"
            :disabled="selectOption === ''"
            v-else
            @click="nextQuestion()"
          >
            下一題
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import optionData from "@/components/question/OptionData.vue";
  export default {
    name: "Question",
    data() {
      return {
        selectOption: "",
        question: [],
        currentIndex: 0,
        currentQuestion: {},
        isLoading: true,
      };
    },
    mounted() {
      this.$store.commit("initQA");
      let quizType = this.$route.params.quizType; //url : Home傳過來的參數
      this.getQuestionData(quizType);
    },
    methods: {
      optionClick(value) {
        console.log("parentClick");
        this.selectOption = value;
      },
      nextQuestion() {
        this.currentIndex += 1;
        this.$store.commit("pushQuestion", this.currentQuestion);
        this.$store.commit("pushUserAnswer", this.selectOption);
        // clear
        this.selectOption = "";
      },
      goAnswerPage() {
        this.$store.commit("pushQuestion", this.currentQuestion);
        this.$store.commit("pushUserAnswer", this.selectOption);
        this.$router.replace({ name: "Answer" });
        this.selectOption = "";
      },
      getQuestionData(quizType) {
        console.log("執行getQuestionData");
        //ajax 題目api
        let api = "https://opentdb.com/api.php?amount=10";
        let category =
          quizType.selectedCategory === "0"
            ? ""
            : `&category=${quizType.selectedCategory}`;
        //api 參數
        let diff =
          quizType.selectedDiff === ""
            ? ""
            : `&difficulty=${quizType.selectedDiff}`;
        let mode =
          quizType.selectedMode === "" ? "" : `&type=${quizType.selectedMode}`;
        //組合 api
        api = api + category + diff + mode;
        this.$http.get(api).then((response) => {
          console.log(response.data.response_code + "code");
          if (response.data.response_code === 1) {
            this.$router.replace({ name: "Home" });
          } else {
            this.question = response.data.results;
            this.isLoading = false;
          }
        });
      },
      randomOption() {
        let randomOptionArray = [];
        if (
          this.currentQuestion.correct_answer === "True" ||
          this.currentQuestion.correct_answer === "False"
        ) {
          return ["True", "False"];
        } else {
          randomOptionArray.push(this.currentQuestion.correct_answer);
          this.currentQuestion.incorrect_answers.forEach((element) => {
            randomOptionArray.push(element);
          });
          randomOptionArray.sort(() => Math.random() - 0.5);
          console.log("array", randomOptionArray);
          return randomOptionArray;
        }
      },
    },
    watch: {
      question() {
        this.currentQuestion = this.question[0];
      },
      currentIndex() {
        this.currentQuestion = this.question[this.currentIndex];
      },
      currentQuestion() {
        this.currentQuestion.ramdomAnswer = this.randomOption();
      },
    },
    components: {
      optionData,
    },
  };
</script>
<style lang="scss">
</style>