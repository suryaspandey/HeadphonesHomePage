import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { BlogsData } from "./constants";

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-12">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {BlogsData.map((data) => {
              return (
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-6 p-4 max-w-72 mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 hover:duration-300">
                    <img src={data.img} alt={data.title} />
                    <div className="space-y-2">
                      <h1 className="text-xl md:text-2xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p className="line-clamp-2">{data.desc}</p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
