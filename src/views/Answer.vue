<template>
  <div>
    <div class="p-1 bg-green">
      <p class="text-center">對答案~</p>
    </div>
    <div class="text-center p-1 bg-dark-pink border-radius-bottom">
      答對題數
    </div>
    <answer-data
      v-for="(n,index) in question"
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
      };
    },
    mounted() {
      let question = this.$store.state.question;
      //預防使用者沒有問答就到answer的頁面
      if (question.length === 0) {
        this.$router.replace({ name: "Home" });
        return;
      }
      this.question = this.$store.state.question;
      this.userAnswer = this.$store.state.userAnswer;
    },
    components: {
      answerData,
    },
  };
</script>

<style lang="scss">
</style>