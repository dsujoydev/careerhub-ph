import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ChevronRight } from "lucide-react";
import { BlogPost } from "@/utils/types";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/blog-posts.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{post.title}</h2>
              <div className="flex justify-between items-center text-gray-600 mb-4">
                <span className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  {post.date}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            </div>
            <div className="px-6 pb-6">
              <Link to={`/blog/${post.id}`} className="text-[#7E90FE] font-semibold flex items-center hover:underline">
                Read More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
