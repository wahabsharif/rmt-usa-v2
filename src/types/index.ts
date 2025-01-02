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
