export default function Page() {
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
          <header className="bg-lightblue-05 pt-[46px] pb-[40px] pl-10 pr-[87px] flex justify-between drop-shadow-sm mb-[79px]">
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

          <section className="flex justify-around gap-8 flex-wrap">
            <div className="bg-darkblue-03 p-8 rounded-[15px] w-full md:w-[312px]">
              <div className="flex gap-4 justify-center items-center flex-wrap">
                <span className="bg-neutral-01 p-4 rounded-full">
                  <img src="/images/users.png" alt="" className="w-8 h-8" />
                </span>
                <span className="text-neutral-01">
                  <p className="text-24">450</p>
                  <p className="font-bold text-20">Active Users</p>
                </span>
              </div>
            </div>
            <div className="bg-darkblue-03 p-8 rounded-[15px] w-full md:w-[312px]">
              <div className="flex gap-4 justify-center items-center flex-wrap">
                <span className="bg-neutral-01 p-4 rounded-full">
                  <img src="/images/users.png" alt="" className="w-8 h-8" />
                </span>
                <span className="text-neutral-01">
                  <p className="text-24">450</p>
                  <p className="font-bold text-20">Active Users</p>
                </span>
              </div>
            </div>
            <div className="bg-darkblue-03 p-8 rounded-[15px] w-full md:w-[312px]">
              <div className="flex gap-4 justify-center items-center flex-wrap">
                <span className="bg-neutral-01 p-4 rounded-full">
                  <img src="/images/users.png" alt="" className="w-8 h-8" />
                </span>
                <span className="text-neutral-01">
                  <p className="text-24">450</p>
                  <p className="font-bold text-20">Active Users</p>
                </span>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
