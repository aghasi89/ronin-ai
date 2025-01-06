import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';
import Header from './components/Header';
import Slide from './components/Slide';
import Text from './components/Text';
import Button from './components/Button';
import HeadImage from './assets/images/head.png';
import ChainGPT from './assets/images/partners/chaingpt.png';
import Coinzilla from './assets/images/partners/coinzilla.png';
import GTProtocol from './assets/images/partners/gt-protocol.png';
import Hyperlab from './assets/images/partners/hyperlab.png';
import arrowBg from './assets/images/arrows-bg.svg';
import BG1 from './assets/bgs/bg-element-1.svg';
import arrowNext from './assets/icons/arrow-next.svg';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import BgItem from './components/BgItem';

//bgs
import BgRoninAi from './assets/bgs/ai-tool-l-t.svg';
import BgRoninAi2 from './assets/bgs/ai-tool-r-t.svg';
import BgRoninAi4 from './assets/bgs/ai-tool-r-b.svg';

import BgLearnMore from './assets/bgs/learn-how-r.svg';

import BgProtocolLt from './assets/bgs/protocal-l-t.svg';
import BgProtocolRt from './assets/bgs/protocol-r-t.svg';
import BgProtocolLb from './assets/bgs/protocol-l-b.svg';

import LeftArrow from './assets/bgs/liner-left.svg';
import RightArrow from './assets/bgs/liner-right.svg';
import TopArrow from './assets/bgs/down.svg';
import RoninL from './assets/bgs/ronin-l.svg'
import RoninR from './assets/bgs/ronin-r.svg';
import FaqLt from './assets/bgs/faq-l-t.svg';
import FaqRt from './assets/bgs/faq-r-t.svg';
import FaqLb from './assets/bgs/faq-l-b.svg';
import FaqRb from './assets/bgs/faq-r-b.svg';


