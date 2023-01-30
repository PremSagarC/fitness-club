import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'


const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2w33ozd', 'template_lhcimrj', form.current, 'VEEBOFKukyoyCiWCt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
            <span className='stroke-text'>ready to</span>
            <span> level up</span>
        </div>
        <div>
            <span className='stroke-text'>your body</span>
            <span> with us?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} action="" className="email" onSubmit={sendEmail}> 
            <input type="email" name='user_email' placeholder='Enter Your Email Address'/>
            <button className='btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
