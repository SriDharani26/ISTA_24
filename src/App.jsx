
import frontImage from '@/assets/image.png';
import Header from '@/components/Header';
import Infinityloop from '@/components/Infinityloop';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Eventsdiv from '@/components/Eventsdiv';
import NavigationTitle from '@/components/NavigationTitle';
import About from '@/components/About';
import footer from '@/components/footer';

export default function App() {
  return (
    <>

    <Header/>


    <div className='flex flex-col gap-6'>


      <div className='flex items-center justify-center min-h-[100vh]'>
        <img
            src={frontImage}
            alt="Center Image"
            
            className=' mx-8 absolute h-[85vh] w-[93vw]'/>

        <div className='flex items-center justify-center bg-transparent backdrop-blur-2xl w-[75vw] h-[70vh] px-8 py-10 rounded-full border-2 border-slate-500 text-black text-center text-9xl shadow-lg'>
         
             <pre>
            <h className="text-blue-600 font-display font-bold drop-shadow-sm">I<span className='text-9xl'>++</span> 24</h>
            {"\n"}
              <h1
                class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-8xl font-bold font-display
                bg-gradient-to-r from-teal-400 to-fuchsia-500  text-transparent bg-clip-text
                ">
                Iterate to Infintiy...
              </h1>
              </pre>     
           
        </div>
      </div>


      
        {/* about page container */}
      <div>
        <NavigationTitle title="ABOUT"></NavigationTitle>
      
        <About />
          
      </div>
        
        

        


  {/* eve>nts container */}
      <div>
        <NavigationTitle title="EVENTS"></NavigationTitle>
        <Eventsdiv/>
          
      </div>

       

      <div>

        <NavigationTitle title="CONTACT"></NavigationTitle>

        <div className="w-full h-20"></div>
          <div>

            <div className="mt-4 flex justify-center ">
              <a href="#" className="mx-6 border-blue-500 p-2 bg-white rounded-full border-2 text-blue-500">
                <FaFacebook size={50}  />
              </a>
              <a href="#"  className="mx-6  border-blue-400 p-2 bg-white rounded-full border-2 text-blue-400">
                <FaTwitter size={50} />
              </a>
              <a href="#"  className="mx-6  border-pink-500 p-2 bg-white rounded-full border-2 text-pink-500">
                <FaInstagram size={50} />
              </a>
            </div>

          </div>
          <div className="w-full h-60"></div>

        </div>

        <div>
          <footer/>
        </div>

    </div>
    </>
    
  );
}
