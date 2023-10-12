<script lang="ts">
	import bgVid from '$lib/assets/videos/bg.mp4';
	import logo from '$lib/assets/images/ts-logo.svg';
	import logoDark from '$lib/assets/images/ts-logo-dark.svg';
	import Debris from '$lib/assets/images/debris.svg';
	import TruckerHome from '$lib/assets/images/trucker-home.png';
	import IndependentTruckers from '$lib/assets/images/IndependentTruckers.png';
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
	$: console.log('form 😍', form);

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

<div class="flex flex-col p-16">
	<div class="section-header inline-flex flex-col gap-1 w-fit">
		<h2>Who We Are</h2>
		<div class="debris"><img src={Debris} alt="debris" /></div>
	</div>
	<div class="flex gap-16">
		<div class="w-1/2">
			<div class="flex flex-col gap-2">
				<p class="mb-4">
					TruckSuite is a “technology based” innovative and comprehensive Owner Operator Support
					program that is designed to offer the Owner Operator all truck ownership benefits
					typically only available to large fleets. The program also provides multiple benefits to
					carriers as well as asset protection to lenders.
				</p>
				<ul class="list-disc ml-4 mb-2 flex flex-col gap-2">
					<li>
						TruckSuite establishes an <strong>arm’s length</strong> relationship between the Carrier
						and the independent Owner Operator.
					</li>
					<li>
						TruckSuite offers several <strong>“Best in Class”</strong> industry experienced partners
						to insure the Owner Operator the best path to success.
					</li>
					<li>
						TruckSuite offers its Owner Operator Members several <strong
							>discounts
						</strong>including:
						<ul class="list-disc ml-4">
							<li>Labor rate discounts</li>
							<li>Parts discounts</li>
							<li>Tire discounts</li>
						</ul>
					</li>
					<li>
						Through various industry relationships, TruckSuite can reduce costly vehicle <strong
							>downtime</strong
						> by assisting the Owner Operator “audit” repair quotes as well as having the Owner Operator
						treated as a “fleet customer”.
					</li>
					<li>TruckSuite promotes <strong>driver retention</strong>.</li>
					<li>TruckSuite provides <strong>asset protection</strong> to lenders.</li>
				</ul>
				<p>
					Successful participation in the TruckSuite Program allows the Owner Operator to <strong
						>…<em>Just Drive!</em></strong
					>
				</p>
			</div>
		</div>
		<div class="w-1/2">
			<img class="w-full" src={IndependentTruckers} alt="Trucker Home" />
		</div>
	</div>
</div>
<Hr />
<div class="flex flex-col p-16 gap-4 mb-4 justify-center">
	<h2 class="text-center mb-4">Join Our Mailing List</h2>
	<form
		class="flex flex-col gap-4 align-center justify-center"
		method="post"
		action="?/join"
		use:enhance={({ formData }) => {
			console.log('formData', formData);
			return async ({ result, update }) => {
				await update();
				console.log('result', result);
				if (result?.status === 204) {
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
		<div class="flex justify-center">
			<label for="agree" class="flex gap-4">
				<input type="checkbox" id="agree" name="agree" checked={$mailingList.agree} />
				<span> Agree to let us send you correspondence through email and/or text. </span>
			</label>
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
<div class="flex flex-col p-16 gap-4 mb-4 justify-center">
	<h2 class="text-center">Download</h2>
	<div class="flex justify-center gap-2">
		<AppStore />
		<PlayStore />
	</div>
</div>
<Hr />
<div class="flex flex-col p-16 gap-4 mb-4 justify-center">
	<h2 class="text-center">Follow</h2>
	<div class="flex justify-center gap-4">
		<LinkedInIcon />
		<InstagramIcon />
		<FacebookIcon />
	</div>
</div>
