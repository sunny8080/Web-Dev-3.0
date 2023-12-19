<template>
  <div class="">
    <div class="mt-5"></div>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-y-2 ml-5">
      <!-- input type text -->

      <!-- <div
        class="border max-w-[300px]"
        :class="nameValidity === 'invalid' && 'border-2 border-pink-300'"
      > -->
      <div
        class="border max-w-[300px]"
        :class="{ invalid: nameValidity === 'invalid' }"
      >
        <div class="flex gap-3">
          <label for="">Name</label>
          <input
            type="text"
            v-model.trim="name"
            @blur="validateName"
            class="border-2 border-richblack-900"
          />
        </div>
        <p v-if="nameValidity === 'invalid'">Please enter a valid name!</p>
      </div>

      <!-- input type email -->
      <div class="flex gap-3 border max-w-[300px]">
        <label for="">Email</label>
        <input
          type="email"
          v-model="email"
          class="border-2 border-richblack-900"
        />
      </div>

      <!-- input type date -->
      <div class="flex gap-3 border max-w-[300px]">
        <label for="">Dob</label>
        <input
          type="date"
          v-model="dob"
          class="border-2 border-richblack-900"
        />
      </div>

      <!-- input type number -->
      <div class="flex gap-3 border max-w-[300px]">
        <label for="">Age</label>
        <input
          type="number"
          v-model="age"
          ref="userAge"
          class="border-2 border-richblack-900"
        />
      </div>

      <!-- select element -->
      <div class="flex gap-3 border max-w-[300px]">
        <label for="">Favorite Car ?</label>
        <select
          name="goals"
          v-model="favCar"
          class="border-2 border-richblack-900"
        >
          <option value="audi">Audi</option>
          <option value="xuv">XUV</option>
          <option value="thar">Thar</option>
          <option value="suzuki">suzuki</option>
        </select>
      </div>

      <!-- checkbox element with more than one checkbox -->
      <div class="flex gap-3 border max-w-[500px]">
        <label for="">Your goals ?</label>
        <div>
          <div>
            <input type="checkbox" value="frontend-developer" v-model="goals" />
            <label for="">Become a frontend developer</label>
          </div>

          <div>
            <input type="checkbox" value="backend-developer" v-model="goals" />
            <label for="">Become a backend developer</label>
          </div>

          <div>
            <input type="checkbox" value="designer" v-model="goals" />
            <label for="">Become a designer</label>
          </div>
        </div>
      </div>

      <!-- checkbox element with one checkbox -->
      <div class="flex gap-3 border max-w-[300px]">
        <label for="">Do you agree ?</label>
        <div>
          <input type="checkbox" value="frontend-developer" v-model="agree" />
          <label for="">Agree</label>
        </div>
      </div>

      <!-- radio element -->
      <div class="flex gap-3 border max-w-[300px]">
        <h2>Favorite game ?</h2>
        <div>
          <div>
            <input type="radio" value="ludo" v-model="favGame" />
            <label for="">Ludo</label>
          </div>

          <div>
            <input type="radio" value="cricket" v-model="favGame" />
            <label for="">Cricket</label>
          </div>

          <div>
            <input type="radio" value="bgmi" v-model="favGame" />
            <label for="">Bgmi</label>
          </div>

          <div>
            <input type="radio" value="football" v-model="favGame" />
            <label for="">Football</label>
          </div>
        </div>
      </div>

      <!-- custom form component -->
      <RatingForm v-model="rating"></RatingForm>

      <div class="border border-blue-300 py-2 w-fit flex gap-x-5">
        <button
          type="submit"
          class="bg-caribbeangreen-200 py-2 px-5 w-fit rounded-md"
        >
          submit
        </button>

        <button
          type="button"
          @click="reset"
          class="bg-caribbeangreen-900 text-white py-2 px-5 w-fit rounded-md"
        >
          reset
        </button>
      </div>
    </form>

    <div class="mb-4"></div>
  </div>
</template>
<script>
import RatingForm from "./RatingForm.vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      dob: "",
      age: "",
      nameValidity: "pending",
      favCar: "thar",
      goals: [],
      agree: false,
      favGame: "cricket",
      rating: null,
    };
  },
  components: {
    RatingForm,
  },
  methods: {
    handleSubmit() {
      console.log("All submitted values ______________ ");
      console.log(this.name);
      console.log(this.email);
      console.log(this.dob);
      console.log(this.age); // it is a number
      // console.log(this.age + 100); // it is a number
      // console.log(this.$refs.userAge.value + 100); // it is a string
      console.log(this.goals);
      console.log(this.agree);
      console.log(this.favGame);
      console.log(this.rating);
    },
    validateName() {
      this.nameValidity = this.name === "" ? "invalid" : "valid";
    },
    reset() {
      this.name = null;
      this.email = null;
      this.dob = null;
      this.age = null;
      this.goals = null;
      this.agree = null;
      this.favGame = null;
      this.rating = null;
    },
  },
};
</script>
<style scoped>
.invalid,
.invalid input {
  border-color: red;
}
</style>
