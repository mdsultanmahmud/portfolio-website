import React from 'react';
import contact from '../../../assets/contact.jpg'
const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${contact}")`, backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full">
                        <h1 className="mb-10 text-4xl font-semibold">Contact Me</h1>
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                            <div className='text-left'>
                                <h3 className='text-xl font-semibold text-secondary mb-3'>Get in Touch</h3>
                                <p className='mb-3 text-gray-400 font-semibold text-sm'>To Contact me, call or send email at any time. I will respond as soon as possible.</p>
                                <h4 className='text-sm font-bold text-pink-500'><strong>Name: </strong>Md. Sultan Mahmud</h4>
                                <h4 className='text-sm font-bold text-pink-500'><strong>Email: </strong>mdsultanmahmud.bd00@gmail.com</h4>
                                <h4 className='text-sm font-bold text-pink-500'><strong>Phone: </strong>(+880)1581192171</h4>
                                <h4 className='text-sm font-bold text-pink-500'><strong>Adress: </strong>Rajshahi, Bangladesh</h4>
                            </div>
                            <div className='text-left'>
                                <form action="https://formsubmit.co/sm8106418@gmail.com" method="POST">
                                    <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered input-secondary w-full max-w-xs bg-transparent mb-3" />
                                    <input name='email' type="text" placeholder="Enter Your Email" className="input input-bordered input-secondary w-full max-w-xs bg-transparent mb-3" />
                                    <textarea name='message' className="textarea textarea-secondary w-full max-w-xs bg-transparent mb-3" placeholder="Your Message"></textarea>
                                    <button type='submit' className="btn btn-secondary block">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;