"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useState } from "react";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
// import { motion , AnimatePresence } from "framer-motion";



const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

export default function ClientProvider({ children }:{ children: React.ReactNode}) {
  const [queryClient] = useState(()=> new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
              < Provider store={store}>

      {/* <AnimatePresence>
        <Provider store={store}>
            <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            > */}
              {children}
            {/* </motion.div> */}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Provider>
      {/* // </AnimatePresence> */}
    </QueryClientProvider>
    );
}