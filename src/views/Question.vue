<template>
  <div>
    <div class="p-1 bg-green d-flex justify-around">
      <div>學科</div>
      <div>困難度</div>
    </div>
    <div class="p-1 bg-pink">
      <!-- 題目名稱 -->
      <div class="d-flex flex-column w-70 m-auto font-weight-900">
        Who had hits in the 70s with the songs "Lonely Boy" and "Never Let Her
        Slip Away"?
      </div>
      <hr class="hr" />
      <!-- 題目選項 -->
      <div class="d-flex flex-column align-items-center">
        <option-data 
        v-for="item in currentQuestion.incorrect_answers"
        :key="item"
        :value="item"
        :class="{active:item === selectOption}"
        @selfClick="optionClick">
        </option-data>
        <!-- <option-data
          :value="123"
          :class="{ active: '123' == selectOption }"
          @selfClick="optionClick"
        ></option-data>
        <option-data
          :value="456"
          :class="{ active: '456' == selectOption }"
          @selfClick="optionClick"
        ></option-data>
        <option-data
          :value="789"
          :class="{ active: '789' == selectOption }"
          @selfClick="optionClick"
        ></option-data> -->
        <div>
            <a class="btn mt-1 mb-1">下一題</a>
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
        selectOption: "123",
        question:[],
        currentQuestion:{}
      };
    },
    mounted(){
        this.$http.get('https://opentdb.com/api.php?amount=10').then( response => {
            console.log(response.data.results[0].incorrect_answers[0])
            this.question = response.data.results
            this.currentQuestion = this.question[0]
        })
    },
    methods:{
        optionClick(value){
            console.log("parentClick")
            this.selectOption = value
        }
    },
    components: {
      optionData
    },
  };
</script>
<style lang="scss">
</style>