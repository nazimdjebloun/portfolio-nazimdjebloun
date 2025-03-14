import React from 'react'
import { TimelineDemo } from "../../components/about/components/education";
import { motion } from "framer-motion";

export default function index() {

  return (
    <div className="py-40 ">
      {/* <Description /> */}
      <div className="flex justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col justify-center items-center"
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Education
          </span>
        </motion.div>
        <div className="bg-background">
          <TimelineDemo />
        </div>
      </div>
    </div>
  );
}


        //   <div className="container mx-auto px-4 py-16">
        //   <section className="mb-20">
        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        //       {/* Education Card 1 */}
        //       <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        //         <div className="bg-indigo-600 py-4 px-6">
        //           <h3 className="text-xl font-bold text-white">
        //             Computer Science
        //           </h3>
        //           <p className="text-indigo-100">Bachelor's Degree</p>
        //         </div>
        //         <div className="p-6">
        //           <div className="flex items-center mb-3">
        //             <MapPin className="w-5 h-5 text-gray-500 mr-2" />
        //             <p className="text-gray-700">University of Technology</p>
        //           </div>
        //           <div className="flex items-center mb-3">
        //             <Calendar className="w-5 h-5 text-gray-500 mr-2" />
        //             <p className="text-gray-700">2018 - 2022</p>
        //           </div>
        //           <div className="flex items-center mb-4">
        //             <Award className="w-5 h-5 text-gray-500 mr-2" />
        //             <p className="text-gray-700">GPA: 3.8/4.0</p>
        //           </div>
        //           <p className="text-gray-600 mb-4">
        //             Focused on web development, algorithms, and user experience
        //             design. Completed capstone project on responsive web
        //             applications.
        //           </p>
        //           <div className="flex flex-wrap gap-2">
        //             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
        //               JavaScript
        //             </span>
        //             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
        //               React
        //             </span>
        //             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
        //               UI/UX
        //             </span>
        //           </div>
        //         </div>
        //       </div>

        //       {/* Education Card 2 */}
        //       <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        //         <div className="bg-indigo-600 py-4 px-6">
        //           <h3 className="text-xl font-bold text-white">
        //             Web Development
        //           </h3>
        //           <p className="text-indigo-100">Advanced Certification</p>
        //         </div>
        //         <div className="p-6">
        //           <div className="flex items-center mb-3">
        //             <MapPin className="w-5 h-5 text-gray-500 mr-2" />
        //             <p className="text-gray-700">Frontend Masters Academy</p>
        //           </div>
        //           <div className="flex items-center mb-3">
        //             <Calendar className="w-5 h-5 text-gray-500 mr-2" />
        //             <p className="text-gray-700">2022 - 2023</p>
        //           </div>
        //           <div className="flex items-center mb-4">
        //             <ExternalLink className="w-5 h-5 text-gray-500 mr-2" />
        //             <a href="#" className="text-indigo-600 hover:underline">
        //               View Certificate
        //             </a>
        //           </div>
        //           <p className="text-gray-600 mb-4">
        //             Intensive program covering modern frontend frameworks,
        //             responsive design principles, and advanced JavaScript
        //             concepts.
        //           </p>
        //           <div className="flex flex-wrap gap-2">
        //             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
        //               TypeScript
        //             </span>
        //             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
        //               Next.js
        //             </span>
        //             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
        //               Tailwind
        //             </span>
        //           </div>
        //         </div>
        //       </div>
        //     </div>

        //     {/* Additional Courses Section */}
        //     <div className="mt-12">
        //       <h3 className="text-2xl font-bold text-gray-800 mb-6">
        //         Additional Courses
        //       </h3>
        //       <div className="bg-white rounded-xl shadow-md p-6">
        //         <ul className="space-y-4">
        //           <li className="flex items-start">
        //             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
        //               <span className="text-indigo-600 text-sm font-bold">
        //                 01
        //               </span>
        //             </div>
        //             <div className="ml-3">
        //               <p className="text-lg font-medium text-gray-800">
        //                 Advanced React Patterns
        //               </p>
        //               <p className="text-gray-600">Frontend Masters (2023)</p>
        //             </div>
        //           </li>
        //           <li className="flex items-start">
        //             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
        //               <span className="text-indigo-600 text-sm font-bold">
        //                 02
        //               </span>
        //             </div>
        //             <div className="ml-3">
        //               <p className="text-lg font-medium text-gray-800">
        //                 UI/UX Design Fundamentals
        //               </p>
        //               <p className="text-gray-600">Design+Code (2022)</p>
        //             </div>
        //           </li>
        //           <li className="flex items-start">
        //             <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
        //               <span className="text-indigo-600 text-sm font-bold">
        //                 03
        //               </span>
        //             </div>
        //             <div className="ml-3">
        //               <p className="text-lg font-medium text-gray-800">
        //                 Full Stack Development with Node.js
        //               </p>
        //               <p className="text-gray-600">Udemy (2021)</p>
        //             </div>
        //           </li>
        //         </ul>
        //       </div>
        //     </div>
        //   </section>
        // </div>
  
  



