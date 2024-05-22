<script setup lang="ts">
definePageMeta({ auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/', } })
const { signIn, signOut, status, data } = useAuth()

</script>

<template>
	<div>
		<h1>Login</h1>
		<p>Status: {{ status }} </p>

		<div v-if="data">
			<p>Data: {{ data }}</p>

			<nuxt-img :src="data?.user.image" width="100" height="100" />
		</div>

		<div class="flex gap-3">
			<button @click="signIn('github')">Github</button>
			<button @click="signIn('google')">Google</button>
		</div>
		<button v-if="status === 'authenticated'" @click="signOut()">Logout</button>
	</div>
</template>