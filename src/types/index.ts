export interface BlogPost {
  id: number;
  slug: string;
  featured_image: string;
  title: string;
  created_at: string;
  content: string;
  category: string;
  tags: [];
}

export interface Event {
  id: number;
  slug: string;
  image: string;
  title: string;
  date_time: string;
  description: string;
  location: string;
}
