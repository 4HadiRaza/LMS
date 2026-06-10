import { Course } from '@/lib/mockData';
import CourseCard from './CourseCard';

interface CourseGridProps {
  courses: Course[];
  isLoading?: boolean;
}

export default function CourseGrid({ courses, isLoading }: CourseGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-cream rounded-xl h-[420px] animate-pulse" />
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-forest mb-1">No courses found</p>
        <p className="text-sm text-sage">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
