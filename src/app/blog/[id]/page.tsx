import BlogPost from './BlogDetails';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      
      <BlogPost blogId={params.id} />
      
    </>
  );
}