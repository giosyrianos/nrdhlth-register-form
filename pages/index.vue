<template>
  <div
    class="n-grid-2 n-padding-l"
    style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));width: 100%;"
  >
    <ClientOnly fallback-tag="span" fallback="Loading form...">
      <RegistrationForm
        @submit-success="onFormSubmitted($event)"
      />
      <CardForm />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
interface FormData {
  name: string;
  email: string;
  password: string;
  updates: boolean;
}

function onFormSubmitted(formData: FormData) {
  // TODO: 📡 Trigger POST request here
  // console.log(formData)
  router.push('/success');
}
</script>
