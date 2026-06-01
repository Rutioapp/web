import { blogPosts, type BlogPost } from "@/content/blog/posts";

function sortByDateDescending(posts: BlogPost[]) {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllBlogPosts() {
  return sortByDateDescending(blogPosts);
}

export function getPublishedBlogPosts() {
  return sortByDateDescending(blogPosts.filter((post) => !post.draft));
}

export function getDraftBlogPosts() {
  return sortByDateDescending(blogPosts.filter((post) => post.draft));
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
}
