import '/src/App.css'
import Button from './Component/Button'
import Desc from './Component/BoxPage'
import Footer from './Component/Footer'
function App() {

  function ClickedSite() {
    window.location.href = "https://hamyar-page.vercel.app/";
  }

  function Refresh(){
    window.location.reload()
  }
  return (
    <>

    <div className="w-screen h-screen overflow-hidden relative">
      <video
        src="/back-musicor.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter blur"
      ></video>

  <div className="absolute inset-0 flex items-center justify-center px-4">
  <div
    className="
      bg-white/50 backdrop-blur-md
      p-6 sm:p-8 md:p-12
      rounded-2xl md:rounded-3xl
      w-full sm:w-4/5 md:w-2/3 lg:w-1/3
      text-center
      shadow-2xl
    "
  >
    <h1
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold text-[#0118D8]
        mb-4 md:mb-6
      "
    >
      همیار فنی
    </h1>

    <p
      className="
        text-base sm:text-lg md:text-xl lg:text-2xl
        font-bold text-black
      "
    >
      همیار فنی متخصص هوشمندِ جیبی شما
    </p>

    <div
      className="
        mt-6
        flex flex-col sm:flex-row
        gap-4
        justify-center
      "
    >
      <Button text="سایت" onClick={Refresh}/>
      <Button text="اپلیکیشن" onClick={ClickedSite} />
    </div>
  </div>
</div>


    </div>
    <div>
      <Desc 
        title="همیار فنی چیست؟" 
        desc="همیار فنی یک ایده منحصر به فرد است که قرار است به یک متخصص هوشمند و همیشه حاضر جیبی شما تبدیل شود" 
        srcI = "/8259.jpg"

      ></Desc>
    </div>

    <div>
      <h2 className='text-3xl mt-24 font-bold text-0118D8 mb-6 text-center'>موارد بیشتر به سایت اضافه خواهد شد...</h2>
    </div>

    <Footer></Footer>
    </>
  )
}

export default App