function App() {
  return (
    <div className="App">
      <Header />
      <section className="flex items-center flex-col justify-between mt-[80px] mx-[80px]">
        <div>
          <Button className='px-[60px]'>Get Started</Button>
        </div>
        <div className='flex  items-start justify-between mt-[30px] ml-[26px]'>
          <div className="flex flex-col items-start text-left flex-1">
            <BgItem item={BgRoninAi2} className='right-[-220px] top-[-0px]'>
              <BgItem item={BgRoninAi} className='left-[-60px] top-[-80px]'>
                <Text title white className='ml-[20px]'>Ai Tool Kit</Text>
              </BgItem>
            </BgItem>

            <Text middle yellow upper className='mt-[40px]'>CREATE UR VERY OWN Ai AGENT IN MINUTES USING OUR TOOL KIT,<br /><br /> </Text>
          </div>
          <div className='w-[55%] text-left mt-[50px]'>
            <BgItem item={BgRoninAi4} className='left-[-420px] bottom-[-50px]'>
              <Text middle yellow >An advanced Ai-driven platform that offers seamless access to centralized finance (CeFi), decentralized finance (DeFi), and digital asset ecosystems, including NFTs.<br /><br />Equipped with a powerful conversational interface, it empowers users to effortlessly buy, sell, and trade cryptocurrencies while executing complex financial tasks across multiple markets in a unified and intuitive experience.<br /><br />  </Text>
            </BgItem>
          </div>
        </div>
        <div className="flex items-start mt-[80px] flex-row justify-start w-full">
          <BgItem item={BgLearnMore} className='left-[340px] top-[35px] scale-[2]'><Button><Text white default>Learn How</Text></Button></BgItem>
        </div>
        <div></div>
      </section>
      <section className="flex items-center justify-between">
        <Slide>
          <div>
            <Text xl white>Ronin Ai revolutionizes the way automation works on the Solana blockchain by offering tools that require no coding knowledge. <br /><br />It allows people to build, launch, and earn from smart agents for DeFi, NFT projects, and Web3 services. <br /><br />Designed for simplicity and growth, Nimbus Ai makes blockchain technology easier to use for everyone, from individual users to large organizations.</Text>
          </div>
          <div>
            <Text base white>Our platform provides a no-code Ai builder, allowing users to create and customize smart agents without any coding knowledge. <br /><br />Effortlessly trade across different blockchain networks with our advanced APi blinks, enabling fast and secure transactions.<br /><br /> Take advantage of cross-chain arbitrage opportunities to maximize profits and execute flash loans seamlessly,<br /><br />All these features are integrated into one easy-to-use interface, designed to simplify complex crypto tasks.</Text>
          </div>
        </Slide>
        <div></div>
      </section>
      <section className="flex items-center justify-start flex-col mb-[50px] min-h-[650px]">

        <Text title white>RONIN AI PROTOCOL</Text>
        <BgItem item={BgProtocolLt} className='top-[-0px] left-[-0px]' wrapper='w-full'>
          <BgItem item={BgProtocolRt} className='top-[-0px] right-[-0px]' wrapper='w-full'>
            <BgItem item={BgProtocolLb} className='bottom-[-0px] left-[-0px]' wrapper='w-full'>
              <div className='relative w-full flex justify-center items-center mt-[80px]'>

                <div className="absolute left-1/2 top-[50px] w-[220px] ml-[-110px]  flex items-start justify-start rounded-bl-[8px] border-l-[1px] border-b-[1px] px-[26px] py-[12px] border-[#3B4343]">
                  <BgItem item={TopArrow} className='bottom-[-200px] left-[50%]'>
                    <Text default white>Ronin Ai Agent</Text>
                  </BgItem>
                </div>

                <div className="absolute left-[10vw] top-[150px]  flex items-start justify-start rounded-br-[8px] border-r-[1px] border-b-[1px] px-[26px] py-[12px] border-[#3B4343]">
                  <BgItem item={LeftArrow} className='right-[-200px] top-[50%]'>
                    <Text default white>Ronin Pools</Text>
                  </BgItem>
                </div>
                <div className="absolute text-left right-[10vw] top-[150px]  flex items-start justify-start rounded-bl-[8px] border-l-[1px] border-b-[1px] px-[26px] py-[12px] border-[#3B4343]">
                  <BgItem item={RightArrow} className='left-[-200px] top-[50%]'>
                    <Text default white>Ronin <br />Staking Pool</Text>
                  </BgItem>
                </div>
                <div className="absolute text-left left-[8vw] top-[400px]  flex items-start justify-start rounded-br-[8px] border-r-[1px] border-b-[1px] px-[26px] py-[12px] border-[#3B4343]">
                  <BgItem item={LeftArrow} className='right-[-200px] top-[50%]'>
                    <Text default white>Ronin <br />Infrastructure<br />
                      Ecosystem</Text>
                  </BgItem>
                </div>
                <div className="absolute text-left right-[10vw] top-[400px]  flex items-start justify-start rounded-bl-[8px] border-l-[1px] border-b-[1px] px-[26px] py-[12px] border-[#3B4343]">
                  <BgItem item={RightArrow} className='left-[-200px] top-[50%]'>
                    <Text default white>Terminal<br />Ai API SDK</Text>
                  </BgItem>
                </div>
                <div className='w-[30vw] h-[60vw] mt-[180px]'>
                  <Spline scene="https://prod.spline.design/Dz2x7K6qKqv2nP1F/scene.splinecode" />
                </div>
              </div>
            </BgItem>
          </BgItem>
        </BgItem>
      </section>
      <BgItem item={RoninL} className='top-[-20px] left-[25px]'>
        <BgItem item={RoninR} className='top-[-0px] right-[50px]'>
          <section className='flex items-start justify-start flex-row px-[120px]'>

            <div className='flex items-start justify-start flex-col gap-[110px] w-[35%] text-left'>
              <Text title white upper>$Ronin ai</Text>
              <Text white default>The RONIN AI Protocol is driven by the $RONIN AI Token, offering more than just utility. Holders gain voting power in the DAO, exclusive access to premium AI-powered services, and opportunities to shape the future of innovation within the ecosystem.</Text>
            </div>


            <div>
              <img src={HeadImage} alt="head" className='w-[50vw] translate-y-[-130px]' />
            </div>

          </section>
        </BgItem>
      </BgItem>
      <section className='flex items-start justify-start flex-col px-[120px] text-left'>
        <Text title white upper>Adoption</Text>
        <Text default gray className='w-[65%] mt-[20px]'>We expect <Text yellow>100M users</Text> onboarding (1% of ~1.B Crytpo Network users worldwide)
          to our ecosystem <Text yellow>within the next 2 years</Text></Text>
      </section>
      <section className='flex items-start justify-start flex-col px-[120px] mt-[80px] text-left'>
        <Text title white upper>Ecosystem</Text>
        <div className='w-full relative mt-[80px] h-[500px]'>
          <div className='border-r-[1px] border-[#F1C42E] px-[22px] pb-[30px] w-[13vw] text-right absolute left-[15vw] ml-[-13vw]'>
            <Text default line33 white>Ronin Ai <br /> ToolKit</Text>
          </div>
          <div className='border-r-[1px] border-[#F1C42E] px-[22px] pb-[30px] w-[14.5vw] text-right absolute left-[15vw] bottom-0 ml-[-14.5vw]'>
            <Text default line33 white>$RONIN Ai Utility<br />Token</Text>
          </div>
          <div className='flex border-l-[1px] border-[#667373] px-[22px]  w-[13vw] text-left absolute right-[0vw] ml-[-13vw]'>
            <Text default line33 white className='translate-y-[-25px]'>Ronin Ai<br />Agents</Text>
          </div>
          <div className='flex flex-col gap-[12px] border-l-[1px] border-[#667373] px-[22px]  w-[13vw] text-left absolute right-[0vw] bottom-0 ml-[-13vw]'>
            <Text default line33 white className='translate-y-[-5px]'>DAO Voting</Text>
            <div className='w-[12vw] h-[3.4vw] border-[1px] border-[#F1C42E] rounded-tr-[8px] rounded-bl-[8px] translate-x-[-23px] translate-y-[8px]'></div>
          </div>
        </div>
      </section>
      <section className='flex items-start justify-start flex-col px-[60px] mt-[80px] text-left' style={{ backgroundImage: `url(${BG1})`, backgroundPositionX: "90%", backgroundPositionY: "90px", backgroundRepeat: "no-repeat" }}>
        <Text title white upper className='ml-[60px]'>PARTNERS</Text>
        <div className='overflow-hidden flex items-start justify-start flex-col gap-[50px] mt-[150px] py-[70px] bg-white/5 rounded-[16px] backdrop-blur-md'>
          <div className='flex items-start justify-start flex-row gap-[80px] animate-run line'>
            <img src={ChainGPT} className='h-[78px]' alt="ChainGPT" />
            <img src={Coinzilla} className='h-[78px]' alt="Coinzilla" />
            <img src={GTProtocol} className='h-[78px]' alt="GTProtocol" />
            <img src={Hyperlab} className='h-[78px]' alt="Hyperlab" />
            <img src={ChainGPT} className='h-[78px]' alt="ChainGPT" />
            <img src={Coinzilla} className='h-[78px]' alt="Coinzilla" />
            <img src={GTProtocol} className='h-[78px]' alt="GTProtocol" />
            <img src={Hyperlab} className='h-[78px]' alt="Hyperlab" />
          </div>
        </div>
        <div className='gap-[12px] self-center flex items-center justify-center flex-row mt-[135px] px-[52px] py-[15px]' style={{ backgroundImage: `url(${arrowBg})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className='cursor-pointer'>
            <img src={arrowNext} alt="arrowNext" />
          </div>
          <div className='cursor-pointer'>
            <img src={arrowNext} alt="arrowNext" className='rotate-[180deg]' />
          </div>

        </div>
      </section>
      <BgItem item={FaqLt} className='top-[-20px] left-[25px]'>
        <BgItem item={FaqRt} className='top-[-0px] right-[50px]'>
          <BgItem item={FaqLb} className='bottom-[-80px] left-[25px]'>
            <BgItem item={FaqRb} className='bottom-[-20px] right-[50px]'>
              <section className='flex items-start justify-start flex-col px-[60px] mt-[80px] text-left'>
                <Text title white upper className='ml-[60px]'>faq</Text>
                <div className='w-[65%] mt-[20px] self-center'>
                  <Accordion items={[
                    {
                      title: 'What is Ronin Ai Agents?',
                      content: 'Ronin AI Agents are no-code tools that let you create and deploy smart agents for tasks like DeFi, token creation, and NFT management, making blockchain automation simple and accessible.'
                    },
                    {
                      title: 'When is the TGE?',
                      content: `Follow Ronin AI's official Twitter to stay up to date with all launch information and announcements.`
                    },
                    {
                      title: 'How does Ronin work?',
                      content: `Ronin uses AI-powered, no-code tools to help users create and deploy smart agents for tasks like token creation, DeFi operations, and NFT management. It simplifies blockchain automation, making it easy and accessible for everyone.`
                    },
                    {
                      title: 'How do i build my own agent?',
                      content: `With Ronin, building an agent is simple. Use the no-code AI builder to customize your agent's features, such as tasks, triggers, and blockchain interactions. The platform guides you step by step, so no coding knowledge is required.`
                    },
                  ]} />
                </div>
              </section>
            </BgItem>
          </BgItem>
        </BgItem>
      </BgItem>
      <Footer />
    </div >
  );
}

export default App;
