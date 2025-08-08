import './index.css'
import './App.css'
import Header from './blocks/header/header';
import MainSection from './blocks/mainSection/mainSection';
import PromoSection from './blocks/promo/PromoSection';
import PartnerSection from './blocks/partnerSection/partnerSection';
import NewsSection from './blocks/news/newSection';
import DocumentsSliderSection from './blocks/documentsSliderSection/documentsSliderSection';
import InnovationSection from './blocks/innovationSection/innovationSection';
import Contacts from './blocks/contacts/contacts';
import Footer from './blocks/footer/footer';


function App() {
  return (
    <div className="wrapper">
      <div className='container'>
        <Header />
        <PromoSection />
        <MainSection />
        <PartnerSection />
        <NewsSection />
        <DocumentsSliderSection />
        <InnovationSection />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App
