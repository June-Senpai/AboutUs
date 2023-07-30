import ContentPart from "@/components/FirstSection/ContentPart"
import Companies from "@/components/FirstSection/Companies"
import BlackPart from "../components/SecondSection(blackPart)/BlackPart"
import ScrollPhone from "@/components/SecondSection(blackPart)/ScrollPhone"
import Trying from "@/components/trying"
import Heading from "@/components/FirstSection/Heading"

export default function Home() {
  return (
    <>
      <div className="overflow-clip">
        <div className="mt-2 ml-10 mr-12">
          <Heading />
          <ContentPart />
        </div>
        <Companies />
        <BlackPart />
        <ScrollPhone />
        {/* <Trying /> */}
      </div>
    </>
  )
}
