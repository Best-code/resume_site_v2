import Image from 'next/image'
import { MainFrame } from './components/sectionOne/MainFrame'
import Statboxes from './components/sectionTwo/statbox'

export default function Home() {
  return (
    <>
      <MainFrame />
        <div id="/STATS" className="bg-[#eeeeee]">
            <Statboxes/>
        </div>
    </>
  )
}
