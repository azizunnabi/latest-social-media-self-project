
import LoginForm from '@/components/LoginForm'
import Left from '@/components/left'


 const page = () => {
   return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
    <Left />
    <LoginForm />
    </div>
   )
 }
 export default page