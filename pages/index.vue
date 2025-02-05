<template>
	<div
		class="n-grid-1 n-padding-l"
	>
		<ClientOnly fallback-tag="span" fallback="Loading form...">
			<RegistrationForm
				@submit-success="onFormSubmitted($event)"
			/>
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
