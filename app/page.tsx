import Image from 'next/image'
import { MainFrame } from './components/sectionOne/MainFrame'
import Statboxes from './components/Stats/statbox'
import Introduction from './components/FunFacts/introduce'
import Tweets from './components/Skills/tweets'
import GetInTouch from './components/Contactsection/Contact'

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-screen h-screen">
      <MainFrame />
      </div>
      <div id="/STATS" className="bg-[#eeeeee] w-screen">
        <Statboxes />
      </div>
      <div id="/INTRO" className="bg-[#ffffff] w-screen">
        <Introduction />
      </div>
      {/* <div id="/TWEETS" className="bg-[#000000]">
            <Tweets/>
        </div>
        <GetInTouch/> */}

    </div>
  )
}
