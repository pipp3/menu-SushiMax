"use client";

import CategoryNavbar from '@/components/CategoryNavbar';
import { usePathname } from 'next/navigation';

export default function CategoryLayout({ children }) {
  const pathname = usePathname();
  const category = pathname.split('/').pop();

  return (
    <div className="min-h-screen bg-white">
      <CategoryNavbar category={category} />
      <div className="container mx-auto px-4 py-8 pt-32">
        {children}
      </div>
    </div>
  );
} 