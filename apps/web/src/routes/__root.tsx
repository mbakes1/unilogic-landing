import { HeroHeader } from "@/components/header";
import Loader from "@/components/loader";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import {
	HeadContent,
	Outlet,
	createRootRouteWithContext,
	useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";
import { useEffect } from "react";
import Lenis from 'lenis';

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{
				title: "unilogic | Public Sector Technology Solutions",
			},
			{
				name: "description",
				content: "At unilogic, we empower South Africa's public sector with technology that drives efficiency and transparency.",
			},
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
	}),
});

function RootComponent() {
	const isFetching = useRouterState({
		select: (s) => s.isLoading,
	});

	// Initialize Lenis smooth scrolling
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Make lenis globally accessible
		(window as any).lenis = lenis;

		return () => {
			(window as any).lenis = null;
			lenis.destroy();
		};
	}, []);

	return (
		<>
			<HeadContent />
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				disableTransitionOnChange
				storageKey="vite-ui-theme"
			>
				<div className="grid grid-rows-[auto_1fr] h-svh">
					<HeroHeader />
					{isFetching ? <Loader /> : <Outlet />}
				</div>
				<Toaster richColors />
			</ThemeProvider>
			<TanStackRouterDevtools position="bottom-left" />
		</>
	);
}
