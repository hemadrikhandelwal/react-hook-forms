import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from 'zod';

const messageSchema=z.object({
  name:z.string().min(1, "Name is required").refine(
    (value) => value.length >= 3,
    "Name must be at least 3 characters"
  ),
  email: z.email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please enter subject'),
message: z.string().min(1, 'Please enter message'),
})

export default function App(){
  const {
    register,
    handleSubmit,
    formState :{errors},
    watch
  } = useForm({
    resolver:zodResolver(messageSchema),
    defaultValues:{
      name:'tes',
      email:'',
      subject:'',
      message:'',
    }
  })


const onSubmit =(data)=>{
console.warn(" the submit dat is ", data)
}
console.log(watch(messageSchema))


  return (
  <>
  <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen bg-[#e5e7eb] flex items-center justify-center p-4">
  <div className="w-full max-w-4xl min-h-[680px] rounded-3xl bg-gradient-to-b from-[#6095ff] to-[#718bf7] p-8 flex items-center justify-center shadow-lg">
    
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm px-10 py-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight text-center mb-3">
        Send me a message
      </h2>
      
      <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed mb-8 max-w-xs">
        Feel free to get in touch with me with anything related to CODINGSPACE or you can just say hi. I will get back to you as soon as I can.
      </p>

      <div className="w-full space-y-4">
        <input
          type="text"
          placeholder="Name"
          {...register('name')}
          className="w-full px-3.5 py-2.5 text-sm text-gray-700 bg-white border border-gray-400 rounded-md outline-none focus:border-indigo-500"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email address"
            {...register('email')}
          className="w-full px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md outline-none focus:border-indigo-500"
        />
         {errors.email && <p>{errors.email.message}</p>}

        <input
          type="text"
          placeholder="Subject"
            {...register('subject')}
          className="w-full px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md outline-none focus:border-indigo-500"
        />
         {errors.subject && <p>{errors.subject.message}</p>}

        <textarea
          rows={4}
          placeholder="Message"
           {...register('message')}
          className="w-full px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md outline-none resize-none focus:border-indigo-500"
        />
         {errors.message && <p>{errors.message.message}</p>}


        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-r from-[#5993ff] to-[#6c85f7] hover:opacity-95 active:opacity-90 transition-opacity"
          >
            Send
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
  </form>

  {/* <LoginForm/> */}
  </>
  )

}
