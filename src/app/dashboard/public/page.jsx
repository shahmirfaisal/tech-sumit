import AddContent from "@/components/AddContent"
import { Button } from "@/components/ui/button"
import { connectToDb } from "@/database/connection"
import { StudyMaterial } from "@/database/models/StudyMaterial"
import { parseData } from "@/lib/database"
import Link from "next/link"
import React from "react"

const page = async () => {
  await connectToDb()
  let posts = await StudyMaterial.find({ classroom: null }).populate("owner")
  posts = parseData(posts)
  console.log(posts)

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
              Educational Resources
            </h2>
            <p className="font-light text-gray-500 sm:text-xl">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>

          <div>
            <AddContent>
              <div className="flex justify-end my-4 max-md:mx-4">
                <Button>Post Content</Button>
              </div>
            </AddContent>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
                key={post._id}
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-sm">14 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  <a href="#">{post.title}</a>
                </h2>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">
                      Posted by: {post.owner.name}
                    </span>
                  </div>
                  <Link
                    href={`/dashboard/post/${post._id}`}
                    className="inline-flex items-center font-medium text-primary-600 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
