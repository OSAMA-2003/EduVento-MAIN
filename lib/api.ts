import { supabase } from './supabase';
import { Blog, Course, Instructor, Testimonial, Partner ,Ambassadors,Sponsors} from './types';

// === Handler for all errors (موحد) ===
const handleSupabaseError = (error: any, context: string) => {
  if (error) {
    console.error(`Supabase Error [${context}]:`, error);
    throw new Error(`${context} failed: ${error.message}`);
  }
};

// ========== الكورسات ==========
export async function fetchAllCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('Courses')
    .select('*')
    .order('created_at', { ascending: false });
  handleSupabaseError(error, 'fetchAllCourses');
  return data || [];
}

export async function fetchCourseById(id: number): Promise<Course | null> {
  const { data, error } = await supabase
    .from('Courses')
    .select('*')
    .eq('id', id)
    .single();
  handleSupabaseError(error, 'fetchCourseById');
  return data;
}

// ========== المقالات ==========
export async function fetchAllArticles(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });
  handleSupabaseError(error, 'fetchAllArticles');
  return data || [];
}

export async function fetchArticleById(id: number): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();
  handleSupabaseError(error, 'fetchArticleById');
  return data;
}

export async function fetchArticleBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', decodeURIComponent(slug))
    .single();
  if (error) {
    console.error('Error fetching article by slug:', error);
    return null;
  }
  return data;
}

export async function fetchRelatedArticles(
  currentArticleId: number,
  category: string,
  limit: number = 3
): Promise<Blog[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .neq('id', currentArticleId)
    .eq('category', category)
    .limit(limit)
    .order('created_at', { ascending: false });
  handleSupabaseError(error, 'fetchRelatedArticles');
  return data || [];
}

// ========== المدربون ==========
export async function fetchAllInstructors(): Promise<Instructor[]> {
  const { data, error } = await supabase
    .from('Instructors')
    .select('*')
    .order('id', { ascending: true });
  handleSupabaseError(error, 'fetchAllInstructors');
  return data || [];
}

export async function fetchInstructorById(id: number): Promise<Instructor | null> {
  const { data, error } = await supabase
    .from('Instructors')
    .select('*')
    .eq('id', id)
    .single();
  handleSupabaseError(error, 'fetchInstructorById');
  return data;
}


// ========== شركاؤنا ==========
export async function fetchAllPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('id', { ascending: true });
  handleSupabaseError(error, 'fetchAllPartners');
  return data || [];
}

export async function fetchPartnerById(id: number): Promise<Partner | null> {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('id', id)
    .single();
  handleSupabaseError(error, 'fetchPartnerById');
  return data;
}

// ========== آراء الطلاب ==========
export async function fetchAllTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('Testimonials')
    .select('*')
    .order('id', { ascending: true });
  handleSupabaseError(error, 'fetchAllTestimonials');
  return data || [];
}


// سفراء Eduvento 

export async function fetchAllAmbassadors():Promise<Ambassadors[]> {

  const{data , error} = await supabase
  .from("Ambassadors")
  .select("*")
  .order("id",{ascending:true});
  handleSupabaseError(error,"fetchAllAmbassadors");
  return data || []
  
}
// Sponsors

export async function fetchAllSponsors():Promise<Sponsors[]> {

  const{data , error} = await supabase
  .from("Sponsors")
  .select("*")
  .order("id",{ascending:true});
  handleSupabaseError(error,"fetchAllSponsors");
  return data || []
  
}




// Deprecated - Use fetchAllArticles instead
export const fetchBlogsFromSupabase = fetchAllArticles;
