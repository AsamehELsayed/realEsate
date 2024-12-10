<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Create Price Plan</h1>
    <form @submit.prevent="submit">
      <!-- Name Field -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          v-model="form.name"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div v-if="form.errors.name" class="text-red-500 text-sm mt-1">{{ form.errors.name }}</div>
      </div>

      <!-- Description Field -->
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          v-model="form.description"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
        <div v-if="form.errors.description" class="text-red-500 text-sm mt-1">{{ form.errors.description }}</div>
      </div>

      <!-- Price Field -->
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
        <input
          id="price"
          type="number"
          step="0.01"
          v-model="form.price"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          :aria-describedby="form.errors.price ? 'price-error' : null"
        />
        <div v-if="form.errors.price" id="price-error" class="text-red-500 text-sm mt-1">{{ form.errors.price }}</div>
      </div>

      <!-- Days Per Month Field -->
      <div class="mb-4">
        <label for="days_per_month" class="block text-sm font-medium text-gray-700">Days Per Month</label>
        <input
          id="days_per_month"
          type="number"
          v-model="form.days_per_month"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div v-if="form.errors.days_per_month" class="text-red-500 text-sm mt-1">{{ form.errors.days_per_month }}</div>
      </div>

      <!-- Hours Per Day Field -->
      <div class="mb-4">
        <label for="hours_per_day" class="block text-sm font-medium text-gray-700">Hours Per Day</label>
        <input
          id="hours_per_day"
          type="number"
          v-model="form.hours_per_day"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div v-if="form.errors.hours_per_day" class="text-red-500 text-sm mt-1">{{ form.errors.hours_per_day }}</div>
      </div>

      <!-- Employees Count Field -->
      <div class="mb-4">
        <label for="employees_count" class="block text-sm font-medium text-gray-700">Employees Count</label>
        <input
          id="employees_count"
          type="number"
          v-model="form.employees_count"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div v-if="form.errors.employees_count" class="text-red-500 text-sm mt-1">{{ form.errors.employees_count }}</div>
      </div>

      <!-- Features Field -->
      <div class="mb-4">
        <label for="features" class="block text-sm font-medium text-gray-700">Features</label>
        <div class="flex items-center">
          <input
            type="text"
            id="features"
            v-model="newFeature"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add a new feature"
          />
          <button
            type="button"
            @click="addFeature"
            class="ml-2 px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
          >
            +
          </button>
        </div>
        <ul class="mt-2">
          <li
            v-for="(feature, index) in form.features"
            :key="index"
            class="flex items-center justify-between bg-gray-100 px-2 py-1 rounded-md mb-1"
          >
            <span>{{ feature }}</span>
            <button
              type="button"
              @click="removeFeature(index)"
              class="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </li>
        </ul>
        <div v-if="form.errors.features" class="text-red-500 text-sm mt-1">{{ form.errors.features }}</div>
      </div>

      <!-- Total Price Display -->
      <div class="mb-4">
        <label for="total" class="block text-sm font-medium text-gray-700">Total Price</label>
        <input
          id="total"
          type="text"
          v-model="total"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          readonly
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
      >
        Save Changes
      </button>
    </form>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

defineOptions({
  layout: AuthenticatedLayout,
});
const props = defineProps({
  plan: Object,
})
const form = useForm({
  name: props.plan.name,
  description: props.plan.description,
  price: props.plan.price,
  days_per_month: props.plan.days_per_month,
  hours_per_day: props.plan.hours_per_day,
  employees_count: props.plan.employees_count,
  features: props.plan.features,
  _method: "PUT",
});

const newFeature = ref("");

// Total Price Computation
const total = computed(() => {
  return (form.price * form.days_per_month * form.hours_per_day * form.employees_count).toFixed(2) + "$";
});

// Add Feature
const addFeature = () => {
  if (newFeature.value.trim() !== "") {
    form.features.push(newFeature.value.trim());
    newFeature.value = "";
  }
};

// Remove Feature
const removeFeature = (index) => {
  form.features.splice(index, 1);
};

// Submit the form
const submit = () => {
  form.post(route("prices.update", props.plan.id));
};
</script>
