import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Share2 } from "lucide-react";
import { BlogPost } from "@/utils/types";

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600 text-lg">Blog post not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-[#7E90FE] hover:underline mb-8 group">
            <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {post.image && (
              <div className="aspect-video w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {post.readTime || "5 min read"}
                  </span>
                </div>

                <button
                  className="ml-auto flex items-center gap-2 text-sm text-gray-500 hover:text-[#7E90FE] transition-colors"
                  onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
