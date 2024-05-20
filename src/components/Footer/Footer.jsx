import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="bg-[#1A1919] mt-0 md:mt-14 py-10">

            <div className="grid grid-cols-1 md:grid-cols-6 md:items-start text-white md:px-14 px-10 md:pb-10 text-left space-y-10">

                <div className="space-y-4 grid md:col-span-2 md:mt-10 mt-0">

                    <Link className="text-3xl md:text-4xl text-white font-extrabold "
                        to="/">CareerHub</Link>

                    <p>
                        There are many variations of passages <br /> of Lorem Ipsum, but the majority <br /> have suffered alteration in some form.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <span className="bg-[#337FFF] rounded-full p-2"><FaFacebookF /></span>
                        <span className="bg-[#33CCFF] rounded-full p-2"><FiTwitter /></span>
                        <span className="bg-[#F75274] rounded-full p-2"><FaInstagram /></span>
                    </div>

                </div>

                <nav className="flex flex-col space-y-3">
                    <h4 className="text-xl font-medium mb-3">Company</h4>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>

                <nav className="flex flex-col space-y-3">
                    <h4 className="text-xl font-medium mb-3">Product</h4>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>

                <nav className="flex flex-col space-y-3">
                    <h4 className="text-xl font-medium mb-3">Support</h4>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>

                <nav className="flex flex-col space-y-3">
                    <h4 className="text-xl font-medium mb-3">Contact</h4>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover">+1 777 - 978 - 5570</a>
                </nav>

            </div>

            <hr className="w-11/12 mx-auto text-[#7E90FE] mt-4 md:mt-0" />

            <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center w-11/12 mx-auto mt-10 text-white">

                <div>
                    <p>@2024 CareerHub. All Rights Reserved</p>
                </div>

                <div>
                    <p>Powered by CareerHub</p>
                </div>

            </div>

        </footer>

    );
};

export default Footer;
