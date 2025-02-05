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

</script>

<style scoped>

</style>