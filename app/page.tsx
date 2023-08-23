import Image from 'next/image'
import { MainFrame } from './components/sectionOne/MainFrame'
import Statboxes from './components/Stats/statbox'
import Introduction from './components/FunFacts/introduce'
import Tweets from './components/Skills/tweets'
import GetInTouch from './components/Contactsection/Contact'

export default function Home() {
  return (
    <div className="container mx-auto flex w-full items-center">
      <MainFrame />
        {/* <div id="/STATS" className="bg-[#eeeeee]">
            <Statboxes/>
        </div>
        <div id="/INTRO" className="bg-[#ffffff]">
            <Introduction/>
        </div>
        <div id="/TWEETS" className="bg-[#000000]">
            <Tweets/>
        </div>
        <GetInTouch/> */}

    </div>
  )
}
