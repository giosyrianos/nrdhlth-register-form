<template>
  <div
    class="n-registration-container n-padding-l n-margin-auto n-box-shadow-popout n-border-radius"
    style="max-width: 350px;"
  >
    <form novalidate @submit.prevent="handleSubmit">
      <provet-stack>
        <img
          src="https://nordhealth.com/assets/images/sharing/home.png"
          alt="Registration header image"
          class="n-border-radius"
          style="margin-bottom: 1rem; height: 150px"
        />
        <provet-input
          name="Name"
          type="text"
          expand
          required
          label="Full name"
          v-model="form.name"
          placeholder="Jane Doe"
          :error="errors.name"
          disallowPattern="[0-9]"
        />
        <provet-input
          name="email"
          type="email"
          label="Email"
          required
          expand
          v-model="form.email"
          placeholder="user@example.com"
          :error="errors.email"
        />
        <provet-input
          label="Password"
          required
          expand
          :type="showPassword ? 'text' : 'password'"
          v-model="form.password"
          placeholder="••••••••"
        >
          <provet-button
            slot="end"
            square
            @click.prevent="showPassword = !showPassword"
          >
            <provet-icon
              :name="showPassword ? `interface-edit-off` : `interface-edit-on`"
            />
          </provet-button>
        </provet-input>

        <provet-checkbox @change="form.updates = $event.target.checked">
          <div slot="label" class="checkbox-label">
            <small>Would you like to receive updates about our products?</small>
          </div>
        </provet-checkbox>

        <provet-button type="submit" expand variant="primary">Sign up</provet-button>
      </provet-stack>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const emit = defineEmits<{
  (e: "submit-success", data: FormData): void;
}>();

interface FormData {
  name: string;
  email: string;
  password: string;
  updates: boolean;
}

interface FormErrors {
  name: string | null;
  email: string | null;
  password: string | null;
}

const showPassword = ref(false);

// Reactive state for the form fields
const form = reactive<FormData>({
  name: "",
  email: "",
  password: "",
  updates: false,
});

// Reactive state for errors
const errors = reactive<FormErrors>({
  name: null,
  email: null,
  password: null,
});

function handleSubmit(): void {
  // Clear existing errors
  errors.name = null;
  errors.email = null;
  errors.password = null;

  let isValid = true;

  // Validate Name
  if (!form.name.trim()) {
    errors.name = "Name is required.";
    isValid = false;
  }
  // Validate Email
  if (!form.email.trim()) {
    errors.email = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate Password
  if (!form.password.trim()) {
    errors.password = "Password is required.";
    isValid = false;
  }

  if (isValid) {
    emit("submit-success", form);
  }
}
</script>
