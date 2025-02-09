
// import { SlTrophy } from "react-icons/sl";
// import { SiTicktick } from "react-icons/si";
// import Image from "next/image";

// export default function Checkout() {
//   return (
//     <div>
//       {/* Header Image */}
//       <div className="w-full">
//         <Image
//           src="/Group 78 (7).png"
//           width={1440}
//           height={360}
//           alt="image"
//           className="w-full h-auto"
//         />
//       </div>

//       {/* Billing Details */}
//       <div className="p-6 sm:p-10 flex flex-col lg:flex-row min-h-screen">
//         {/* Billing Form */}
//         <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 flex-1">
//           <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
//             Billing Details
//           </h1>

//           <form>
//             {/* First Name and Last Name */}
//             <div className="flex flex-wrap mb-4">
//               <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
//                 <label
//                   htmlFor="first-name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="first-name"
//                   name="first-name"
//                   className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 px-3">
//                 <label
//                   htmlFor="last-name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="last-name"
//                   name="last-name"
//                   className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
//                 />
//               </div>
//             </div>

//             {/* Other Form Fields */}
//             <div className="mb-4 px-3">
//               <label
//                 htmlFor="company-name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Company Name (optional)
//               </label>
//               <input
//                 type="text"
//                 id="company-name"
//                 name="company-name"
//                 className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
//               />
//             </div>

//             <div className="mb-4 px-3">
//               <label
//                 htmlFor="country"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Country/Region
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
//               >
//                 <option value="">Sri Lanka</option>
//                 <option value="us">United States</option>
//                 <option value="ca">Canada</option>
//                 <option value="uk">United Kingdom</option>
//               </select>
//             </div>

//             {/* More Inputs */}
//             {[
//               { label: "Street Address", id: "street-address" },
//               { label: "Town/City", id: "city" },
//               { label: "Province", id: "province" },
//               { label: "ZIP Code", id: "zip-code" },
//               { label: "Phone", id: "phone" },
//               { label: "Email Address", id: "email", type: "email" },
//             ].map(({ label, id, type = "text" }) => (
//               <div key={id} className="mb-4 px-3">
//                 <label
//                   htmlFor={id}
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   {label}
//                 </label>
//                 <input
//                   type={type}
//                   id={id}
//                   name={id}
//                   className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
//                 />
//               </div>
//             ))}

//             {/* Additional Information */}
//             <div className="mb-4 px-3">
//               <input
//                 type="text"
//                 placeholder="Additional Information"
//                 className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
//               />
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}

//         <div className="w-full lg:w-[320px] h-auto bg-gray-50 shadow-md rounded-lg p-6">
//           <h1 className="font-bold text-lg mb-4">Product Summary</h1>
//           <p className="flex justify-between mb-2">
//             <span>Asgaard Sofa x 1</span>
//             <span className="text-gray-500">Rs. 250,000.00</span>
//           </p>
//           <p className="flex justify-between mb-2">
//             <span>Subtotal</span>
//             <span className="text-gray-500">Rs. 250,000.00</span>
//           </p>
//           <p className="flex justify-between mb-4">
//             <span className="font-bold">Total</span>
//             <span className="text-[#B88E2F] font-bold text-lg">
//               Rs. 250,000.00
//             </span>
//           </p>
//           <hr className="my-4" />
//           <h2 className="text-md font-bold mb-2">Direct Bank Transfer</h2>
//           <p className="text-sm text-gray-600 mb-4">
          
//           Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.<br/><br/>
//           Direct Bank Transfer<br/><br/>
//           Cash On Delivery
//           </p>

