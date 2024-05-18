import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubmitButton from "@/components/SubmitButton"
import React from "react"

const page = () => {
  return (
    <div>
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

      <section class="pt-15 pb-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                  <div class="relative w-full text-center lg:text-left lg:w-2/4">
                      <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Enjoy the finest features with our products</h2>
                  </div>
                  <div class="relative w-full text-center  lg:text-left lg:w-2/4">
                      <p class="text-lg font-normal text-gray-500 mb-5">We provide all the advantages that can simplify all your educational needs without any further requirements</p> 
                  </div>
              </div>
              <div class="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                  <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600">
                      <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                         <img src="/profile.svg" alt="" width="40"/>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">User Profiling</h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          Easily Create and manage your profile.
                      </p>
                  </div>
                  <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600">
                      <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                      <img src="/book.svg" alt="" width="40"/>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Study Material</h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          Access Exclusive Study Material shared by the expert teachers.  
                      </p>
                  </div>
                  <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600">
                      <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                      <img src="chat.svg" alt="" width="40"/>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Chat & Meetings</h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          Teacher and studentd can Chat and Schedule meetings with each others.
                      </p>
                  </div>
                  <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-green-600">
                      <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                      <img src="/quiz.svg" alt=""  className="px-1" width="40"/>
                              
                      </div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Test Generation</h4>
                      <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                      Teachers can Generate quizzes for various subjects and marks the quizzes for the students and store the marks.

                      </p>
                  </div>
              </div>
        </div>
      </section>
    </div>
  )
}

export default page;
