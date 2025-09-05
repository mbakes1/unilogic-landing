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
		title: "Unilogic | Digital Transformation for South Africa's Public Sector",
		meta: [
			{
				name: "description",
				content: "Unilogic specializes in digital transformation for the South African public sector. We provide innovative technology solutions, including IT infrastructure, IoT, and digital marketing, to enhance efficiency, transparency, and citizen engagement.",
			},
			{
				name: "keywords",
				content: "public sector technology South Africa, government IT solutions, smart city solutions South Africa, digital transformation public sector, government technology solutions, public sector innovation, citizen engagement technology",
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					"name": "Unilogic",
					"url": "https://unilogic.co.za", // Replace with actual domain
					"logo": "https://unilogic.co.za/logoicon.png", // Replace with actual domain
					"contactPoint": {
						"@type": "ContactPoint",
						"telephone": "+27-XX-XXX-XXXX", // Replace with actual phone number
						"contactType": "customer service"
					},
					"sameAs": [
						// Add social media links here
					],
					"potentialAction": {
						"@type": "SearchAction",
						"target": "https://unilogic.co.za/search?q={search_term_string}", // Replace with actual domain
						"query-input": "required name=search_term_string"
					},
					"service": [
						{
							"@type": "Service",
							"serviceType": "IT Infrastructure & Systems",
							"description": "Secure, scalable infrastructure that modernizes government operations while meeting public sector compliance requirements.",
							"provider": {
								"@type": "Organization",
								"name": "Unilogic"
							}
						},
						{
							"@type": "Service",
							"serviceType": "IoT & Smart Solutions",
							"description": "Our IoT solutions bring intelligence to infrastructure — enabling smarter cities, safer communities, and more efficient services.",
							"provider": {
								"@type": "Organization",
								"name": "Unilogic"
							}
						},
						{
							"@type": "Service",
							"serviceType": "Digital Marketing",
							"description": "Data-driven strategies that improve communication between government and citizens, increasing awareness and engagement.",
							"provider": {
								"@type": "Organization",
								"name": "Unilogic"
							}
						}
					]
				})
			}
		]
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
