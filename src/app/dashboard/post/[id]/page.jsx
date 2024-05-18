import { connectToDb } from "@/database/connection"
import { StudyMaterial } from "@/database/models/StudyMaterial"
import { parseData } from "@/lib/database"
import Link from "next/link"
import React from "react"

const page = async ({ params: { id } }) => {
  await connectToDb()
  let post = await StudyMaterial.findById(id).populate("owner")
  post = parseData(post)
  console.log(`https://www.youtube.com/embed/${post.video.split("v=")[1]}`)

  return (
    <div className="my-4 mx-24 max-sm:mx-4">
      <div>
        <Link
          href="#"
          rel="author"
          class="text-xl font-bold text-gray-900 dark:text-white"
        >
          {post.owner.name}
        </Link>
        <p class="text-base text-gray-500 dark:text-gray-400">
          {post.owner.type}
        </p>
        <p class="text-base text-gray-500 dark:text-gray-400">
          <time pubdate datetime="2022-02-08" title="February 8th, 2022">
            Feb. 8, 2022
          </time>
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 class="text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl">
          {post.title}
        </h1>
        <p>{post.text}</p>

        {post.image && <img className="my-4" src={post.image} alt="" />}

        {post.video && (
          <iframe
            width="560"
            height="315"
            className="rounded-lg"
            src={`https://www.youtube.com/embed/${post.video.split("v=")[1]}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </div>
  )
}

export default page
