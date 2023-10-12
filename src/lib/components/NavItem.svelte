<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let active = false;
	export let last: boolean = false;
	export let navData: {
		label: string;
		url?: string;
		children: {
			label: string;
			url: string;
		}[];
	};
</script>

<li
	class:active
	class="nav-item relative"
	on:mouseleave|stopPropagation={() => {
		active = false;
	}}
	class:last
>
	<a
		href={navData.url}
		class="flex items-center gap-2 text-sm font-semibold leading-10 cursor-pointer"
		on:mouseover|stopPropagation|preventDefault={() => {
			active = true;
		}}
		on:focus|stopPropagation|preventDefault={() => {
			active = true;
		}}
	>
		{navData.label}
	</a>
	{#if active}
		<div
			transition:slide={{ delay: 50, duration: 300, easing: quintOut, axis: 'y' }}
			class="nav-menu absolute left-0 bg-white text-black rounded"
		>
			<ul class="py-4 px-8 z-10 relative">
				{#each navData.children as child}
					<li class="leading-8">
						<a class="hover:text-ts-blue" href={child.url}>{child.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</li>

<style lang="postcss">
	.nav-item {
		> a {
			&:after {
				content: '';
				display: block;
				background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 6" fill="none"><path d="M0.711704 0H9.86557C10.4988 0 10.8155 0.764898 10.3672 1.21316L5.79205 5.79188C5.51455 6.06937 5.06273 6.06937 4.78523 5.79188L0.210073 1.21316C-0.238193 0.764898 0.0784396 0 0.711704 0Z" fill="white"/></svg>');
				background-repeat: no-repeat;
				background-size: 1rem;
				background-position: center;
				position: relative;
				width: 1rem;
				height: 1rem;
			}
		}
		&.active {
			> a {
				&:after {
				}
			}
		}

		ul {
			li {
				white-space: nowrap;
			}
		}
	}
	.last {
		.nav-menu {
			left: auto;
			right: 0;
		}
	}
</style>
