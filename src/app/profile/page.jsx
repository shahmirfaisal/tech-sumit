import { connectToDb } from "@/database/connection"
import { StudyMaterial } from "@/database/models/StudyMaterial"
import { parseData } from "@/lib/database"
import { getUser } from "@/lib/user"
import { redirect } from "next/navigation"
import React from "react"

const page = async () => {
  await connectToDb()
  const user = await getUser()
  let posts = await StudyMaterial.find({ owner: user._id })
  posts = parseData(posts)

  if (!user) redirect("/login")

  return (
    <>
      <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-gray-700 text-xl">22</p>
                <p class="text-gray-400">Followers</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-gray-400">Following</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">{posts.length}</p>
                <p class="text-gray-400">Posts</p>
              </div>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Follow
              </button>
              <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>
          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{user.name}</h1>
            <p class="font-light text-gray-600 mt-3">Email: {user.email}</p>
            <p class="text-gray-500">{user.type}</p>
          </div>
          <div class="flex flex-col justify-center">
            <section className="bg-white">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                  <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
                    Educational Resources
                  </h2>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                  {posts.map((post) => (
                    <article
                      className="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
                      key={post._id}
                    >
                      <div className="flex justify-between items-center mb-5 text-gray-500">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center py-0.5 rounded">
                          {post.text ? "Text" : post.image ? "Image" : "Video"}
                          {/* {post.} */}
                        </span>
                        <span className="text-sm">14 days ago</span>
                      </div>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        <a href="#">{post.title}</a>
                      </h2>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium dark:text-white">
                            Posted by: {user.name}
                          </span>
                        </div>
                        <a
                          href="#"
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
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
