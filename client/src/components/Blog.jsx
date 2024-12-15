import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';


  const posts = [
    {
      id: 1,
      title: 'Simplify Inventory Management',
      href: '#',
      description:
        'Effortlessly track and manage your bookstore inventory with real-time updates and comprehensive reporting. Say goodbye to stock mismatches!',
      date: 'Nov 30, 2024',
      datetime: '2024-11-30',
      category: { title: 'Inventory Management', href: '#' },
      author: {
        name: 'Emily Carter',
        role: 'Product Manager',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Optimize Bookstore Operations',
      href: '#',
      description:
        'Streamline your bookstore operations with powerful tools for inventory, sales analytics, and customer insights in one seamless platform.',
      date: 'Oct 9, 2024',
      datetime: '2024-10-9',
      category: { title: 'Business Efficiency', href: '#' },
      author: {
        name: 'James Parker',
        role: 'CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Track Sales Like Never Before',
      href: '#',
      description:
        'Gain valuable insights into your bookstore sales trends with our advanced analytics and reporting tools, helping you stay ahead of the curve.',
      date: 'Jul 28, 2024',
      datetime: '2024-07-28',
      category: { title: 'Sales Analytics', href: '#' },
      author: {
        name: 'Sophia Bennett',
        role: 'Data Scientist',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 4,
      title: 'Automate Your Inventory Updates',
      href: '#',
      description:
        'Automatically update stock levels and receive low-stock alerts to ensure your shelves are always full of customer favorites.',
      date: 'Apr 2, 2024',
      datetime: '2024-4-2',
      category: { title: 'Automation', href: '#' },
      author: {
        name: 'Oliver White',
        role: 'Automation Specialist',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1546525848-9bb35e91f5a0?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 5,
      title: 'Revolutionize Bookstore Analytics',
      href: '#',
      description:
        'Harness the power of data to make informed decisions about your inventory and marketing strategies. Empower your bookstore to grow!',
      date: 'Jan 26, 2024',
      datetime: '2024-01-26',
      category: { title: 'Data Insights', href: '#' },
      author: {
        name: 'Lucy Evans',
        role: 'Business Analyst',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
  
  },
  // More posts...
]

const Blog = () => {
  const {loading } = useContext(AuthContext);

  if(loading) {
    return <div className='text-center mt-28'>
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  }


  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog