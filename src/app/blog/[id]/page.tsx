import BlogPost from './BlogDetails';

export default async function Page({ params }: { params: { id: string } }) {
  const resolvedParams = await params;

  return (
    <>
      <BlogPost blogId={resolvedParams.id} />
    </>
  );
}
