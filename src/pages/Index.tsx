import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Component } from "lucide-react";

const Index = () => {
	const techStack = [
		{
			name: "React 18.3.1",
			icon: Component,
			description: "Latest React with hooks and concurrent features",
		},
		{
			name: "TypeScript",
			icon: Code,
			description: "Type-safe development with full IDE support",
		},
		{
			name: "Tailwind CSS",
			icon: Palette,
			description: "Utility-first CSS framework for rapid styling",
		},
		{
			name: "Vite",
			icon: Zap,
			description: "Lightning fast build tool and dev server",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
			<div className="container mx-auto px-4 py-16">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Welcome to Your React Project
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
						A modern, production-ready React application built with
						the latest technologies and best practices.
					</p>
					<div className="flex flex-wrap justify-center gap-2 mb-8">
						<Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
							React Router DOM 6.26.2
						</Badge>
						<Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
							shadcn/ui Components
						</Badge>
						<Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
							TanStack Query
						</Badge>
						<Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
							Lucide Icons
						</Badge>
					</div>
					<Button
						className="bg-primary text-white hover:bg-primary/90 mr-4"
						size="lg"
					>
						Get Started
					</Button>
					<Button
						className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
						size="lg"
					>
						View Documentation
					</Button>
				</div>

				{/* Tech Stack Cards */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					{techStack.map((tech, index) => (
						<Card
							key={index}
							className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
						>
							<CardHeader className="text-center">
								<tech.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
								<CardTitle className="text-lg text-gray-900">
									{tech.name}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-center text-gray-600">
									{tech.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Features Section */}
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200">
					<h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
						What's Included
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
								<Component className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
								Component Library
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Pre-built shadcn/ui components ready to use with
								consistent design
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
								<Zap className="w-8 h-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
								Fast Development
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Hot reload, TypeScript support, and optimized
								build process
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
								<Palette className="w-8 h-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
								Modern Styling
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Tailwind CSS with dark mode support and
								responsive design
							</p>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="text-center mt-16">
					<p className="text-gray-500 dark:text-gray-400">
						Ready to build something amazing? Start editing the
						components and create your application.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Index;
