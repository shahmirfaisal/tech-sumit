import SubmitButton from "@/components/SubmitButton"
import React from "react"

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className="text-green-500">Learn and grow</span> in community and prepare for future</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Study.ai is a platform that allows, students to come to a common place, share their learning resources, learn and grow in community and prepares them for future. It uses AI to assist students.
            </p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 me-3 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Get Started
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Login
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/learn.svg" alt="mockup" />
          </div>
        </div>
      </section>

      
      <Footer></Footer>
    </div>
  )
}

export default page;
