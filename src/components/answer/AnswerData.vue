<template>
  <div class="bg-purple p-1 mb-1 mt-1 border-radius answer">
    <div class="text-center font-weight-900">
        <template v-if="question.correct_answer === userAnswer">
            <div>
                正確
            </div>
        </template>
        <template v-else>
            <div>
                錯誤
            </div>
        </template>
    </div>
    <div class="text-center font-weight-900">{{ question.question }}</div>

    <div
      v-for="(answer,index) in question.ramdomAnswer"
      :key="index"
      class="text-center p-1 border-radius"
      :class="{ 'bg-green': answer === question.correct_answer,
                'bg-pink': answer === userAnswer && answer !== question.correct_answer
                }"
    >
         {{ answer }}
    </div>
  </div>
</template>
<script>
  export default {
    name: "AnswerData",
    props:[
        'question',
        'userAnswer'
    ],
    data(){
        return {}
    }
  };
</script>
<style lang="scss" scoped>
@media (max-width: 700px) {
  .answer {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>