import { Button } from "@/components/ui/button"
import { Classroom } from "@/database/models/Classroom"
import { parseData } from "@/lib/database"
import React from "react"
import JoinClassroom from "./JoinClassroom"
import { getUser } from "@/lib/user"
import { connectToDb } from "@/database/connection"
import AddContent from "@/components/AddContent"
import { StudyMaterial } from "@/database/models/StudyMaterial"
import Link from "next/link"

const page = async ({ params: { id } }) => {
  await connectToDb()
  let classroom = await Classroom.findById(id)
  classroom = parseData(classroom)
  const user = await getUser()
  const isMember = classroom.members.includes(user._id)
  let posts = await StudyMaterial.find({ classroom: classroom._id })
  posts = parseData(posts)

  return (
    <div className="max-w-7xl mx-auto text-center mt-10 flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-3xl">{classroom.name}</h2>
        <p>{classroom.description}</p>
      </div>

      {user.type === "Teacher" ? null : isMember ? (
        <Button disabled className="self-center">
          Joined
        </Button>
      ) : (
        <JoinClassroom user={user} classroom={classroom} />
      )}

      {classroom.owner === user._id ? (
        <AddContent classroomId={classroom._id}>
          <Button className="self-center">Post Study Material</Button>
        </AddContent>
      ) : null}

      {classroom.owner === user._id || classroom.members.includes(user._id) ? (
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
      ) : null}
    </div>
  )
}

export default page
