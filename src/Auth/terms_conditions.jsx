import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TermsConditions = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);

  const handleAccept = () => {
    localStorage.setItem('terms', checked.toString());
    navigate('/signup');
  };


  return (
    <div className="flex flex-col md:flex-row bg-gray-100 items-center justify-center p-8">
      <div className="flex flex-col p-6 bg-white rounded-lg w-[650px]">
        <h2 className="text-xl font-semibold text-center mb-4">
          Terms and Conditions
        </h2>

        <div className="space-y-4 text-sm">
          <p>
            Welcome to Lokal-Art. By using our platform, you agree to be bound by the following terms and conditions. Lokal-Art is an online social media and portfolio platform that showcases and sells artwork while providing creative services. To access certain features of the Platform, users must register for an account and provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your login credentials and for any activities that occur under your account. You must be at least 18 years old to use the Platform. Minors may use the Platform only under the supervision of a parent or legal guardian.
          </p>

          <p>
            Lokal-Art provides services to both artists and clients. Artists can
            create profiles, upload their portfolios, set availability, and
            accept or decline booking and commission requests. Similarly,
            clients can browse artists' work, book services, request
            commissions, and make payments for confirmed transactions. Artists
            retain ownership of any content or artwork they upload or create
            through Lokal-Art unless otherwise agreed upon in writing. By
            uploading content to the Platform, artists agree to grant Lokal-Art
            a non-exclusive, worldwide, royalty-free license to use, display,
            and promote their content. Content that is offensive, illegal,
            defamatory, or infringes on the rights of others is strictly
            prohibited.
          </p>

          <p>
            All transactions must be completed through Lokal-Art's secure
            payment gateway, and bookings are not confirmed until processed and
            cleared. Service fees and commission rates may vary by artist, and
            clients must review these terms before booking. Lokal-Art may charge
            a service fee to facilitate transactions on the platform. Users
            agree to comply with all applicable laws and use the Platform in a
            respectful and professional manner. Any use of the Platform for
            unauthorized or illegal purposes, including spamming, hacking, or
            data scraping, is strictly prohibited.
          </p>

          <p>
            Lokal-Art reserves the right to modify or discontinue any part of
            the Platform at any time without notice and may terminate or
            restrict user access to the Platform at their discretion for any
            reason deemed necessary. The Platform is provided "as is" without
            any warranties of any kind, and we do not guarantee the accuracy,
            reliability, or availability of the Platform. To the fullest extent
            permitted by law, Lokal-Art will not be liable for any damages,
            losses, injury, and claims. The Platform and its affiliates are held
            harmless from any claims, liabilities, damages, losses, and expenses
            arising out of your use of the Platform or your violation of these
            terms.
          </p>

          <p>
            These terms are governed by the laws of Philippines, and any
            disputes will be resolved through binding arbitration in accordance
            with the rules of Philippine-based resolution center. Lokal-Art
            reserves the right to update these terms, and continued use of the
            Platform constitutes acceptance of any such changes. For questions
            or concerns, contact us at lokalartofficial@gmail.com. By using
            Lokal-Art, you agree to these terms and conditions. If you do not
            agree, you may not use the Platform.
          </p>
        </div>

        <button 
          onClick={handleAccept}
          className="mt-6 px-8 py-2 bg-cyan-500 text-white rounded-md w-fit mx-auto hover:bg-cyan-600 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default TermsConditions;
