import Image from 'next/image';
import { services } from './data/services';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#1F1E1B] font-sans selection:bg-[#8C7853] selection:text-white">
      
      {/* MINIMALIST HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#FBF9F6]/80 backdrop-blur-md z-50 border-b border-[#8C7853]/10">
        <div className="max-w-6xl mx-auto px-8 h-24 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-[0.2em] text-[#1F1E1B] uppercase">
            ducNgu <span className="text-[#8C7853] font-light">Media</span>
          </a>
          <nav className="hidden md:flex items-center gap-12 text-xs tracking-[0.15em] uppercase font-medium text-[#7E7A74]">
            <a href="#home" className="hover:text-[#1F1E1B] transition">Home</a>
            <a href="#philosophy" className="hover:text-[#1F1E1B] transition">Triết lý</a>
            <a href="#work" className="hover:text-[#1F1E1B] transition">Tác phẩm</a>
            <a href="#contact" className="hover:text-[#1F1E1B] transition">Liên hệ</a>
            <a href="#contact" className="border border-[#8C7853] text-[#8C7853] px-6 py-3 hover:bg-[#8C7853] hover:text-white transition duration-300">
              Đăng ký tư vấn
            </a>
          </nav>
        </div>
      </header>

      {/* EDITORIAL HERO SECTION */}
      <section id="home" className="pt-48 pb-32">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Cột trái: Tiêu đề dạng tạp chí */}
          <div className="md:col-span-5 text-left z-10">
            <span className="text-xs tracking-[0.25em] uppercase text-[#8C7853] font-semibold block mb-4">
              Premium Video Editing
            </span>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8 font-serif tracking-tight text-[#1F1E1B]">
              Nâng tầm kiến trúc <br />
              <span className="italic font-normal text-[#8C7853]">qua từng khung hình</span>
            </h1>
            <p className="text-sm text-[#7E7A74] leading-relaxed mb-10 font-light max-w-sm">
              Chúng tôi không chỉ edit video; chúng tôi điêu khắc ánh sáng và nhịp điệu để biến các bất động sản cao cấp thành những tác phẩm nghệ thuật điện ảnh đầy cảm xúc.
            </p>
            <div className="flex gap-6">
              <a href="#work" className="text-xs tracking-[0.2em] uppercase font-semibold text-[#1F1E1B] border-b border-[#1F1E1B] pb-2 hover:text-[#8C7853] hover:border-[#8C7853] transition">
                Xem Gallery
              </a>
            </div>
          </div>

          {/* Cột phải: Khung Video bất đối xứng sang trọng */}
          <div className="md:col-span-7 relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-sm bg-stone-100">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-[105%]">
              <source src="https://assets.mixkit.co/videos/31422/31422-720.mp4" type="video/mp4" />
            </video>
            {/* Lớp phủ mờ góc ấm nhẹ kiểu vintage */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F6]/10 to-transparent pointer-events-none" />
          </div>

        </div>
      </section>

      {/* PHILOSOPHY (TRIẾT LÝ THIẾT KẾ) */}
      <section id="philosophy" className="py-32 bg-[#F5F2EC] border-y border-[#8C7853]/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="text-xs tracking-[0.25em] uppercase text-[#8C7853] font-semibold block mb-6">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-serif mb-8 text-[#1F1E1B]">
            "Sự hoàn mỹ nằm ở những điều vô hình"
          </h2>
          <p className="text-sm text-[#7E7A74] leading-loose font-light max-w-2xl mx-auto">
            Một video bất động sản triệu đô không nằm ở những kỹ xảo chớp nhoáng. Nó nằm ở sự chuyển đổi mượt mà của ánh sáng tự nhiên, nhịp điệu chuyển cảnh đồng điệu với hơi thở của kiến trúc, và tone màu Color Grading ấm áp khơi gợi mong ước về một "mái ấm" thực sự.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section id="work" className="py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#8C7853] font-semibold block mb-3">
                Selected Works
              </span>
              <h2 className="text-3xl md:text-4xl font-light font-serif text-[#1F1E1B]">
                Các tác phẩm chọn lọc
              </h2>
            </div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#7E7A74] mt-4 md:mt-0">
              Chất lượng tối cao • Giới hạn số lượng
            </p>
          </div>

          {/* Grid Layout bất đối xứng kiểu Dribbble / Portfolio */}
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Tác phẩm 1: Khung dọc sang trọng */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-lg mb-6">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105">
                  <source src="https://assets.mixkit.co/videos/31423/31423-720.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-lg font-serif font-light mb-1 text-[#1F1E1B]">Cinematic Villa Tour</h3>
              <p className="text-xs tracking-[0.1em] text-[#7E7A74] uppercase">Hậu kỳ ánh sáng & Màu sắc • 4K Ultra HD</p>
            </div>

            {/* Tác phẩm 2: Khung dọc dịch chuyển cao thấp */}
            <div className="group cursor-pointer md:mt-24">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-lg mb-6">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105">
                  <source src="https://assets.mixkit.co/videos/31424/31424-720.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-lg font-serif font-light mb-1 text-[#1F1E1B]">Minimalist Apartment Reels</h3>
              <p className="text-xs tracking-[0.1em] text-[#7E7A74] uppercase">Tối ưu nhịp cắt TikTok/Shorts • Subtitle nghệ thuật</p>
            </div>

          </div>
        </div>
      </section>

      {/* MINIMAL CONTACT FORM */}
      <section id="contact" className="py-32 bg-[#F5F2EC] border-t border-[#8C7853]/10">
        <div className="max-w-4xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[#8C7853] font-semibold block mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl font-serif font-light mb-6 text-[#1F1E1B]">Khởi động dự án của bạn</h2>
            <p className="text-sm text-[#7E7A74] leading-relaxed font-light mb-8">
              Chúng tôi chỉ nhận hợp tác giới hạn dự án mỗi tháng để đảm bảo tính độc bản và chất lượng tuyệt hảo nhất cho từng thước phim.
            </p>
            <div className="text-xs tracking-[0.1em] text-[#7E7A74] uppercase space-y-2">
              <p>📩 atelier@remedia.vn</p>
              <p>📞 090 123 4567</p>
            </div>
          </div>
          <div className="space-y-6">
            <input type="text" className="w-full bg-transparent border-b border-[#8C7853]/30 py-3 text-sm focus:outline-none focus:border-[#8C7853] text-[#1F1E1B] placeholder-[#7E7A74]/50 font-light" placeholder="Tên của bạn" />
            <input type="tel" className="w-full bg-transparent border-b border-[#8C7853]/30 py-3 text-sm focus:outline-none focus:border-[#8C7853] text-[#1F1E1B] placeholder-[#7E7A74]/50 font-light" placeholder="Số điện thoại / Zalo" />
            <input type="url" className="w-full bg-transparent border-b border-[#8C7853]/30 py-3 text-sm focus:outline-none focus:border-[#8C7853] text-[#1F1E1B] placeholder-[#7E7A74]/50 font-light" placeholder="Link video thô (Google Drive)" />
            <button className="w-full mt-6 bg-[#8C7853] text-white text-xs tracking-[0.2em] uppercase font-medium py-4 hover:bg-[#1F1E1B] transition duration-300">
              Gửi yêu cầu thiết kế hậu kỳ
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#8C7853]/10 text-center text-xs tracking-[0.1em] text-[#7E7A74]">
        <p>&copy; 2026 ATELIER REMEDIA. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
}