import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { toast } from 'react-toastify'
const Register = () => {
  const navigate = useNavigate()
 const {updateUserProfile, setUser, createUser, user} = useAuth()
 const handleSignUp = async e => {
 e.preventDefault()
 const form = e.target
 const email = form.email.value
 const name = form.name.value
 const photo = form.photo.value
 const pass = form.password.value
 console.log({ email, pass, name, photo, user })
 try {
   //2. User Registration
   const result = await createUser(email, pass)

   await updateUserProfile(name, photo)
   // Optimistic UI Update
   setUser({...user, photoURL: photo, displayName: name })
   navigate('/')
   toast('Registration Successful')
 } catch (err) {
   console.log(err)
   toast.error(err?.message)
 }
}


  return (
    <div className='min-h-[calc(100vh-306px)] my-12'>
      <div className='max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-3/4 mx-auto px-6 py-8 md:px-8 lg:w-1/2'>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Register Now!
          </p>
          <form onSubmit={handleSignUp}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Register
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or Login
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>

      </div>
    </div>
  )
}
//
export default Register
