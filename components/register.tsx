import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type CaseInputs = {
  name: string;
  members: number;
  phone: string;
  address: string;
};

type VolunteerInputs = {
  name: string;
  phone: string;
  governorate: string;
  address: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CaseInputs>();

  const {
    register: volunteerRegister,
    handleSubmit: volunteerHandleSubmit,
    watch: volunteerWatch,
    formState: { errors: volunteerErrors },
  } = useForm<VolunteerInputs>();

  let [isCaseOpen, setIsCaseOpen] = useState(false);
  let [isCaseLoading, setIsCaseLoading] = useState(false);
  let [isCaseSuccess, setIsCaseSuccess] = useState(false);

  const onCaseSubmit: SubmitHandler<CaseInputs> = async (data) => {
    console.log("data :>> ", data);
    setIsCaseLoading(true);
    let formatedData = { ...data, phone_number: data.phone };
    const rawResponse = await fetch(
      "https://takaful-server.onrender.com/api/cases",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formatedData }),
      }
    );
    const content = await rawResponse.json();
    setIsCaseLoading(false);
    setIsCaseOpen(false);
    setIsCaseSuccess(true);
    console.log(content);
  };
  function closeCaseModal() {
    setIsCaseOpen(false);
  }

  function openCaseModal() {
    setIsCaseOpen(true);
  }

  let [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  let [isVolunteerLoading, setIsVolunteerLoading] = useState(false);
  let [isVolunteerSuccess, setIsVolunteerSuccess] = useState(false);

  const onVolunteerSubmit: SubmitHandler<VolunteerInputs> = async (data) => {
    console.log("data :>> ", data);
    setIsVolunteerLoading(true);
    const rawResponse = await fetch(
      "https://takaful-server.onrender.com/api/volunteers",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );
    const content = await rawResponse.json();
    setIsVolunteerLoading(false);
    setIsVolunteerSuccess(true);
    setIsVolunteerOpen(false);

    console.log(content);
  };
  function closeVolunteerModal() {
    setIsVolunteerOpen(false);
  }

  function openVolunteerModal() {
    setIsVolunteerOpen(true);
  }
  return (
    <section id="record">
      <>
        <div className=" inset-0 flex items-center justify-center  gap-10 flex-wrap h-[600px] bg-gray-100  rounded-xl">
          <button type="button" onClick={openCaseModal}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.83), rgb(4 4 4 / 51%)), url(meal.jpg)",
                boxShadow: "#1e1e1e -10px 8px 5px",
              }}
              className="drop-shadow-lg w-[400px] h-[300px]  max-w-[90%] m-auto  rounded-3xl text-white text-5xl flex justify-center items-center font-bold text-center"
            >
              سجل مستفيد
            </motion.div>
          </button>
          <button type="button" onClick={openVolunteerModal}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundImage:
                  "linear-gradient(rgb(0 0 0 / 83%), rgb(197 168 61 / 51%)), url(volunteer.webp)",
                boxShadow: "#1e1e1e -10px 8px 5px",
              }}
              className=" w-[400px] h-[300px] max-w-[90%] m-auto rounded-3xl text-white text-5xl flex justify-center items-center font-bold text-center"
            >
              سجل كمتطوع
            </motion.div>
          </button>
        </div>

        <Transition appear show={isCaseOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeCaseModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                      سجل مستفيد
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="flex items-center justify-center  ">
                        <div className="mx-auto w-full max-w-[550px] my-5">
                          <form onSubmit={handleSubmit(onCaseSubmit)}>
                            <div className="flex flex-wrap">
                              <div className="w-full ">
                                <div className="mb-5">
                                  <label
                                    htmlFor="address"
                                    className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                  >
                                    {"العنوان"}
                                  </label>
                                  <input
                                    {...register("address", { required: true })}
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="العنوان"
                                    className="w-full rounded-md  border-yellow-600 border-[2px] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                              </div>
                              <div className="w-full ">
                                <div className="mb-5">
                                  <label
                                    htmlFor="phone"
                                    className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                  >
                                    رقم الهاتف
                                  </label>
                                  <input
                                    {...register("phone", { required: true })}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="رقم الهاتف"
                                    className="w-full rounded-md border-[2px] border-yellow-600 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                              </div>
                              <div className="w-full ">
                                <div className="mb-5">
                                  <label
                                    htmlFor="members"
                                    className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                  >
                                    عدد الأفراد
                                  </label>
                                  <input
                                    {...register("members", { required: true })}
                                    type="number"
                                    name="members"
                                    id="members"
                                    placeholder="2"
                                    min="1"
                                    className="w-full rounded-md border-[2px] border-yellow-600 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                              </div>
                              <div className="w-full ">
                                <div className="mb-5">
                                  <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                  >
                                    الاسم (اخياري)
                                  </label>
                                  <input
                                    {...register("name")}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="الاسم"
                                    className="w-full rounded-md border-[2px] border-yellow-600 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 flex">
                              {isCaseLoading ? (
                                <div className="flex w-[70px] mr-8 mt-1">
                                  <div className="relative">
                                    <div className="w-8 h-8 rounded-full absolute border-4 border-dashed border-gray-200"></div>

                                    <div className="w-8 h-8 rounded-full animate-spin absolute border-4 border-dashed border-yellow-500 border-t-transparent"></div>
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={handleSubmit(onCaseSubmit)}
                                  className="hover:shadow-form rounded-md bg-yellow-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                  إرسال
                                </button>
                              )}
                              <button
                                onClick={closeCaseModal}
                                className="hover:shadow-form rounded-md bg-white py-3 px-8 text-center text-base font-semibold text-black outline-none"
                              >
                                إغلاق
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <Transition appear show={isVolunteerOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={closeVolunteerModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                      سجل كمتطوع
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="flex items-center justify-center  ">
                        <div className="mx-auto w-full max-w-[550px] my-5">
                          <form
                            onSubmit={volunteerHandleSubmit(onVolunteerSubmit)}
                          >
                            <div className="flex flex-wrap">
                              <div className="w-full ">
                                <div className="w-full ">
                                  <div className="mb-5">
                                    <label
                                      htmlFor="name"
                                      className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                    >
                                      الاسم
                                    </label>
                                    <input
                                      {...volunteerRegister("name", {
                                        required: true,
                                      })}
                                      type="text"
                                      name="name"
                                      id="name"
                                      placeholder="الاسم"
                                      className="w-full rounded-md border-[2px] border-yellow-600 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                  </div>
                                </div>
                                <div className="mb-5">
                                  <label
                                    htmlFor="address"
                                    className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                  >
                                    {"العنوان"}
                                  </label>
                                  <input
                                    {...volunteerRegister("address", {
                                      required: true,
                                    })}
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="العنوان"
                                    className="w-full rounded-md  border-yellow-600 border-[2px] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                              </div>
                              <div className="w-full ">
                                <div className="mb-5">
                                  <label
                                    htmlFor="phone"
                                    className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                  >
                                    رقم الهاتف
                                  </label>
                                  <input
                                    {...volunteerRegister("phone", {
                                      required: true,
                                    })}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="رقم الهاتف"
                                    className="w-full rounded-md border-[2px] border-yellow-600 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                              </div>
                              <div className="w-full ">
                                <div className="mb-5">
                                  <label
                                    htmlFor="governorate"
                                    className="mb-3 block text-base font-medium text-yellow-600 text-right"
                                  >
                                    المحافظة
                                  </label>
                                  <input
                                    {...volunteerRegister("governorate", {
                                      required: true,
                                    })}
                                    type="text"
                                    name="governorate"
                                    id="governorate"
                                    placeholder="المحافظة"
                                    min="1"
                                    className="w-full rounded-md border-[2px] border-yellow-600 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 flex ">
                              {isVolunteerLoading ? (
                                <div className="flex w-[70px] mr-8 mt-1">
                                  <div className="relative">
                                    <div className="w-8 h-8 rounded-full absolute border-4 border-dashed border-gray-200"></div>

                                    <div className="w-8 h-8 rounded-full animate-spin absolute border-4 border-dashed border-yellow-500 border-t-transparent"></div>
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={volunteerHandleSubmit(
                                    onVolunteerSubmit
                                  )}
                                  className="hover:shadow-form rounded-md bg-yellow-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                  إرسال
                                </button>
                              )}

                              <button
                                onClick={closeVolunteerModal}
                                className="hover:shadow-form rounded-md bg-white py-3 px-8 text-center text-base font-semibold text-black outline-none"
                              >
                                إغلاق
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </section>
  );
}
