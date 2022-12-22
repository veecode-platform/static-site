// import Link from "next/link";
// import { useEffect } from "react";
// import style from "../../../styles/Pricing.module.scss";
// import { Breadcrumb, Button, ContactBar, DefaultPage, Guarantees } from "../../components";
// import CardSupport from "./cardSupport";

// const Pricing = () => {

//   useEffect(()=>{
//     if (typeof window !== "undefined"){
//       if ( window.innerWidth > 1300){
//           setTimeout(() => {
//             window.scrollTo({
//               top: 360,
//               left: 300,
//               behavior: 'smooth'
//             });
//           }, 500);
//       }
//     }
//   },[])

//   return (
//     <DefaultPage
//       title="Select the Plan"
//       subtitle="Choose the plan just right for your team."
//       titleBar="enable"
//       noFooter
//     >
//       <section className={style.wrapper}>
//         <article className={style.content}>
//           <Breadcrumb active={1}/>
//           <div className={style.content__options}>
//             <CardSupport 
//               title="Standard Support"
//               subtitle="10 Users"
//               desc="Includes 5 business days of SLA"
//               price="$899/mo*"
//               sub={["*over annual subscription", "$809/mo"]}
//             >
//               <Link href="/validate?plan=standard">
//                 <a>
//                 <Button
//                     alt >
//                     BUY NOW
//                   </Button>
//                 </a>
//               </Link>
//             </CardSupport>
//             <CardSupport
//               title="Premium Support"
//               subtitle="10 Users"
//               desc="Includes 3 business days of SLA"
//               price="$1260/mo*"
//               sub={["*over annual subscription", "$1134/mo"]}
//             >
//               <Link href="/validate?plan=premium">
//                 <a>
//                  <Button
//                     alt>
//                     BUY NOW
//                   </Button>
//                 </a>
//               </Link>
//             </CardSupport>
//           </div>
//           <div className={style.sectionBar}>
//           <ContactBar/>
//           <Guarantees/>
//           </div>
//         </article>
//       </section>
//     </DefaultPage>
//   );
// };

// export default Pricing;