//           <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p><br/>
//           <button className="w-full border border-black text-black py-2 rounded-md shadow-sm ">
//             Place Order
//           </button>
//         </div>
//       </div>


       
//       {/* Features Section */}
//       <div className="bg-[#F6F1E7] py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
//         {[
//           {
//             icon: <SlTrophy className="w-10 h-10" />,
//             title: "High Quality",
//             desc: "Crafted from top materials",
//           },
//           {
//             icon: <SiTicktick className="w-10 h-10" />,
//             title: "Warranty Protection",
//             desc: "Over 2 years",
//           },
//           {
//             icon: (
//               <Image src="/shipping.png" alt="Shipping" width={40} height={40} />
//             ),
//             title: "Free Shipping",
//             desc: "Order Over $150",
//           },
//           {
//             icon: (
//               <Image
//                 src="/customer-support.png"
//                 alt="Support"
//                 width={40}
//                 height={40}
//               />
//             ),
//             title: "24/7 Support",
//             desc: "Dedicated support",
//           },
//         ].map(({ icon, title, desc }, i) => (
//           <div key={i} className="flex items-center gap-4">
//             {icon}
//             <div>
//               <h2 className="text-lg font-bold">{title}</h2>
//               <p className="text-sm text-gray-600">{desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// Checkout();





































"use client";
 
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"
import { CartContext } from "../components/cartContext";
import { useCart } from "../components/cartContext";
import { useContext } from "react";
import  CheckoutButton from "../components/checkoutButton";


      const Checkout = () => {

        const { cartItems } :any = useContext(CartContext); 
          
        
  const { cart, removeFromCart, updateQuantity } = useCart(); 
  const formattedPrice = (price: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
    }).format(price);

  return (
    <div>
      <div className="relative w-full mb-6">
        <Image src="/shop.png" alt="Banner" width={1200} height={400} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Checkout</h1>
          <p className="mt-2 text-lg">Home &gt; Shop</p>
        </div>
      </div>


           {/* checkout Form */}
          <div className="flex">
          <div className="w-full lg:max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center lg:text-left mb-6">
            Billing Details
          </h1> 

          <form>
            {/* First Name and Last Name */}
            <div className="flex flex-wrap gap-4 mb-4">
            
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
             <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 shadow-sm"
                />
              </div>

           </div>

            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name (optional)
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              />
            </div>

            {/* Country/Region */}
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country/Region
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              >
                <option value="">Sri Lanka</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* Address Fields */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street-address"
                  name="street-address"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700"
                >
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="zip-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  name="zip-code"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Additional Information"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              />
            </div>
          </form>
        </div>

      <div className="flex flex-col lg:flex-row gap-5 p-6">
        {/* Cart Items */}
        <div className=" bg-white ">
        <div className="w-full lg:w-[420px]  shadow-md rounded-lg p-6">


            <h2 className="text-xl text-center sm:text-2xl font-bold mb-4">Payment Summary</h2> 

            <thead>
              <tr className="bg-pink-50">
                <div className="lg:w-[380px]">
                <th className="text-left p-4 border-b border-gray-200 ">Image</th>
                <th className="text-left p-4 border-b border-gray-200">Product</th>
                <th className="text-left p-4 border-b border-gray-200 mb-4">Price</th>
                </div>
              </tr>
            </thead>



              {/* </div> */}
          <table className=" w-full border-collapse border border-gray-200">
           
            <tbody>
              {cart.map((item: any) => (  
                <tr key={item.id}>
                  <td className="p-4 flex items-center gap-4">
                  


                   <Image
                                    src={urlFor(item.productImage).width(300).height(300).url()}
                                    alt={item.title || "Product Image"}
                                    width={80}
                                    height={80}
                                    className="rounded-lg"
                                  />
                  


                    <span>{item.title}</span>
                  </td>
                  <td className="p-4">{formattedPrice(item.price)}</td>
                  <td className="p-4">
                   
                  </td>
              
                </tr>
                
              ))}

              
            </tbody>



            <div className="flex justify-between mb-4 ml-5">
            <span className="font-bold">Total</span>
            <span className="font-bold text-gold ml-20">
              {formattedPrice(
                cart.reduce((total: any, item: any) => total  + item.price * item.quantity, 0)
              )}
            </span>
          </div> 

          </table>
          </div>
      </div>
      </div>
</div>



        <div>
          <hr className="my-4"/>      
           <h2 className="text-5xl font-bold mb-2 ml-5 text-center">Payment Options</h2>        
           <p className="text-sm text-gray-600 mb-4  ml-5 text-center">
            Direct Bank Transfer or Cash On Delivery available.
          </p>

       <CheckoutButton cartItems={cartItems} />
     </div>


      </div>
  
  );
};
export default Checkout


