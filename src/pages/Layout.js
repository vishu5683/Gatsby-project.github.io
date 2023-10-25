import React from 'react';
import Nav from '../components/Header/Nav';
import "./layout.css"
import Section1 from '../components/Section 1/Section1';
import Section2 from '../components/Section-2/Section2';
import Slider from '../components/Section-3/Slider';
import Testimonials from '../components/Section-4/Testimonials';
import Section5 from '../components/Section-5/Section5';
import Email from '../components/Section-6/Email';
import Footer from '../components/Section-7/footer';
import Navbar from '../components/Header/Nav';

const Layout = ({ children }) => {
  return (
   <>
   
   <Navbar/>
   <Section1/>
   <Section2/>
   <Slider/>

   <div className="testimonial_wrap text-center">
                <h5>Customer Testimonial</h5>
              <div className='testimonial_box'></div>
                <div className="row">
                    <div class="col-md-4 col-12 margbt">
                        <Testimonials/>
                    </div>
                    <div class="col-md-4 col-12 margbt">
                        <Testimonials />
                    </div>
                    <div class="col-md-4 col-12 margbt">
                        <Testimonials />
                    </div>
                </div>
            </div>


            <Section5/>
            <Email/>

            <Footer/>
   </>
  );
};

export default Layout;
