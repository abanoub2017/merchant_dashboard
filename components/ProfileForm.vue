<template>
  <div class="profile-form">
      <!-- Show success message when the form is submitted successfully -->
    <div v-if="isSubmitted">
      <p class="text-green-600">Payment submitted successfully!</p>
      <pre>{{ values }}</pre>
    </div> 
    <form v-else @submit.prevent="onSubmit()" class="max-w-md mx-auto space-y-4">
       <div>
        <label for="name" class="block text-sm font-medium text-gray-600" >Name</label >
        <input
          v-model="name"
          type="text"
          id="name"
          class="mt-1 p-2 w-full border rounded-md"
          placeholder="John Doe"
        />
        <span v-if="errors['name']" class="text-red-500 text-xs mt-1">{{  errors["name"] }}</span>
      </div>

      <div>
        <label for="gender" class="block text-sm font-medium text-gray-600"  >Gender</label >
        <select
          v-model="gender"
          id="gender"
          class="mt-1 p-2 w-full border rounded-md"
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span v-if="errors['gender']" class="text-red-500 text-xs mt-1">{{
          errors["gender"]
        }}</span>
      </div>

      <div>
        <label for="dob" class="block text-sm font-medium text-gray-600"   >Date of Birth</label >
        <input   v-model="dob"  type="date" id="dob"  class="mt-1 p-2 w-full border rounded-md"  />
        <span v-if="errors['dob']" class="text-red-500 text-xs mt-1">{{
          errors["dob"]
        }}</span>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-600" >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          class="mt-1 p-2 w-full border rounded-md"
          placeholder="example@example.com"
        />
        <span v-if="errors['email']" class="text-red-500 text-xs mt-1">{{
          errors["email"]
        }}</span>
      </div>
      <button
        type="submit"
        :disabled="!meta.valid"
        class="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const { values, validate, errors, defineField, meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    gender: yup.string().required(),
    dob: yup.date().required(),
    email: yup.string().email().required(),
  }),
});

const [name] = defineField("name");
const [gender] = defineField("gender");
const [dob] = defineField("dob");
const [email] = defineField("email");
const isSubmitted = ref(false);

const onSubmit = handleSubmit(() => {
  // alert(JSON.stringify(values.value, null, 2));
   isSubmitted.value = true;
});

</script>

<style>
/* Additional styles for the form */
.profile-form label {
  display: block;
  margin-bottom: 0.5rem;
}

.profile-form select,
.profile-form input[type="date"],
.profile-form input[type="text"],
.profile-form input[type="email"] {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

.profile-form button {
  background-color: #4c51bf;
  color: #ffffff;
  cursor: pointer;
}

.profile-form button:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
}
</style>
