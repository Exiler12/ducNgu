import Image from 'next/image';
import { services } from './data/services';

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#c29b38] selection:text-white">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold text-[#c29b38] tracking-tight">
            ducNgu<span className="text-slate-800">Media</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
            <a href="#home" className="hover:text-[#c29b38] transition">Trang chủ</a>
            <a href="#features" className="hover:text-[#c29b38] transition">Tiêu chuẩn dựng</a>
            <a href="#portfolio" className="hover:text-[#c29b38] transition">Bảng giá & Mẫu</a>
            <a href="#testimonials" className="hover:text-[#c29b38] transition">Khách hàng</a>
            <a href="#contact" className="bg-[#c29b38] text-white px-5 py-2.5 rounded-lg hover:bg-[#a37f26] transition">
              Nhận báo giá
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-44 pb-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Biến Thước Phim Thô Thành Giao Dịch Triệu Đô
            </h1>
            <p className="text-lg text-slate-400 mb-9">
              Dịch vụ hậu kỳ, edit video Bất Động Sản chuyên nghiệp cho Môi giới và Chủ đầu tư. Tối ưu hình ảnh kiến trúc, nâng tầm giá trị căn nhà, giúp thanh khoản nhanh hơn gấp 2 lần.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#portfolio" className="bg-[#c29b38] text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-[#a37f26] hover:-translate-y-0.5 transition duration-300">
                Xem video đã dựng
              </a>
              <a href="#contact" className="border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition duration-300">
                Gửi video thô ngay
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="https://assets.mixkit.co/videos/31422/31422-720.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* TIÊU CHUẨN DỰNG */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cam Kết Chất Lượng Hậu Kỳ</h2>
            <p className="text-slate-500">Chúng tôi hiểu rõ insight của người mua nhà, từ đó tập trung làm nổi bật những giá trị đắt giá nhất của bất động sản.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <span className="text-3xl mb-5 block">🎨</span>
              <h3 className="text-xl font-bold mb-3">Color Grading Sang Trọng</h3>
              <p className="text-slate-500 text-sm">Cân bằng ánh sáng, cứu các góc quay ngược sáng, xử lý màu sắc nội thất ấm cúng, cao cấp chuẩn điện ảnh.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <span className="text-3xl mb-5 block">⚡</span>
              <h3 className="text-xl font-bold mb-3">Bàn Giao Siêu Tốc 48h</h3>
              <p className="text-slate-500 text-sm">Quy trình tối ưu giúp trả clip đúng hẹn để kịp tiến độ chạy quảng cáo, đăng tải fanpage hoặc TikTok.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <span className="text-3xl mb-5 block">📍</span>
              <h3 className="text-xl font-bold mb-3">Tracking 2D/3D Trực Quan</h3>
              <p className="text-slate-500 text-sm">Vẽ ranh giới khu đất, hiện text thông tin tiện ích, trường học, bệnh viện chạy theo flycam chuyên nghiệp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Các Gói Dịch Vụ Edit BĐS</h2>
            <p className="text-slate-500">Các video mẫu kiến trúc/nhà ở chạy mượt mà ngay trên máy tính của bạn.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-black">
                  {service.badge && (
                    <span className={`absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 ${service.badge === 'Hot' ? 'bg-red-500' : 'bg-[#c29b38]'}`}>
                      {service.badge}
                    </span>
                  )}
                  <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={service.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-5 flex-grow">{service.desc}</p>
                  <div className="pt-5 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-lg font-bold text-[#c29b38]">{service.price}</span>
                    <a href="#contact" className="bg-[#c29b38] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#a37f26] transition">
                      Đặt lịch
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hơn 100+ Nhà Môi Giới Đã Tin Tưởng</h2>
            <p className="text-slate-500">Lắng nghe chia sẻ thực tế từ những cộng sự đồng hành cùng chúng tôi.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
              <div className="text-amber-500 mb-4">★★★★★</div>
              <p className="italic text-slate-700 mb-6">
                "Đội ngũ REMedia cứu màu video rất đỉnh. Căn hộ Vinhomes mình quay bằng điện thoại lúc chiều muộn bị tối om, qua tay các bạn dựng nhìn sáng sủa và sang như khách sạn 5 sao."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                    alt="Avatar môi giới" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Chị Thu Thảo</h4>
                  <span className="text-xs text-slate-400">Môi giới BĐS Cao Cấp (Quận 2)</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
              <div className="text-amber-500 mb-4">★★★★★</div>
              <p className="italic text-slate-700 mb-6">
                "Làm việc cực kỳ chuyên nghiệp và đúng giờ. Gói video TikTok giữ chân người xem rất tốt, kênh của mình tăng tương tác đều đặn giúp lượng data khách hàng đổ về tăng thấy rõ."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                    alt="Avatar môi giới" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Anh Tuấn Anh</h4>
                  <span className="text-xs text-slate-400">Giám Đốc Sàn Phân Phối Đất Nền</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Gửi File Gốc - Nhận Báo Giá Sau 15 Phút</h2>
            <p className="text-slate-400 mb-8">
              Bạn đã có sẵn source quay thô? Hãy dán đường dẫn (Google Drive / Dropbox) vào form bên cạnh. Chúng tôi sẽ xem qua cấu trúc video và chủ động liên hệ lại tư vấn kịch bản edit tối ưu nhất.
            </p>
            <div className="text-sm text-slate-300 space-y-2">
              <p>📩 Email tiếp nhận file: editor@remedia.vn</p>
              <p>📞 Hotline/Zalo hỗ trợ: 090 123 4567</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tên của bạn *</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c29b38] focus:bg-white/15 transition" placeholder="Nguyễn Văn A" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Số điện thoại / Zalo *</label>
                <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c29b38] focus:bg-white/15 transition" placeholder="0901234567" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Gói dịch vụ cần tư vấn</label>
                <select className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c29b38] transition">
                  <option>Cinematic Review Biệt Thự</option>
                  <option>Video Ngắn TikTok/Reels</option>
                  <option>Toàn Cảnh Dự Án & Tracking</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Link Google Drive/Dropbox chứa video thô (nếu có)</label>
                <input type="url" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c29b38] focus:bg-white/15 transition" placeholder="https://drive.google.com/..." />
              </div>
              <button className="w-full bg-[#c29b38] text-white font-semibold py-3 rounded-lg hover:bg-[#a37f26] transition mt-4">
                Gửi yêu cầu & Nhận báo giá
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-10 text-center text-sm border-t border-slate-900">
        <p>Copyright &copy; 2026 REMedia Production. Tất cả các quyền được bảo lưu.</p>
      </footer>

    </div>
  );
}