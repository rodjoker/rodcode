import BlogDetailPage from '@/components/BlogDetailPage';
import BlogPost from './BlogDetails';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      
      <BlogPost blogId={params.id} />
      
    </>
  );
}