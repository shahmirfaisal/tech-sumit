import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="my-4 mx-24 max-sm:mx-4">
      <div>
        <Link
          href="#"
          rel="author"
          class="text-xl font-bold text-gray-900 dark:text-white"
        >
          Jese Leos
        </Link>
        <p class="text-base text-gray-500 dark:text-gray-400">
          Teacher / Student
        </p>
        <p class="text-base text-gray-500 dark:text-gray-400">
          <time pubdate datetime="2022-02-08" title="February 8th, 2022">
            Feb. 8, 2022
          </time>
        </p>
      </div>
      <div>
        <h1 class="my-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl">
          Best practices for successful prototypes
        </h1>
        <p>
          Flowbite is an open-source library of UI components built with the
          utility-first classes from Tailwind CSS. It also includes interactive
          elements such as dropdowns, modals, datepickers.
        </p>

        <img
          className="my-4"
          src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
          alt=""
        />

        <iframe
          width="560"
          height="315"
          className="rounded-lg"
          src="https://www.youtube.com/embed/SHT0y9Gq_rk?si=yaGB-vsbSeqf9IyH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default page;
