'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Course, getTotalLessons } from '@/lib/mockData';

interface CourseCardProps {
  course: Course;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'text-accent' : 'text-sand'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function CourseCard({ course }: CourseCardProps) {
  const [imageError, setImageError] = useState(false);
  const isFree = course.price === null;
  const priceDisplay = isFree ? 'Free' : `Rs. ${course.price!.toLocaleString()}`;
  const totalLessons = getTotalLessons(course);
  const discount = course.originalPrice && course.price
    ? Math.round((1 - course.price / course.originalPrice) * 100)
    : null;

  return (
    <Link href={`/courses/${course.slug}`} className="group block no-underline h-full">
      <div className="bg-white border border-sand rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative h-48 bg-cream overflow-hidden">
          {imageError ? (
            <div className="w-full h-full bg-[#1a4a3a] flex items-center justify-center p-4">
              <span className="text-[#c9a84c] font-bold text-center leading-tight">{course.category}</span>
            </div>
          ) : (
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge */}
          {course.badge && (
            <span
              className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${
                course.badge === 'bestseller'
                  ? 'bg-accent text-forest'
                  : course.badge === 'new'
                  ? 'bg-primary text-white'
                  : 'bg-primary text-mint'
              }`}
            >
              {course.badge === 'bestseller' ? 'Best Seller' : course.badge === 'new' ? 'New' : 'Free'}
            </span>
          )}

          {/* Wishlist */}
          <button
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110"
            onClick={(e) => e.preventDefault()}
            aria-label="Add to wishlist"
          >
            <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category + Rating row */}
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-mint/20 px-2 py-0.5 rounded">
              {course.category}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-forest">{course.rating}</span>
              <Stars rating={course.rating} />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-forest text-[15px] leading-snug mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-xs text-sage mb-auto">
            {course.instructor}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-sage mt-3 pt-3 border-t border-sand">
            <span>{course.duration}h total</span>
            <span>·</span>
            <span>{totalLessons} lessons</span>
            <span>·</span>
            <span>{course.level}</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-forest">
                {priceDisplay}
              </span>
              {course.originalPrice && !isFree && (
                <span className="text-xs text-sage line-through">
                  Rs. {course.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {discount && (
              <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
