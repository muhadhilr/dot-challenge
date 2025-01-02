import Button from "@shared/components/button/Button"
import { TypeAnimation } from "react-type-animation"

const HomeContainer = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-5 bg-main-bg bg-cover">
        <TypeAnimation
          sequence={[
            "Hi there, welcome!",
            1000,
            "Good luck working on this!",
            1000,
            "Have fun practicing!",
            1000,
            "Best of luck!",
          ]}
          className="text-6xl font-bold text-white"
        />
        <Button variant="primary" onClick={() => {}}>Start</Button>
    </section>
  )
}

export default HomeContainer