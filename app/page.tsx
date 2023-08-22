import Image from 'next/image'
import { MainFrame } from './components/sectionOne/MainFrame'
import Statboxes from './components/sectionTwo/statbox'
import Introduction from './components/sectionThree/introduce'

export default function Home() {
  return (
    <>
      <MainFrame />
        <div id="/STATS" className="bg-[#eeeeee]">
            <Statboxes/>
        </div>
        <div id="/INTRO" className="bg-[#ffffff]">
            <Introduction/>
        </div>

    </>
  )
}
