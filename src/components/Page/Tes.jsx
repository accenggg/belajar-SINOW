export default function Template() {
  return (
    <>
      <main className="flex">
        <nav className="bg-darkblue-05 h-screen w-[300px] flex flex-col justify-center items-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[134.13px] h-[150px] mb-4"
          />
          <div className="flex-1 w-full">
            <a
              href="#"
              className="inline-block text-[16px] font-bold text-neutral-01 font-montserrat hover:bg-darkblue-03 py-[13px] pl-[39px] w-full"
            >
              <p>Dashboard</p>
            </a>
            <p className="text-[16px] font-bold text-neutral-01 font-montserrat hover:bg-darkblue-03 py-[13px] pl-[39px]">
              <a href="#">Kelola Kelas</a>
            </p>
            <p className="text-[16px] font-bold text-neutral-01 font-montserrat hover:bg-darkblue-03 py-[13px] pl-[39px]">
              <a href="#">Keluar</a>
            </p>
          </div>
        </nav>

        <section className="w-full">
          <header className="bg-lightblue-05 pt-[46px] pb-[40px] pl-10 pr-[87px] flex justify-between drop-shadow-sm">
            <h1 className="font-bold text-[24px] text-darkblue-05 flex-1">
              Hi, Admin
            </h1>
            <div className="flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                className="py-[12px] px-[24px] mr-[10px] border border-gray-300 rounded-l-lg focus:outline-none focus:border-gray-300 focus:ring-gray-300"
                placeholder="Search"
              />
              <div className="bg-neutral-01 p-[5px] -m-3 rounded-r-lg  border-y-[1px] border-r-[1px] border-gray-300">
                <button className="bg-darkblue-05 p-[7px] rounded-lg">
                  <img
                    src="/images/search-icon.png"
                    alt="search-icon"
                    className="w-[24px] h-[24px]"
                  />
                </button>
              </div>
            </div>
          </header>
        </section>
      </main>
    </>
  );
}
