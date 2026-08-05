// generate a function that returns a list of posts with the following properties: title, slug, date, and description. The function should return an array of objects with these properties. The function should be called getPosts and should be exported from the module. The function should be asynchronous and should return a promise that resolves to the array of posts. The function should read the posts from a JSON file located at app/lib/posts.json. The JSON file should contain an array of objects with the properties title, slug, date, and description. The function should use the fs module to read the file and parse the JSON data. The function should handle any errors that may occur while reading the file or parsing the JSON data.

import fs from 'fs/promises';
import path from 'path';

export async function getPosts() {
  const filePath = path.join(process.cwd(), 'app/lib/posts.json');
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const posts = JSON.parse(data) as { title: string; slug: string; date: string; content: string }[];
    return posts;
  } catch (error) {
    console.error('Error reading or parsing posts.json:', error);
    return [];
  }
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPostBySlug(slug: string) {
  try {
    await delay(2000); // Simulate a delay
    const posts = await getPosts();
    const post = posts.find((post) => post.slug === slug);
    if (!post) {
      throw new Error(`Post with slug "${slug}" not found.`);
    }
    return post;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    throw error;
  }
}