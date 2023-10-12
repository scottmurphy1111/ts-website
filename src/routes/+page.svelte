<script lang="ts">
	import bgVid from '$lib/assets/videos/bg.mp4';
	import logo from '$lib/assets/images/ts-logo.svg';
	import logoDark from '$lib/assets/images/ts-logo-dark.svg';
	import Debris from '$lib/assets/images/debris.svg';
	import TruckerHome from '$lib/assets/images/trucker-home.png';
	import NavItem from '$lib/components/NavItem.svelte';
	import MobileIcon from '$lib/assets/icons/mobile.svelte';
	import JustDriveIcon from '$lib/assets/icons/just-drive.svelte';
	import LinkedInIcon from '$lib/assets/icons/li.svelte';
	import InstagramIcon from '$lib/assets/icons/ig.svelte';
	import FacebookIcon from '$lib/assets/icons/fb.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import LabelInput from '$lib/components/LabelInput.svelte';
	import Hr from '$lib/components/Hr.svelte';
	import { writable } from 'svelte/store';
	import { enhance } from '$app/forms';
	import AppStore from '$lib/components/AppStore.svelte';
	import PlayStore from '$lib/components/PlayStore.svelte';
	import { toast } from '@zerodevx/svelte-toast';

	let showOverlay = false;
	let showJustDrive = false;

	export let form;
	$: console.log('form 😍', form?.error);

	onMount(() => {
		setTimeout(() => {
			showOverlay = true;
		}, 1000);
		setTimeout(() => {
			showOverlay = false;
		}, 6000);
		setTimeout(() => {
			showJustDrive = true;
		}, 7000);
		setTimeout(() => {
			showJustDrive = false;
		}, 20000);
	});

	const mailingList = writable({
		name: '',
		email: '',
		phone: '',
		agree: false
	});
</script>

<header class="fixed z-10 w-full flex bg-black px-8 py-4">
	<a class="w-64" href="/">
		<img class="block" src={logoDark} alt="ts-logo" />
	</a>
	<ul class="flex ml-auto padding-0 text-white items-center gap-8 font-semibold text-sm">
		<button class="btn btn-primary">TS Mobile App</button>
		<NavItem
			navData={{
				label: 'BizTech',
				children: [
					{
						label: 'Platform',
						url: '/platform'
					},
					{
						label: 'Presentations',
						url: '/presentations'
					}
				]
			}}
		/>
		<NavItem
			navData={{
				label: 'Products',
				children: [
					{
						label: 'Vehicle Service Contracts',
						url: '/vehicle-service-contracts'
					},
					{
						label: 'TS Health',
						url: '/ts-health'
					},
					{
						label: 'TS Flex Card',
						url: '/ts-flex-card'
					},
					{
						label: 'Diesel Decoder',
						url: '/diesel-decoder'
					},
					{
						label: 'PM Program',
						url: '/pm-program'
					}
				]
			}}
		/>
		<NavItem
			navData={{
				label: 'Programs',
				children: [
					{
						label: 'Virtual F & I',
						url: '/virtual-f-and-i'
					},
					{
						label: 'Repair Estimate Review',
						url: '/repair-estimate-review'
					}
				]
			}}
		/>
		<NavItem
			navData={{
				label: 'About',
				children: [
					{
						label: 'Our Team',
						url: '/our-team'
					},
					{
						label: 'Careers',
						url: '/careers'
					},
					{
						label: 'Contact HQ',
						url: '/contact-hq'
					}
				]
			}}
		/>
		<NavItem
			navData={{
				label: 'Media',
				children: [
					{
						label: 'Press Releases',
						url: '/press-releases'
					},
					{
						label: 'Podcasts',
						url: '/podcasts'
					},
					{
						label: 'Videos',
						url: '/videos'
					}
				]
			}}
		/>
		<span class="text-white">|</span>
		<NavItem
			last={true}
			navData={{
				label: 'Login',
				children: [
					{
						label: 'TecAssured Portal',
						url: '/ta'
					},
					{
						label: 'Sales Rep Portal',
						url: '/sales-reps'
					}
				]
			}}
		/>
	</ul>
