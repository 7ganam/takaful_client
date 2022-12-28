import Image from "next/image";
import React from "react";
import styles from "../styles/Blog.module.css";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  members: number;
  phone: string;
  address: string;
};

export default function Blog() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("data :>> ", data);
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

    console.log(content);
  };

  return (
    <section id="record" className={styles.blog}>
      <motion.h3
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        تسجيل
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      ></motion.div>
      <div className="flex items-center justify-center  ">
        <div className="mx-auto w-full max-w-[550px] my-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="mb-3 block text-base font-medium text-yellow-600"
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
              <div className="w-full sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-base font-medium text-yellow-600"
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
            </div>
            <div className="mb-5">
              <label
                htmlFor="members"
                className="mb-3 block text-base font-medium text-yellow-600"
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
                className="w-full appearance-none rounded-md border-[2px] border-yellow-600 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-yellow-600"
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
            <div>
              <button
                onClick={handleSubmit(onSubmit)}
                className="hover:shadow-form rounded-md bg-yellow-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
