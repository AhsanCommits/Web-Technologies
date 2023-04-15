import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import SectionBreaker from './components/SectionBreaker';
import FirstSection from './components/FirstSection';
import MainSection from './components/MainSection';
import Table from './components/Table';
import SignatureSection from './components/SignatureSection';

function App() {
  return (
    <div className='container border my-5'>
      <Header />
      <SectionBreaker sectionTitle="PENSIONER'S IDENTITY CARD FORM" />
      <FirstSection />
      <SectionBreaker sectionTitle="~" />
      <MainSection />
      <Table />
      <SignatureSection lableContent1="Name:" lableContent2="Signature:" lableContent3="Date:" paragraphContent="I hereby certify that the information provided above is correct to the best of my knowledge " />
      <SignatureSection lableContent1="Designation:" lableContent2="Signature with stamp:" lableContent3="CNIC:" paragraphContent="TO BE VERIFIED BY PENSION AUTHORIZING AUTHORITY i-e AG KP/DCAIDAO's: " />
      <SectionBreaker sectionTitle="FOR OFFICE USE ONLY" />
      <SignatureSection lableContent1="Entered By:" lableContent2="Signature:" lableContent3="Date:" paragraphContent="" />
      <SignatureSection lableContent1="Checked By:" lableContent2="Signature:" lableContent3="Date:" paragraphContent="" />

    </div >
  );
}

export default App;
