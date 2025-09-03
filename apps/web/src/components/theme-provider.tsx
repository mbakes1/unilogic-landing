import * as React from "react";

export function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="light">
			{children}
		</div>
	);
}