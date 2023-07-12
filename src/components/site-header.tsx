
import LinksModal from "./modals/links-modal"


function SiteHeader() {
  return (
    <header className="w-full flex justify-between p-4 py-8 text-white  max-w-7xl mx-auto z-30">

        <div>
            <h4 className="font-semibold">Kaunas, Lithuania</h4>
            <p className="text-sm text-slate-300 ">Today, Sept 8 9:00 PM</p>
        </div>

        <LinksModal />

    </header>
  )
}

export default SiteHeader