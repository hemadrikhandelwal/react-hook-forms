import { useForm } from "react-hook-form"
export default function LoginForm(){

    const {
        register,
        handleSubmit,
        watch,
        formState:{errors}
    } = useForm();

const onSubmit = (data)=>{
    console.warn(data)
}
console.log(watch("email"))
    return (
         <>
         <form onSubmit={handleSubmit(onSubmit)}>

                 <div className="min-h-screen bg-[#e5e7eb] flex items-center justify-center p-4">
  <div className="w-full max-w-4xl min-h-[680px] rounded-3xl bg-gradient-to-b from-[#6095ff] to-[#718bf7] p-8 flex items-center justify-center shadow-lg">
    
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm px-10 py-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight text-center mb-3">
        Login 
      </h2>
    
      
      <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed mb-8 max-w-xs">
        Login
      </p>

      <div className="w-full space-y-4">
        <input
          type="email"
         
          placeholder="email"
          {...register("email",
            {required:"Email is required"})}
          className="w-full px-3.5 py-2.5 text-sm text-gray-700 bg-white border border-gray-400 rounded-md outline-none focus:border-indigo-500"
        />
        {errors.email && (<p>{errors.email.message}</p>)}

        <input
          type="text"
          placeholder="password"
           {...register("password",{
            required:"Password is required",
            minLength:{
                value:8,
                message:"Password must be of 8 char"
            }
           })}
          className="w-full px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md outline-none focus:border-indigo-500"
        />

        {
            errors.password &&(<p>{errors.password.message}</p>)
        }

      

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-md text-sm font-medium text-white bg-gradient-to-r from-[#5993ff] to-[#6c85f7] hover:opacity-95 active:opacity-90 transition-opacity"
          >
           Login
          </button>
        </div>
      </div>

    </div>
  </div>
</div>
         </form>
 

  </>
    )
}