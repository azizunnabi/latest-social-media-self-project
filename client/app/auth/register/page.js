
import Left from '@/components/left'
import RegisterForm from '@/components/RegisterForm'



 
 const page = () => {
   return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
    <Left />
    <RegisterForm />
    </div>
   )
 }
 export default page