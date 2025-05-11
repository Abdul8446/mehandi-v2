'use client'

import { useParams } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AnimatedSection from '../../../components/AnimatedSection';

const BlogPost = () => {
  const params = useParams();
  // const { id } = router.query;
  const id = params.id as string;

  // This would typically come from an API or getStaticProps
  const post = {
    title: 'The History and Significance of Mehandi in Indian Weddings',
    date: 'May 15, 2025',
    author: 'Priya Sharma',
    category: 'Culture',
    content: `
      <p>Mehandi, also known as Henna, has been an integral part of Indian weddings for centuries. This ancient art form not only adorns the bride's hands and feet but also carries deep cultural significance and meaning.</p>
      
      <h2>The Origins</h2>
      <p>The tradition of applying mehandi dates back to ancient Egypt, but it found its deepest roots in Indian culture. The intricate patterns and designs symbolize the deep bond between the bride and groom, with many believing that the darker the color, the stronger the love will be.</p>
      
      <h2>Regional Variations</h2>
      <p>Different regions of India have their own unique mehandi styles and patterns. While North Indian designs often feature fine lines and floral patterns, South Indian mehandi tends to be bold with geometric shapes. Western Indian designs are known for their dense coverage and intricate details.</p>
      
      <h2>Modern Interpretations</h2>
      <p>Today's brides are experimenting with fusion designs that combine traditional motifs with contemporary elements. Some popular trends include portrait mehandi, architectural elements, and personalized story-telling through designs.</p>
    `,
    image: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };

  return (
    <>
      <Head>
        <title>{post.title} | Mehndi Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <meta property="og:image" content={post.image} />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <AnimatedSection className="relative h-96">
            <div className="w-full h-full relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="container mx-auto px-4 pb-12">
                  <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center text-white/80 text-sm">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-lg">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;