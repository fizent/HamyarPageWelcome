import '/src/App.css'
import Button from './Component/Button'
import Desc from './Component/BoxPage'
import Footer from './Component/Footer'
function App() {

  function ClickedSite() {
    window.location.href = "https://hamyar-page.vercel.app/";
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

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/50 backdrop-blur-md p-12 rounded-3xl w-1/3 text-center shadow-1xl">
          <h1 className="text-6xl font-bold text-0118D8 mb-6 text-center">همیار فنی</h1>
          <p className='text-2xl font-bold text-black'>همیار فنی همراه همیشه تو در کار فنی</p>
          <div className='mt-4 flex justify-around'>
            <Button text="سایت" onClick={ClickedSite}></Button>
            <Button text="اپلیکیشن" onClick={ClickedSite}></Button>
          </div>
        </div>
      </div>

    </div>
    <div>
      <Desc 
        title="همیار فنی چیست؟" 
        desc=" همیار فنی یک اپلیکیشن تحت وب سبک و حرفه‌ای است که مخصوص کارهای فنی و مهندسی طراحی شده است. این اپ نه تنها برای مهندسان و تکنسین‌ها، بلکه برای افراد عادی هم قابل استفاده است. امکانات آن شامل دوره‌های آموزشی فنی و هوش مصنوعی برای تعمیرکاران جهت تشخیص قطعات، بخش فروش آنلاین قطعات و ابزارها، و ابزارهای کاربردی دیگر برای مدیریت و یادگیری فنی می‌باشد. همچنین خدمات در محل" 
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
