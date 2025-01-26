import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

const BlogDetails = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setLoading(true);
    fetch("/blog-posts.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        const foundPost = data.find((p) => p.id === Number(id));
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError("Blog post not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
        setError("Failed to load blog post");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-center text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="container mx-auto px-4 py-8 text-center">Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/blog" className="inline-flex items-center text-[#7E90FE] hover:underline mb-6">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Blog
      </Link>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
          <div className="flex flex-wrap items-center text-gray-600 mb-6">
            <span className="flex items-center mr-4 mb-2">
              <User className="mr-2 h-5 w-5" />
              {post.author}
            </span>
            <span className="flex items-center mb-2">
              <Calendar className="mr-2 h-5 w-5" />
              {post.date}
            </span>
          </div>
          <div className="prose max-w-none">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
