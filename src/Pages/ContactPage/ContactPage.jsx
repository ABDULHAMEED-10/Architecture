import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Layout from './../../components/Layout/Layout';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-page d-flex">
        <div className="contact__details d-flex">
          <div className="contact__caption -intro d-flex">
            <div className="intro__line--graphic"></div>
            <span>Contact Me</span>
          </div>
          <h2>Get In Touch With Me</h2>
          <p>
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert Factual knowledge is less prized when
            everything you ever need to know can be found at doing everything.
          </p>
          <div className="contact__details-info d-flex">
            <div className="contact__details-info-item d-flex">
              <div className="contact__icon d-flex">
                <CallIcon fontSize="inherit" />
              </div>
              <div className="contact__info-text d-flex ">
                <h2>Phone</h2>
                <span>+99 (0) 101 0000 888</span>
                <span>+99 (0) 101 0000 777</span>
              </div>
            </div>
            <div className="contact__details-info-item --item2 d-flex">
              <div className="contact__icon d-flex">
                <MailOutlineOutlinedIcon fontSize="inherit" />
              </div>
              <div className="contact__info-text d-flex">
                <h2>Email</h2>
                <span>Info@yourdomain.com</span>
                <span>Info@yourdomain.net</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form d-flex">
          <div className="form__userinfo d-flex">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea id="" rows="10"></textarea>
          <div className="btn btn--primary d-flex">Send To Me</div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
