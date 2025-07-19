import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import DoctorConversation from "@/assets/images/doctor-conversation.png";
import FemaleHairTreatment from "@/assets/images/female-hair-treatment.jpg";
import FemaleLegThreapy from "@/assets/images/female-leg-therapy.png";
import FemaleMassage from "@/assets/images/female-massage.png";
import HairSaloon from "@/assets/images/hair-saloon.jpg";
import { cn } from "@/lib/utils";

const carouselImages = [
	DoctorConversation,
	FemaleHairTreatment,
	FemaleLegThreapy,
	FemaleMassage,
	HairSaloon,
];

export default function HeroCarousel() {
	const autoPlay = true;
	const autoPlayInterval = 4000;
	const [currentIndex, setCurrentIndex] = useState(
		Math.floor(carouselImages.length / 2)
	);

	useEffect(() => {
		if (!autoPlay) return;

		const interval = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % carouselImages.length
			);
		}, autoPlayInterval);

		return () => clearInterval(interval);
	}, [autoPlay, autoPlayInterval, carouselImages.length]);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
	};

	const getImageStyle = (index: number) => {
		// Calculate the shortest distance considering circular array
		const totalImages = carouselImages.length;
		let diff = index - currentIndex;

		// Handle circular positioning for infinite loop
		if (diff > totalImages / 2) {
			diff -= totalImages;
		} else if (diff < -totalImages / 2) {
			diff += totalImages;
		}

		const absIndex = Math.abs(diff);

		// Base styles
		let transform = "";
		let zIndex = totalImages - absIndex;
		let opacity = 1;
		let scale = 1;

		if (diff === 0) {
			// Center image
			transform = "translateX(0) translateZ(0) rotateY(0deg)";
			scale = 1.1;
			zIndex = totalImages + 1;
		} else if (diff === -1) {
			// Left adjacent
			transform = "translateX(-80%) translateZ(-100px) rotateY(25deg)";
			scale = 0.85;
			opacity = 0.8;
		} else if (diff === 1) {
			// Right adjacent
			transform = "translateX(80%) translateZ(-100px) rotateY(-25deg)";
			scale = 0.85;
			opacity = 0.8;
		} else if (diff === -2) {
			// Far left
			transform = "translateX(-140%) translateZ(-200px) rotateY(35deg)";
			scale = 0.7;
			opacity = 0.6;
		} else if (diff === 2) {
			// Far right
			transform = "translateX(140%) translateZ(-200px) rotateY(-35deg)";
			scale = 0.7;
			opacity = 0.6;
		} else if (absIndex <= Math.floor(totalImages / 2)) {
			// Visible but further away
			const side = diff > 0 ? 1 : -1;
			transform = `translateX(${
				side * (120 + absIndex * 20)
			}%) translateZ(-${100 + absIndex * 50}px) rotateY(${
				side * -30
			}deg)`;
			scale = Math.max(0.5, 0.9 - absIndex * 0.1);
			opacity = Math.max(0.3, 0.8 - absIndex * 0.15);
		} else {
			// Hidden images (too far)
			opacity = 0;
			scale = 0.3;
			transform = `translateX(${
				diff > 0 ? "300%" : "-300%"
			}) translateZ(-400px)`;
		}

		return {
			transform: `${transform} scale(${scale})`,
			zIndex,
			opacity,
			transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
		};
	};

	return (
		<div className="relative w-full max-w-7xl mx-auto select-none">
			<div
				className="relative h-80 flex items-center justify-center overflow-hidden"
				style={{ perspective: "10000px" }}
			>
				{carouselImages.map((image, index) => (
					<div
						key={index}
						className="absolute w-64 h-64 cursor-pointer"
						style={getImageStyle(index)}
						onClick={() => setCurrentIndex(index)}
					>
						<div className="relative w-full h-full overflow-hidden duration-300">
							<img
								src={image}
								alt={"image"}
								className={cn(
									"object-cover w-full h-full rounded-2xl",
									index === currentIndex &&
										"border-4 border-primary"
								)}
							/>
							{/* Overlay for non-center images */}
							{index !== currentIndex && (
								<div className="absolute inset-0 bg-white/30 transition-opacity duration-300" />
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
