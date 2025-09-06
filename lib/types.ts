


// lib/types.ts
export interface Instructor {
  id: number;
  Instructor_name: string;
  about_Instructor?: string;
  Instructor_image_url?: string;
  years_experience?: string;
  specialization?:string;

}



export interface Partner {
  id: number;
  partner_name:string;
  description:string;
  logo_url:string;
  website_url:string; 
  country:string; 
}

export interface Ambassadors {
  id: number;
  college:string;
  name:string;
  image_url:string;
  // website_url:string; 
  // country:string; 
}

export interface Sponsors {
  id: number;
  Sponsor_name:string;
  description:string;
  logo_url:string;

  // website_url:string; 
}


export interface Testimonial {
  id: number;
  name:string ;
  diploma_name:string;
  opinion:string;
  image_url:string;

  // website_url:string; 
}




export interface Author {
  id: number;
  name: string;
  image?: string;
  bio?: string;
  role?: string; 
}

export interface Category {
  id: number;
  name: string;
  icon?: string;
}

// types.ts
export interface Blog {
  id:string;
  title: string;
  content: string;
  category: string;
  created_at: string;
  duration_bost: string;
  image_url: string;
  auther: any;
  slug: string;   
}

// lib/types.ts

export interface Course {
  id: number;
  title: string;
  description: string;
  full_description: string;        // ✅ Add this
  image_url: string;              // ✅ Add this  
  duration: string;
  level: string;
  Instructor_name: string;        // ✅ Add this
  Instructor_image_url: string;   // ✅ Add this
  students_numbers: string;       // ✅ Add this
  starts: string;                 // ✅ Add this (rating)
  created_at: string;
  WhatLearn: string

  

  price?: number;
  discountedPrice?: number;
  lessons?: any[];
  whatYouWillLearn?: string[];
  requirements?: string[];
  certificate?: boolean;
  language?: string;
  category?: any;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  isFree: boolean;
  resources?: Resource[];
}

export interface Resource {
  id: number;
  name: string;
  type: 'pdf' | 'video' | 'link' | 'document';
  url: string;
}

export interface Review {
  id: number;
  author: Author;
  rating: number;
  content: string;
  date: string;
}


export interface CourseApiResponse {
  id: number;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  duration: string;
  level: string;
  Instructor_name: string;
  Instructor_image_url: string;
  students_numbers: string;
  starts: string; // rating
  created_at: string;
}




// Component Props Types
export interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    image?: string;
  };
  tags: string[];
}

export interface CourseCardProps {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  price: number;
  discountedPrice?: number;
  duration: string;
  level: string;
  instructor: {
    name: string;
    image?: string;
  };
  rating: number;
  studentsEnrolled: number;
}

export interface BlogDetailsProps {
  blog: Blog;
  relatedBlogs: Blog[];
}

export interface CourseDetailsProps {
  course: Course;
  relatedCourses: Course[];
}