</header>
<video
	autoplay
	muted
	loop
	id="myVideo"
	class="bg-fixed w-screen h-screen object-cover left-0 top-0 z-[-1]"
>
	<source src={bgVid} type="video/mp4" />
</video>

<div class="absolute top-24 right-5 flex flex-col gap-4">
	<div class="flex items-center gap-2 text-white text-sm justify-end">
		<MobileIcon />
		<h2 class="">(336) 565-7100</h2>
	</div>
</div>

{#if showOverlay}
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black bg-opacity-40 rounded p-16"
		transition:fade={{ delay: 250, duration: 1200 }}
	>
		<h1 class="text-4xl font-semibold md:whitespace-nowrap">
			Helping Keep Truckers and Their Trucks on the Road
		</h1>
	</div>
{/if}

{#if showJustDrive}
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded w-[265px]"
		transition:fade={{ delay: 250, duration: 1200 }}
	>
		<JustDriveIcon />
	</div>
{/if}

<div class="flex gap-32 p-8">
	<div class="w-1/2">
		<div class="section-header inline-flex flex-col gap-1">
			<h2>Who We Are</h2>
			<div class="debris"><img src={Debris} alt="debris" /></div>
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna. Turpis
			egestas sed tempus urna et pharetra. Eleifend donec pretium vulputate sapien nec sagittis
			aliquam malesuada bibendum. Turpis cursus in hac habitasse platea dictumst quisque sagittis.
			Risus feugiat in ante metus. Etiam erat velit scelerisque in. Dignissim convallis aenean et
			tortor at risus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi tincidunt
			ornare massa eget egestas purus. Praesent semper feugiat nibh sed pulvinar proin gravida
			hendrerit. Amet tellus cras adipiscing enim eu turpis. Consectetur adipiscing elit duis
			tristique sollicitudin nibh sit amet. A scelerisque purus semper eget duis at tellus.
		</p>
	</div>
	<div class="w-1/2">
		<img class="w-full" src={TruckerHome} alt="Trucker Home" />
	</div>
</div>
<Hr />
<div class="flex flex-col p-8 gap-4 mb-4 justify-center">
	<h2 class="text-center mb-4">Join Our Mailing List</h2>
	<form
		class="flex flex-col gap-4 align-center justify-center"
		method="post"
		action="?/join"
		use:enhance={({ formData }) => {
			console.log('formData', formData);
			return async ({ result }) => {
				if (result?.status === 200) {
					toast.push('Thanks for joining our mailing list!');
				}
			};
		}}
	>
		<div class="inline-grid grid-cols-3 w-2/3 m-auto gap-4">
			<LabelInput label="Name*" placeholder="Name" name="name" value={$mailingList.name} />
			<LabelInput label="Email*" placeholder="Your Email" name="email" value={$mailingList.email} />
			<LabelInput label="Phone" placeholder="Your Phone" name="phone" value={$mailingList.phone} />
		</div>
		<div class="flex gap-4 justify-center">
			<input type="checkbox" name="agree" checked={$mailingList.agree} />
			<span>Agree to let us send you correspondence through email and/or text.</span>
		</div>

		{#if form?.error}
			<div class="flex justify-center">
				<span class="text-red-500">{form.error}</span>
			</div>
		{/if}
		<div class="flex justify-center">
			<button class="btn btn-primary">Join Mailing List</button>
		</div>
	</form>
</div>
<Hr />
<div class="flex flex-col p-8 gap-4 mb-4 justify-center">
	<h2 class="text-center">Download</h2>
	<div class="flex justify-center gap-2">
		<AppStore />
		<PlayStore />
	</div>
</div>
<Hr />
<div class="flex flex-col p-8 gap-4 mb-4 justify-center">
	<h2 class="text-center">Follow</h2>
	<div class="flex justify-center gap-4">
		<LinkedInIcon />
		<InstagramIcon />
		<FacebookIcon />
	</div>
</div>
