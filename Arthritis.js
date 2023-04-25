import React from 'react'
import { Ill } from './Ill'
import ulcer from "../Images/arthris 1.jpg"

export const Arthritis = () => {
  return (
    <div><Ill/>
    <div className='justify-content-center'>
    <img className='img'src={ulcer}alt="ulcer"/></div>
    <h2 className='text-center'>What is Arthritis.</h2>
    Arthritis is the swelling and tenderness of one or more joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.
<h4>Osteoarthritis arthritis</h4>
    Osteoarthritis causes cartilage — the hard, slippery tissue that covers the ends of bones where they form a joint — to break down. 
    <h4> Rheumatoid arthritis</h4>
    Rheumatoid arthritis is a disease in which the immune system attacks the joints, beginning with the lining of joints.
    
    Uric acid crystals, which form when there's too much uric acid in your blood, can cause gout. Infections or underlying disease, such as psoriasis or lupus, can cause other types of arthritis.
    
    Treatments vary depending on the type of arthritis. The main goals of arthritis treatments are to reduce symptoms and improve quality of life.
    </div>
  )
}
