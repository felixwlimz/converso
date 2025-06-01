import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
       <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard 
          id='123'
          name='Neura the Brainly Explorer'
          topic='Neural Network'
          subject='Science'
          duration={45}
          color='#ffda6e'
         />
          <CompanionCard 
          id='456'
          name='Countsy the number Wizard'
          topic='Deriatives & Integrals'
          subject='Maths'
          duration={45}
          color='#e5d0ff'
         />
          <CompanionCard 
          id='789'
          name='Verba the Vocabulary Virtuoso'
          topic='language'
          subject='English Literature'
          duration={45}
          color='#bde7ff'
         />
      </section>

      <section className="home-section">
        <CompanionsList
           title='Recently completed sessions'
           companions={recentSessions}
           classNames='w-2/3 max-lg:w-full'
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page