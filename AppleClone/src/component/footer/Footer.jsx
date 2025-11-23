import React from 'react'
import style from '../footer/Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-100 py-8">
        <div className=" text-[14px] text-gray-400 container mx-auto 2xl:px-70 px-4 space-y-4">

          <p>◊Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</p>

          <p> ‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. </p>

          <p>1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially available at the time of testing. Performance depends on device settings, environment and many other factors. </p>

          <p>A subscription is required for Apple TV.</p>

          <p>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>

          <hr />
        </div>

        <div className={`${style.footer} sm:flex sm:justify-between container mx-auto mt-5 2xl:px-70 px-4`}>
          <div>
            <h4 className='font-bold' >Shop and Learn</h4>
            <ul className=' text-gray-500 space-y-2 my-2  '>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>

            <div>
              <h4 className='font-bold mt-6'>Apple wallet</h4>
              <ul className=' text-gray-500 my-2 space-y-2 '>
                <li>Wallet</li>
              </ul>
            </div>


          </div>



          <div>
            <h4 className='font-bold' >Account</h4>
            <ul className=' text-gray-500 space-y-2 my-2  '>
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>

            <h4 className='mt-8 font-bold' >Entertainment</h4>
            <ul className=' my-2 space-y-2 text-gray-500 '>
              <li>Apple One</li>
              <li>Apple TV</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold'>Apple Store</h4>
            <ul className='text-gray-500 space-y-2 my-2 '>
              <li>Find Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Group Reservation</li>
              <li>Apple Camp</li>
              <li>Apple Trade In </li>
              <li>Ways to Buy</li>
              <li>Recycling Programme</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>

          </div>

          <div>
            <div>
              <h4 className='font-bold'>For Business</h4>
              <ul className='text-gray-500 space-y-2 my-2 '>
                <li>Apple and Business</li>
                <li>Shop for Business </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mt-6'>For Education</h4>
              <ul className='text-gray-500 space-y-2 my-2 '>
                <li>Apple and Education</li>
                <li>Shop for Education </li>
                <li>Shop for University</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mt-6'>For Healthcare</h4>
              <ul className='text-gray-500 space-y-2 my-2 '>
                <li>Apple and Healthcare</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mt-6'>For Government</h4>
              <ul className='text-gray-500 space-y-2 my-2 '>
                <li>Apple and Government</li>
              </ul>
            </div>

          </div>

          <div>

            <div>
              <h4 className='font-bold'>Apple Values</h4>
              <ul className='text-gray-500 space-y-2 my-2 '>
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Privacy</li>
                <li>Supply Chain innovation </li>
              </ul>

            </div>
            <div>
              <h4 className='font-bold mt-6'>About Apple</h4>
              <ul className='text-gray-500 space-y-2 my-2'>
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </div>

          </div>
        </div>


<div className=' text-gray-500 container mx-auto mt-8 2xl:px-70 px-4'>
  <h5 className='mb-5'>More ways to shop: <span className=' text-blue-400  underline'>Find an Apple Store</span> or <span className=' text-blue-400  underline'>other retailer</span> near you. Or call <span className=' text-blue-400  underline'>000800 040 1966</span>.</h5>
  <hr />
</div>


<div className="container mx-auto mt-8 2xl:px-70 px-4
                flex flex-col sm:flex-row sm:justify-between sm:items-center">

  {/* INDIA DIV */}
  <div className="order-1 sm:order-2 sm:text-right mb-4 sm:mb-0">
    <h4 className="underline">India</h4>
  </div>

  {/* COPYRIGHT DIV */}
  <div className="order-2 sm:order-1 text-[12px]">
    <p>Copyright © 2025 Apple Inc. All rights reserved.</p>

    <ul className={`flex space-x-3 ${style.footer}`}>
      <li>Privacy Policy</li>
      <span>|</span>
      <li>Terms of Use</li>
      <span>|</span>
      <li>Sales Policy</li>
      <span>|</span>
      <li>Legal</li>
      <span>|</span>
      <li>Site Map</li>
    </ul>
  </div>

</div>

      </footer>

    </>
  )
}

export default Footer
