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

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	component: RootComponent,
	head: () => ({
		title: "Unilogic | Digital Transformation for South Africa's Public Sector",
		meta: [
			{
				name: "description",
				content: "Unilogic is a dynamic new player in digital transformation for the South African public sector. We bring fresh perspectives and cutting-edge technology solutions, including IT infrastructure, IoT, and digital marketing, to enhance efficiency, transparency, and citizen engagement.",
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
			{
				rel: "preload",
				href: "/herrroo.jpg",
				as: "image"
			}
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
							"description": "Secure, scalable infrastructure that modernizes government operations while meeting public sector compliance requirements. As an emerging company, we bring fresh approaches to traditional challenges.",
							"provider": {
								"@type": "Organization",
								"name": "Unilogic"
							}
						},
						{
							"@type": "Service",
							"serviceType": "IoT & Smart Solutions",
							"description": "Our innovative IoT solutions bring intelligence to infrastructure — enabling smarter cities, safer communities, and more efficient services through fresh perspectives.",
							"provider": {
								"@type": "Organization",
								"name": "Unilogic"
							}
						},
						{
							"@type": "Service",
							"serviceType": "Digital Marketing",
							"description": "Data-driven strategies that improve communication between government and citizens, increasing awareness and engagement. We bring new approaches to public sector communication challenges.",
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



	return (
		<>
			<HeadContent />
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				disableTransitionOnChange
				storageKey="vite-ui-theme"
			>
				<div className="grid grid-rows-[auto_1fr] min-h-screen">
					<HeroHeader />
					{isFetching ? <Loader /> : <Outlet />}
				</div>
				<Toaster richColors />
			</ThemeProvider>
			<TanStackRouterDevtools position="bottom-left" />
		</>
	);
}
