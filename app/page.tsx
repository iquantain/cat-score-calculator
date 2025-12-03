"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "CAT Score Calculator",
    "image": [
      "https://media.iquanta.in/ui_images/cat-score-calculator.webp"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Verce"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1122"
    }
  };

export default function Home() {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="w-full px-4 py-3.5 bg-black text-white bg-linear-to-r from-[#232323] to-[#1D1D1D]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-[#4BA76D] to-[#2D6C86] text-transparent bg-clip-text lg:text-[24px] text-[16px] font-extrabold">CAT Score Calculator</span>
          </div>
          <button onClick={() => {
    document.getElementById("bSchools")?.scrollIntoView({ behavior: "smooth" });
  }}
          className="cursor-pointer px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition">
            Top B-schools List
          </button>
        </div>
      </nav>

      <div className="banner-wrapper lg:py-20 py-6 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 relative z-10 items-center">
            <div className="content-wrap">
              <h1 className="lg:text-[56px] text-[34px] text-center lg:text-left   leading-[49px] font-extrabold text-white lg:leading-[70px] uppercase lg:mb-6 mb-4">
                CAT&nbsp;
                <span className="bg-gradient-to-r from-[#4BA76D] to-[#2D6C86] text-transparent bg-clip-text">
                  Score Calculator&nbsp;
                </span>
                 2025
              </h1>
              <h2 className="lg:text-[28px] text-[16px] text-center lg:text-left px-4 py-2 bg-[#ffffff1c] font-extrabold italic mb-4">
                Get Your CAT Percentile Prediction!
              </h2>
              <p className="text-white lg:text-[16px] text-[14px] lg:text-left text-center  font-medium">
               Calculate your CAT exam percentile instantly with our fast and accurate CAT Score Calculator. Easy to use, mobile-friendly, and optimized for lightning-fast performance.
              </p>
            </div>
            <div className="form-wrapper bg-linear-to-r from-[#48A170] to-[#307184] rounded-2xl p-[1px]">
              <div className="form-box bg-linear-to-r from-[#232323] to-[#1D1D1D] rounded-2xl h-full p-3">
                <div className="head lg:gap-4 gap-3 flex items-center bg-linear-to-r from-[#4BA76D]/16 to-[#2D6C86]/16 py-3 px-3 rounded-[14px] ">
                  <span className="lg:py-1.5 lg:px-4 py-1 px-2 text-[11px] lg:text-[16px] font-bold bg-linear-to-r from-[#48A170] to-[#307184] rounded-full border border-[#52B568]">
                    New
                  </span>
                  <h3 className="flex lg:gap-1.5 gap-3 items-center uppercase lg:text-[14px] text-[12px] lg:leading-normal leading-[16px] font-bold">
                    <span className="relative flex">
                      <span className="lg:w-[12px] lg:h-[12px] w-[10px] h-[10px] bg-gradient-to-r from-[#48A170] to-[#307184] rounded-full"></span>
                      <span className="absolute inset-0 lg:w-[12px] lg:h-[12px] w-[10px] h-[10px] rounded-full bg-[#48A170] opacity-75 animate-ping"></span>
                    </span>
                    AI Analysis on your Predicted Percentile
                  </h3>
                </div>
                <div className="form-part  rounded-2xl ">
                  <div className="flex items-center  gap-2.5 ">
                    <label className="block lg:text-[12px] text-[10px] bg-white w-fit text-black px-[10px] pt-[5px] pb-[13px] font-medium relative top-[9px] rounded-t-[11px]">
                      Enter Your CAT Response Sheet 
                    </label>
                    <svg
                      className="w-[24px] relative top-[6px]"
                      width="31"
                      height="17"
                      viewBox="0 0 31 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.9453 16.3558C29.4948 16.4119 29.9856 16.0119 30.0417 15.4625L30.9556 6.50903C31.0116 5.9596 30.6117 5.46874 30.0623 5.41266C29.5128 5.35658 29.022 5.75652 28.9659 6.30595L28.1536 14.2646L20.1949 13.4523C19.6455 13.3962 19.1546 13.7961 19.0986 14.3456C19.0425 14.895 19.4424 15.3859 19.9919 15.4419L28.9453 16.3558ZM0.546875 1.86035L1.09314 2.69796C1.79516 2.24013 3.11867 1.92586 5.0233 2.01549C6.89313 2.10348 9.20043 2.57614 11.7546 3.54534C16.8579 5.48185 22.8806 9.37597 28.2716 15.9926L29.0469 15.361L29.8221 14.7293C24.2132 7.84526 17.9025 3.73906 12.4642 1.67544C9.74749 0.644576 7.23187 0.117212 5.11732 0.0177019C3.03758 -0.0801698 1.21526 0.230575 0.000607193 1.02274L0.546875 1.86035Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    placeholder="https://cdn.digialm.com/*****.CAT2612545678.html"
                    className=" relative w-full p-3 focus:outline-none rounded-xl mb-1.5 bg-[#353535] text-white text-[14px] border border-white font-medium"
                  />
                  <div className="p-3 bg-white rounded-2xl">
                    <div className="row flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className=" w-full p-3 focus:outline-none rounded-xl mb-1.5 bg-[#DEDEDE] text-black text-[14px] font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Enter Number"
                        className=" w-full p-3 focus:outline-none rounded-xl mb-1.5 bg-[#DEDEDE] text-black text-[14px] font-medium"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="w-full p-3 focus:outline-none rounded-xl  bg-[#DEDEDE] text-black text-[14px] font-medium"
                    />
                    <button className="group bg-black w-full p-3 text-[16px] font-medium rounded-full mt-2 cursor-pointer flex justify-center gap-2 items-center">
                      Submt
                      <svg
                        className="w-[20px] h-[20px] rotate-[43deg] transition-transform duration-300 group-hover:rotate-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path
                          fill="#fff"
                          d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-circle absolute w-[420px] h-[420px] rounded-full bg-[#4D2F0B] bottom-[-300px] left-[250px] blur-[60px]"></div>
        </div>
      </div>
      <div className="top-schools py-6 px-4" id="bSchools">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-white md:text-[45px] text-[21px] font-extrabold lg:mb-6 mb-4 bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] ">
            IIMs & Top B-schools via CAT
          </h2>
          <div className="tab-wrapper">
            <Tabs>
              <TabList className="flex  flex-nowrap lg:justify-center justify-start lg:overflow-hidden overflow-auto lg:gap-3 gap-2 lg:mb-8 mb-4">
                <Tab
                  className=" w-fit min-w-fit lg:px-6 px-3 lg:py-3 py-2 rounded-lg lg:text-sm text-xs bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] cursor-pointer"
                  selectedClassName="bg-emerald-600"
                >
                  Top 50 B-Schools
                </Tab>
                <Tab
                  className=" w-fit min-w-fit lg:px-6 px-3 lg:py-3 py-2 rounded-lg lg:text-sm text-xs bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] cursor-pointer"
                  selectedClassName="bg-emerald-600"
                >
                  No Sectional Cut Offs
                </Tab>
                <Tab
                  className="w-fit min-w-fit lg:px-6 px-3 lg:py-3 py-2 rounded-lg lg:text-sm text-xs bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] cursor-pointer"
                  selectedClassName="bg-emerald-600"
                >
                  Less Acads weightage
                </Tab>
                <Tab
                  className="w-fit min-w-fit lg:px-6 px-3 lg:py-3 py-2 rounded-lg lg:text-sm text-xs bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] cursor-pointer"
                  selectedClassName="bg-emerald-600"
                >
                  B-Schools via XAT
                </Tab>
                <Tab
                  className=" w-fit min-w-fit lg:px-6 px-3 lg:py-3 py-2 rounded-lg lg:text-sm text-xs bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] cursor-pointer"
                  selectedClassName="bg-emerald-600"
                >
                  With Less %ile
                </Tab>
              </TabList>

              <TabPanel>
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800">
                  <div className="overflow-x-auto">
                    <div className="">
                      <table className="w-full table-auto min-w-[700px]">
                        <thead className="bg-emerald-700 sticky top-0 z-10">
                          <tr>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] w-16">
                              No.
                            </th>
                            <th className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Name
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Highest Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Avg. Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Exams
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              1
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Ahmedabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              35.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              27.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-ahmedabad-2/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              2
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              34.88 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              26.3 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-bangalore/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              3
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Calcutta
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              34.23 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              34.23 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-calcutta/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              4
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              ISB Hyderabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              34.21 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              38.67 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              GMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/isb-hyderabad/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              5
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              FMS Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              34.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              2.32 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/fms-delhi/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              6
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              XLRI Jamshedpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              26.38 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              30.6 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/xlri-jamshedpur/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              7
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Lucknow
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              32.3 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              20.75 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-lucknow/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              8
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              SP Jain
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              32.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              22.66 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/GMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              9
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Kozhikode
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              28.05 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              23.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-kozhikode/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              10
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Indore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              29.57 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21.15 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-indore/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              11
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              33.84 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-mumbai/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              12
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              JBIMS
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              26.12 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              8.13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CMAT/MAHCET
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              13
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              MDI, Gurgaon
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              26.2 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              25.9 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/mdi-gurgaon/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              14
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIT Bombay
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              25.82 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15.21 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/sjmsom-iit-bombay/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              15
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIFT-Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              27.3 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21.82 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              16
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Shillong
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              26.44 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              26.18 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-shillong/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              17
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              TISS Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              28 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              1.85 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              TISSNET
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              18
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IISc Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              29.62 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              5.04 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/GMAT/GATE
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              19
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              SIBM Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              28.83 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              27.77 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              SNAP
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              20
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              NMIMS Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              25.13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              27 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              NMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              21
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIT-Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              23.4 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/dms-iit-delhi/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              22
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIT Kharagpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              22.75 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12.94 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              23
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Raipur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              18.15 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              18 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-raipur/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              24
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Trichy
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.43 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.43 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-trichy/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              25
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Udaipur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              18.77 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              18.77 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-udaipur/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              26
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              SCMHRD Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              22.16 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              27.06 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              SNAP
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              27
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Ranchi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.29 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.2 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-ranchi/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              28
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Rohtak
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              18.73 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              17.9 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-rohtak/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              29
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              XIMB
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.53 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              25.4 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT/XGMT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              30
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              MICA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.22 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              28 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT+MICAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/mica-ahmedabad/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              31
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              
                              IIT Madras
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              17.9 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12.26 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/doms-iit-madras/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              32
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Kashipur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15.04 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              17.3 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-kashipur/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              33
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Nagpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              18.07 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              34
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIT Roorkee
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              17.91 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              9.74 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              35
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIT Kanpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              17.2 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              7.05 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              36
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              BITSOM
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              23.41 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              28.55 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              GMAT, CAT, GRE
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              37
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              DSE
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              13.92 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              38
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              DFS
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.12 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              39
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Vishakhapatnam
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              16.4 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              20.51 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              40
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Amritsar
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.73 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              41
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Jammu
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15.48 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              20.73 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-jammu/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              42
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Sambalpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15.65 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-sambalpur/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              43
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IMT Ghaziabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              16.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21.53 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              44
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              GLIM, Chennai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21.63 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/GMAT/XAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              45
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IMI Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              16.73 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              23.54 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              46
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              GIM Goa
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15.13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15.13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              47
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              FORE, Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              16.8 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              20.77 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              48
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IRMA Anand
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              14.17 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              19.78 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/CMAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <button className="bg-transparent border border-white/40 text-white/70 px-4 py-2 rounded text-xs cursor-default">
                                Coming Soon
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              49
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Sirmaur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              13.3 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              20 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-sirmaur/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              50
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IIM Bodhgaya
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              17.96 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] w-40 whitespace-normal">
                              <a
                                target="_blank"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors text-xs"
                                href="https://www.iquanta.in/blog/iim-bodhgaya/"
                              >
                                View Details
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800">
                  <div className="overflow-x-auto">
                    <div className="">
                      <table className="w-full table-auto min-w-[700px]">
                        <thead className="bg-emerald-700 sticky top-0 z-10">
                          <tr>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] w-16">
                              No.
                            </th>
                            <th className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Name
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Highest Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Avg. Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Exams
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              1
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              FMS Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹123 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹34.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              2
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              SIBM Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹53.58 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹28.83 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              SNAP
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              3
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              DMS IIT Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹40.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹23.4 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              4
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              VGSOM IIT Kharagpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹37.63 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹22.75 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              5
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              SCMHRD Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹35.9 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹22.16 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              SNAP
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              6
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              MICA Ahmedabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹40.91 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹19.22 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT+MICAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              7
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              DoMS IIT Madras
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹35.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹17.9 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              8
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              BITSOM
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹50 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹23.41 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/GMAT/GRE
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              9
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              DFS
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹32 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹19.12 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              10
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              DSE
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹30 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹13.92 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              11
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IMT Ghaziabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹41.55 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹16.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              12
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              GLIM Chennai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹37 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/GMAT/XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              13
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IMI Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹40.31 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹17.91 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              14
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              GIM Goa
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹32.2 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              15
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              NIBM Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹26.6 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹14.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/CMAT/GMAT/GRE
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              16
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IRMA Anand
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹31.84 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.72 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/CMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              17
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              FORE Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹29 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹16.8 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              18
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              KJSOM Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹27.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹12.69 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/NMAT/CMAT/GMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              19
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              UBS Chandigarh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹24 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹12.43 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              20
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              DBE Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹30.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.12 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800">
                  <div className="overflow-x-auto">
                    <div className="">
                      <table className="w-full table-auto min-w-[700px]">
                        <thead className="bg-emerald-700 sticky top-0 z-10">
                          <tr>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] w-16">
                              No.
                            </th>
                            <th className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Name
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Highest Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Avg. Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Exams
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              1
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              XLRI Jamshedpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹110 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹31.08 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              2
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              FMS Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹123 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹34.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              3
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              JBIMS
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹87.12 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹26.12 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/MAH-CET/CMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              4
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              MDI Gurgaon
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹53.6 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹26.2 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              5
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IIFT Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹85.4 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹27.3 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              6
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              SJSoM IIT Bombay
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹53.8 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹25.82 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              7
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              SIBM Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹53.58 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹28.83 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              SNAP
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              8
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              DMS IIT Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹40.5 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹23.4 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              9
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              NMIMS Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹67.7 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹25.13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              NMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              10
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              SCMHRD Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹35.9 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹22.16 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              SNAP
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              11
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              XIM Bhubaneshwar
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹30 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹19.53 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT/XGMT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              12
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              MICA Ahmedabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹40.91 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹19.22 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT+MICAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              13
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IMT Ghaziabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹41.55 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹16.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              14
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              GLIM Chennai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹37 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/GMAT/XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              15
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IRMA Anand
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹31.84 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.72 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/CMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              16
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              FORE Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹29 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹16.8 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/GMAT
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800">
                  <div className="overflow-x-auto">
                    <div className="">
                      <table className="w-full table-auto min-w-[700px]">
                        <thead className="bg-emerald-700 sticky top-0 z-10">
                          <tr>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] w-16">
                              No.
                            </th>
                            <th className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Name
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Highest Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Avg. Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Exams
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              1
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              XLRI Jamshedpur
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹110 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹31.08 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              2
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              XLRI Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹110 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹31.08 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              3
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              XIM Bhubaneshwar
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹30 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹19.53 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              4
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              MICA Ahmedabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹40.91 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹19.22 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              5
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IMT Ghaziabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹41.55 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹16.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              6
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              GLIM Chennai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹37 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              7
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IMI Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹40.31 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹17.91 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              8
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              GIM Goa
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹32.2 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.13 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              9
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              NIBM Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹26.6 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹14.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              10
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              IRMA Anand
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹31.84 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹15.72 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              CAT/XAT/CMAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              11
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              FORE Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹29 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹16.8 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              12
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              KJSOM Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹27.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹12.69 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              13
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              LBSIM
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹20 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹12.25 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px]">
                              14
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] break-words whitespace-normal">
                              BIMTECH Gr Noida
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹24.43 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              ₹11.1 Lakh
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal">
                              XAT
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800">
                  <div className="overflow-x-auto">
                    <div className="">
                      <table className="w-full table-auto min-w-[700px]">
                        <thead className="bg-emerald-700 sticky top-0 z-10">
                          <tr>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] w-16">
                              No.
                            </th>
                            <th className="text-left lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Name
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Highest Package
                            </th>
                            <th className="text-center lg:px-6 px-2 lg:py-4 py-2 text-white lg:text-sm text-[11px] whitespace-normal break-words">
                              Avg. Package
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              1
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Global Institute of Business Studies (GIBS),
                              Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 16.15 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.40 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              2
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              International School of Business &amp; Research
                              (ISBR), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 14.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.0 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              3
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              International Institute of Business Studies
                              (IIBS), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 14.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.0 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              4
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Alliance University, Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 60.10 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              5
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Praxis Business School, Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              8 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              6
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IQ City United World School of Business (UW),
                              Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              14 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              6 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              7
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Engineering &amp; Management (IEM),
                              Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              6
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              36
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              8
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Atlas Skilltech University, Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 25 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 9 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              9
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Indian Institute of Education and Business
                              Management (IIEBM), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 30 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              10
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              International School Of Management Studies (ISMS),
                              Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 14 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              11
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              University of Petroleum and Energy Studies (UPES),
                              Dehradun
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 50.09 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.02 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              12
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Greater Noida Institute of Technology (GNIOT),
                              Greater Noida
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 12.56 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.46 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              13
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Business Management &amp; Research
                              (IBMR), Gurgaon
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 15.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 9.4 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              14
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Integrated Learning in Management
                              (IILM),Greater Noida
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              15
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Integrated Learning in Management
                              (IILM), Gurgaon
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 20 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.6 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              16
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Fostiima Business School,New Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 25 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 10.76 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              17
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Jaipuria institute of Management (JIM), Noida
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 22 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 11.08 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              18
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Jaipuria Institute of Management (JIM), Lucknow
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              22 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              9.05 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              19
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Apeejay school of Management (ASM), Dwarka
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 20.LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.47 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              20
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Siva Sivani Institute of Management (SSIM),
                              Hyderabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 17.5 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              21
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Woxsen University, Hyderabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 19 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 9.04 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              22
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Taxila Business School (Taxila), JAIPUR
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 28.6 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 11.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              23
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Swami Vivekanand Institute of Management and
                              Coumputer Science (SVIMCS), Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              10 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              5 - 6 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              24
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Pune Institute of Business Management (PIBM), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 9.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              25
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              ASM’s Institute of Business Management and
                              Research (IBMR), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 16 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              26
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Akemi Business School , Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.87 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              27
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Shanti Business School (SBS), Amhedabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 16.12 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.65 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              28
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              International School of Management Excellence
                              (ISME), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 14.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              29
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Indus Business Academy (IBA), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 22.26 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.80 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              30
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Regional College of Management (RCM), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 44.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              31
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Krupanidhi college of Management (KCM), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 24.00 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.67 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              32
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Finance and International Management
                              (IFIM) Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 15.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              33
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Kirloskar Institute Of Advanced Management Studies
                              (KIAMS), Harihar Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18.00 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              34
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Acharya Bangalore B-School (ABBS), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 22.50 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              35
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Soundarya Institute of Management &amp; Science
                              (SIMS), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5.60 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 2.64 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              36
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Ramaiah Institute of Management Studies and
                              Sciences (RIMS), Bangalore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 10.08 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.48 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              37
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Sandip University, Sijoul Bihar
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 2 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              38
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Firebird Institute of Research in Management
                              (FIRM), Coimbatore, Chennai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 13.98 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.0 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              39
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Doon Business School (DBS), Dehrahun
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 23.50 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.75 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              40
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              LLOYD Business School, Greater Noida
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 24.80 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.58 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              41
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              G L Bajaj Institute Of Management &amp; Research
                              (GLBIMR), Greater Noida
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 12.00 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR.8.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              42
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              BML Munjal university, Gurgaon
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 25.9 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.0 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              43
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              BML Munjal university, Gurgaon
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 25.9 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.0 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              44
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Asian Business School (ABS), Noida
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 29.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              45
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              J K Business School (JKBS), Gurugram New Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 24.0 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.0 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              46
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Technology and Science (ITS),
                              Gaziabaad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18.50 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5.65 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              47
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Jaipuria institute of Management (JIM), Ghaziabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 12.4 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              48
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Integrated Learning in Management
                              (IILM), Lodhi Road New Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 14 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              49
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              New Delhi Institute of Management (NDIM), New
                              Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 12 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 10 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              50
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Fortune Institute of International Business
                              (FIIB), New Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 25 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              51
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Asia Pasific institute of management (APIM), New
                              Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 22 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.11 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              52
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Entrepreneurship and Management Processes
                              International Business School (EMPI), New Delhi
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 20 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              53
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Shoolini University, Solan
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 42 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              54
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Vignana Jyothi Institute Of Management (VJIM),
                              Hyderabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 34 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.3 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              55
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Vishwa Vishwani Institute Of Management, Hyderabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 10 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              56
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Prestige University, Indore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 32 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              57
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Globsyn Business School (GBS), Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              18.33 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              7.39 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              58
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Calcutta Business School (CBS) Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              25 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              7.45 L - 7.96 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              59
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Bengal Institute of Business Studies (BIBS),
                              Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              13.5 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              6 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              60
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Eastern Institute for Integrated Learning in
                              Management (EIILM), Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              13.5 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              5.5 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              61
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              NSHM Knowledge Campus, Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              5.6 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              62
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              St. Xavier Business School, Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              7.5 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              63
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Management Development Institute ((MDIM),
                              Murshidabad
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              21 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              11.76 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              64
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Brainware University, Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              3.5 L +
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              65
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Adamas University, Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal"></td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              4.5 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              66
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute of Management Study (IMS), Kolkata
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              4.80 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              2.40 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              67
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              IILM Acadmy of Higher Learning, Lucknow
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              10.8 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              6 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              68
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              JS Kothari Business School, (JSKBS), Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              14 L
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              6.5 L
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              69
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Universal Ai University (UBS), Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 22 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 15.32 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              70
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Institute for Technology and Management (ITM),
                              Navi Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 21 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.65 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              71
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Uma Krishna Shetty Institute of Management Studies
                              and Research (UKS), Mumbai
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 10.5 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5.75 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              72
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              MYRA Business School( MYRA), Mysore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 13.5 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.46 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              73
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Sandip University, Nasik
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 12.5 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 4.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              74
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              D Y Patil B School (DPU), Tathawade Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.01 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              75
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Ramachandran International Institute Of Management
                              (RIIM), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 13 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5.95 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              76
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Lexicon MILE - Management Institute of Leadership
                              and Excellence (MILE), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 19 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.27 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              77
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              MITCON (MIMA), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.50 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              78
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Pune Business School (PBS) Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 27 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 6.8 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              79
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Pimpri Chinchawad University (PCU), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 20 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 5.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              80
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Kirloskar Institute Of Advanced Management Studies
                              (KIAMS), Pune
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 18 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 8.5 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              81
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              Karnataka College of Management (KCM), Banglore
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 25 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              INR 7.2 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              82
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              SOIL Institute of Management, Gurugram
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              27 LPA
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              10.3 LPA
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#1a1a1a]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              83
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              DIT University, Dehradun
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              4.96
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              15
                            </td>
                          </tr>
                          <tr className="border-b border-gray-800 last:border-0 bg-[#252525]">
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] w-16">
                              84
                            </td>
                            <td className="text-left lg:px-6 px-2 lg:py-4 py-2 text-gray-300 lg:text-sm text-[11px] break-words whitespace-normal">
                              RIT (Roorkee Institute of Technology)
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              7.5
                            </td>
                            <td className="text-center lg:px-6 px-2 lg:py-4 py-2 text-gray-400 lg:text-sm text-[11px] whitespace-normal">
                              12
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
