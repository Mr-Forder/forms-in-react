import Head from "next/head";
import Image from "next/image";
import formImage from "../public/form.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Forms in React</title>
        <meta name="description" content="React Forms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Tailwind - h-screen will fit screen horizontally full */}
      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-2/3">
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
                <label className="block text-sm pb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email input /> */}
              <div className="pb-4">
                <label className="block text-sm pb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
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
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Spain</option>
                  <option>Australia</option>
                </select>
              </div>
              {/* ToS  /> */}
              <div className="pb-4">
                <label className="block text-sm pb-2" htmlFor="terms">
                  I Agree to the Terms of Service
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                    type="checkbox"
                    name="terms"
                    value="checked"
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
