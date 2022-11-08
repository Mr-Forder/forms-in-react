import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

//we grabbed info when we pushed to the success page - here we can interpolate it in the jsx below...

const success = () => {
  //init router
  const router = useRouter();

  return (
    <m.main
      className="h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-lg w-2/3 p-16">
        <h1 className="text-2xl pb-4 ">Thanks, {router.query.name}! </h1>
        <p>
          We have sent an email to {router.query.email}. Please read it
          carefully as it's got important info for your new account!{" "}
        </p>
      </div>
    </m.main>
  );
};

export default success;
