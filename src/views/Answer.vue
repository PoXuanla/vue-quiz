<template>
  <div>
    <div class="p-1 bg-green">
      <p class="text-center">對答案~</p>
    </div>
    <div class="text-center p-1 bg-dark-pink border-radius-bottom">
      答對題數 {{ countCorrectAnswer }} 題
    </div>
    <answer-data
      v-for="(n, index) in question"
      :key="index"
      :question="question[index]"
      :userAnswer="userAnswer[index]"
    ></answer-data>
    <!-- <answer-data></answer-data> -->
  </div>
</template>

<script>
  import answerData from "@/components/answer/AnswerData.vue";
  export default {
    name: "Answer",
    data() {
      return {
        question: [],
        userAnswer: [],
        countCorrectAnswer: 0,
      };
    },
    mounted() {
      this.question = this.$store.state.question;
      this.userAnswer = this.$store.state.userAnswer;
      this.question.forEach((element, index) => {
        if (element.correct_answer === this.userAnswer[index])
          this.countCorrectAnswer++;
      });
    },
    components: {
      answerData,
    },
  };
</script>

<style lang="scss">
</style>