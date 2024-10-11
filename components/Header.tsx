import DropdownLan from './DropdownLan';
import Image from "next/image";

function Header() {
    return (
        <header className='p-4 border-b border-b-slate-200 justify-center items-center w-full' dir='rtl'>
            <div className='flex flex-row justify-between items-center max-w-6xl mx-auto gap-4'>
                <a className='flex' href='/'>
                    <Image alt='Logo' src={require('@/public/images/logo.svg')} width={530} height={128} className='w-[124px] h-[30px]' />
                </a>
                <button className='flex md:hidden bg-slate-100 px-2 py-1 rounded-lg'>
                    <i className="ri-menu-line text-slate-950 text-xl"></i>
                </button>
                <div className='md:flex hidden flex-row justify-center w-96 gap-2 px-4 py-1 rounded-lg bg-slate-50 focus:bg-white focus:outline-0 focus:border focus:border-slate-400 border border-slate-200'>
                    <input type='search' placeholder='البحث عن' className='focus:outline-0 bg-slate-50 w-full' />
                    <i className="ri-search-line text-slate-400 text-xl"></i>
                </div>
                <div className='md:flex flex-row justify-center items-center gap-2 hidden'>
                    <DropdownLan />
                    <button className='flex flex-row justify-center items-center gap-2 bg-[#07ABF1] px-4 py-1 rounded-lg'>
                        <i className="ri-add-circle-fill text-slate-50 text-xl"></i>
                        <h3 className='text-slate-50 text-sm font-bold'>إنشاء إعلانك</h3>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
