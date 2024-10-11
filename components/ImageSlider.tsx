"use client";
import { useState } from "react";
import Image from "next/image";

interface ImageData {
    src: string;
}

const images: ImageData[] = [
    {
        src: "https://static.q84sale.com/images/hero_section/h82bVWtbJMwZ@original.png",
    },
    {
        src: "https://static.q84sale.com/images/hero_section/2EJeLRSDJ5lc@original.png",
    },
    {
        src: "https://static.q84sale.com/images/hero_section/aMlENizI1dNZ@original.png",
    },
];

export default function ImageSlider(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full mx-auto max-w-6xl mt-4 lg:p-0 p-4">
            <div
                className="relative lg:h-60 h-32 group"
            >
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="cursor-pointer w-full h-60 rounded-lg"
                />
                <div className="flex justify-center mt-4 absolute bottom-4 z-20 mx-auto left-0 right-0">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 w-2 mx-1 ${index === currentIndex
                                    ? "bg-slate-950 rounded-xl w-6"
                                    : "bg-white rounded-xl"
                                } transition-all duration-500 ease-in-out`}
                        ></div>
                    ))}
                </div>
            </div>
            <button
                className="absolute left-4 top-1/2 transform rounded-full hover:bg-slate-200 shadow-sm -translate-y-1/2 bg-white border border-slate-200 text-slate-950 px-2 py-1 group"
                onClick={prevSlide}
            >
                <i className="ri-arrow-left-s-line text-gray-950 group"></i>
            </button>
            <button
                className="absolute right-4 top-1/2 transform rounded-full hover:bg-slate-200 shadow-sm -translate-y-1/2 bg-white border border-slate-200 text-slate-950 px-2 py-1 group"
                onClick={nextSlide}
            >
                <i className="ri-arrow-right-s-line text-gray-950 group"></i>
            </button>

        </div>
    );
}