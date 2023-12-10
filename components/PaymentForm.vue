<template>
  <div class="payment-form">
      <div v-if="isSubmitted">
      <p class="text-green-600">Payment submitted successfully!</p>
      <pre>{{ values }}</pre>
    </div> 
    <form v-else @submit.prevent="submitForm" class="max-w-md mx-auto space-y-4">
      <!-- Credit Card Number -->
      <div>
        <label for="cardNumber" class="block text-sm font-medium text-gray-600">Card Number</label>
        <input
          v-model="cardNumber"
          type="text"
          id="cardNumber"
          class="mt-1 p-2 w-full border rounded-md"
          :class="{ 'border-red-500': errors['cardNumber'] }"
          placeholder="**** **** **** ****"
        />
          <span v-if="errors['cardNumber']" class="text-red-500 text-xs mt-1">{{  errors["cardNumber"] }}</span>
      </div>

      <!-- Expiry Date -->
      <div class="flex space-x-4 justify-between">
        <div>
          <label for="expiryMonth" class="block text-sm font-medium text-gray-600">Expiry Month</label>
          <input
            v-model="expiryMonth"
            type="text"
            id="expiryMonth"
            class="mt-1 p-2 w-full border rounded-md"
            :class="{ 'border-red-500': errors['expiryMonth'] }"
            placeholder="MM"
          />
          <span v-if="errors['expiryMonth']" class="text-red-500 text-xs mt-1">{{  errors["expiryMonth"] }}</span>
        </div>
        <div>
          <label for="expiryYear" class="block text-sm font-medium text-gray-600">Expiry Year</label>
          <input
            v-model="expiryYear"
            type="text"
            id="expiryYear"
            class="mt-1 p-2 w-full border rounded-md"
            :class="{ 'border-red-500': errors['expiryYear'] }"
            placeholder="YYYY"
          />
          <span v-if="errors['expiryYear']" class="text-red-500 text-xs mt-1">{{  errors["expiryYear"] }}</span>
        </div>
      </div>

      <!-- Card Holder Name -->
      <div>
        <label for="cardHolderName" class="block text-sm font-medium text-gray-600">Card Holder Name</label>
        <input
          v-model="cardHolderName"
          type="text"
          id="cardHolderName"
          class="mt-1 p-2 w-full border rounded-md"
          :class="{ 'border-red-500': errors['cardHolderName'] }"
          placeholder="John Doe"
        />
        <span v-if="errors['cardHolderName']" class="text-red-500 text-xs mt-1">{{  errors["cardHolderName"] }}</span>
      </div>

      <!-- CVV -->
      <div>
        <label for="cvv" class="block text-sm font-medium text-gray-600">CVV</label>
        <input
          v-model="cvv"
          type="text"
          id="cvv"
          class="mt-1 p-2 w-full border rounded-md"
          :class="{ 'border-red-500': errors['cvv'] }"
          placeholder="***"
        />
        <span v-if="errors['cvv']" class="text-red-500 text-xs mt-1">{{  errors["cvv"] }}</span>
      </div>


      <button
        type="submit"
        :disabled="!meta.valid"
        class="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit Payment
      </button>
    </form>
  </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from "yup";

const { values, validate, errors, defineField, meta, handleSubmit } = useForm({
  validationSchema: {
    cardNumber: yup.number().required(),
    expiryMonth: yup.string().matches(/^\d{2}$/, "Invalid Month.").required(),
    expiryYear: yup.string().matches(/^\d{4}$/, "Invalid Year.").required(),
    cardHolderName: yup.string().required(),
    cvv: yup.string().matches(/^\d{3}$/, "Invalid Cvv").required(),
  },
});

const [cardNumber] = defineField('cardNumber');
const [expiryMonth] = defineField('expiryMonth');
const [expiryYear] = defineField('expiryYear');
const [cardHolderName] = defineField('cardHolderName');
const [cvv] = defineField('cvv');
const isSubmitted = ref(false);


const submitForm = handleSubmit(() => {
  isSubmitted.value = true
});

</script>

<style>
/* Additional styles for the form */
.payment-form label {
  display: block;
  margin-bottom: 0.5rem;
}

.payment-form input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  /* border: 1px solid #d1d5db; */
  border-radius: 0.375rem;
}

.payment-form button {
  background-color: #4c51bf;
  color: #ffffff;
  cursor: pointer;
}

.payment-form button:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
}
</style>
