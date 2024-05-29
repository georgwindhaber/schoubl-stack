<template>
	<div class="flex">
		<aside class="h-[100vh] min-w-[200px] bg-gradient-to-br from-slate-700 to-slate-900 text-white p-5">
			<h2 class="font-black">Schoubl CMS</h2>
			<nav>
				<ul>
					<li>
						<cms-link to="/cms">Dashboard</cms-link>
					</li>
					<li>
						<cms-link to="/cms/posts">Posts</cms-link>
					</li>
				</ul>
			</nav>
		</aside>
		<slot />
	</div>
</template>