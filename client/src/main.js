import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});
// const app = new App({
// 	target: document.querySelector('#svelte-app')
// })

export default app;
