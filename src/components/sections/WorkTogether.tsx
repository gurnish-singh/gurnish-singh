import {ContactMeModal} from "@/components/modals/ContactMe.tsx";

export default function WorkTogether(){
    return (<section  id="contact" className="py-10">
         <div className="text-center">
             <h2 className="text-3xl font-bold mb-4">Want to work together?</h2>
             <ContactMeModal />
         </div>
     </section>)
 }