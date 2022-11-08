import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import formImage from "../public/form.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles/Home.module.css";

{
  /* HANDLING FORMS IN REACT WITH FORMIK - VALIDATION WITH YUP*/
}
export default function Home() {
  //FORMIK LOGIC
  //init formik - pass in an object on execution with initial, or default values for our form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
    },
    //Validate form with Yup - here we can initialise a schema for each of our values - performs type check then validation via chaining

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less!")
        .required("Name is required!"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required!"),
      terms: Yup.array().required("Please agree to our terms of service"),
    }),

    //formic submit form logic
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  return (
    <div>
      <Head>
        <title>Forms in React</title>
        <meta name="description" content="React Forms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Tailwind - h-screen will fit screen horizontally full */}
      <main className="h-screen flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-2/3"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-2xl pb-2 ">Let's Get Started.</h1>
            <p>
              Sign up today to join the smartest, simplest and slickest SaaS
              subscription template provider in the world.
            </p>
            <div className="mt-6">
              {/* Name input /> */}
              <div className="pb-4">
                {/* labels are inline by default - to stick em on their own line, just make them block in the css */}
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor="name"
                >
                  {/* We can show validation errors in our label with a simple ternary. touched is necessary for focus*/}
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Enter your name"
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input /> */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* country input /> */}
              <div className="pb-4">
                <label className="block text-sm pb-2" htmlFor="country">
                  Your Country
                </label>
                <select
                  name="country"
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Spain</option>
                  <option>Australia</option>
                </select>
              </div>
              {/* ToS  /> */}
              <div className="pb-4">
                <label
                  className={`block  text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of Service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                  />
                  <p className="text-sm pt-2">
                    My data will remain protected and will not be passed on to a
                    third party.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Get Started!
              </button>
            </div>
          </div>

          {/* with images, container div needs to be set to relative  /> */}

          <div className="relative flex-1">
            <Image
              className="rounded-lg object-cover"
              fill
              priority
              src={formImage}
              alt="form-learn"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
