-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 16, 2019 lúc 05:31 PM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `database_mshop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cauhinhdienthoai`
--

CREATE TABLE `cauhinhdienthoai` (
  `MaDienThoai` int(11) NOT NULL,
  `CongNgheManHinh` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `DoPhanGiaiMH` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `DoRongMH` float NOT NULL,
  `MatKinh` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `DoPhanGiaiCamSau` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `QuayPhimCamSau` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `DenFlashCamSau` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `NangCaoCamSau` text COLLATE utf8_vietnamese_ci NOT NULL,
  `DoPhanGiaiCamTruoc` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `VideoCall` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `ThongTinCamTruoc` text COLLATE utf8_vietnamese_ci NOT NULL,
  `HeDieuHanh` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Chipset` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `CPU` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `GPU` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `RAM` int(11) NOT NULL,
  `ROM` int(11) NOT NULL,
  `TheNhoNgoai` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `MangDIDong` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `SIM` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `WIFI` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `GPS` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Bluetooth` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `KetNoi` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `JackTaiNghe` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `KetNoiKhac` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `ThietKe` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `ChatLieu` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `KichThuoc` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `TrongLuong` int(11) NOT NULL,
  `DungLuongPin` int(11) NOT NULL,
  `LoaiPin` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `CongNghePin` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `BaoMat` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `TinhNangDacBiet` text COLLATE utf8_vietnamese_ci NOT NULL,
  `GhiAm` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `Radio` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `XemPhim` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `NgheNhac` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `ThoiDIemPhatHanh` varchar(20) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `cauhinhdienthoai`
--

INSERT INTO `cauhinhdienthoai` (`MaDienThoai`, `CongNgheManHinh`, `DoPhanGiaiMH`, `DoRongMH`, `MatKinh`, `DoPhanGiaiCamSau`, `QuayPhimCamSau`, `DenFlashCamSau`, `NangCaoCamSau`, `DoPhanGiaiCamTruoc`, `VideoCall`, `ThongTinCamTruoc`, `HeDieuHanh`, `Chipset`, `CPU`, `GPU`, `RAM`, `ROM`, `TheNhoNgoai`, `MangDIDong`, `SIM`, `WIFI`, `GPS`, `Bluetooth`, `KetNoi`, `JackTaiNghe`, `KetNoiKhac`, `ThietKe`, `ChatLieu`, `KichThuoc`, `TrongLuong`, `DungLuongPin`, `LoaiPin`, `CongNghePin`, `BaoMat`, `TinhNangDacBiet`, `GhiAm`, `Radio`, `XemPhim`, `NgheNhac`, `ThoiDIemPhatHanh`) VALUES
(1, 'AMOLED', 'Full HD+ (1080 x 2232 Pixels)', 6.2, 'Mặt kính cong 2.5D', 'Chính 48 MP & Phụ 8 MP, 5 MP', 'Quay phim FullHD 1080p@120fps, Quay phim 4K 2160p@30fps', 'Có', 'Chụp hình góc siêu rộng, Chế độ chụp ban đêm (ánh sáng yếu), A.I Camera, Chụp ảnh xóa phông', '20 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Tự động lấy nét, Chế độ làm đẹp, Nhận diện khuôn mặt, Công nghệ Selfie A.I Beauty', 'Android 9.0 (Pie)', 'Snapdragon 675 8 nhân', '2 nhân 2.0 GHz & 6 nhân 1.8 GHz', 'Adreno 612', 6, 64, 'Không', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP, v5.0', 'USB Type-C', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung nhựa, kim loại & Mặt lưng nhựa', 'Dài 152 mm - Ngang 74.4 mm - Dày 8.3 mm', 175, 4000, 'Pin chuẩn Li-Po', 'Tiết kiệm pin, Sạc nhanh Quick Charge 3.0', 'Mở khoá vân tay dưới màn hình', 'Nhân bản ứng dụng\r\nChặn tin nhắn\r\nĐèn pin\r\nTrợ lý ảo Google Assistant\r\nGhi âm cuộc gọi\r\nChặn cuộc gọi', 'Có, microphone chuyên dụng chống ồn', 'Có', 'WMV, H.263, H.264(MPEG4-AVC)', 'MP3, WAV, WMA', '08/2019'),
(2, 'Super AMOLED', 'Full HD+ (1080 x 2340 Pixels)', 6.4, 'Mặt kính cong 2.5D', 'Chính 48 MP & Phụ 8 MP, 5 MP', 'Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Có', 'Lấy nét theo pha, Chụp ảnh xóa phông, Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify)', '32 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Quay video HD, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR', 'Android 9.0 (Pie)', 'Exynos 9610 8 nhân', '4 nhân 2.3 Ghz & 4 nhân 1.7 GHz', 'Mali-G72 MP3', 4, 64, 'MicroSD, hỗ trợ tối đa 512 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'USB Type-C', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 158.5 mm - Ngang 74.5 mm - Dày 7.', 169, 4000, 'Pin chuẩn Li-Po', 'Tiết kiệm pin, Siêu tiết kiệm pin, Sạc pin nh', 'Mở khoá khuôn mặt, Mở khoá vân tay dưới màn hình', 'Đèn pin\r\nSạc pin nhanh\r\nChặn cuộc gọi\r\nChặn tin nhắn\r\nMặt kính 2.5D', 'Có, microphone chuyên dụng chống ồn', 'Có', '3GP, MP4, AVI, WMV', 'AMR, Midi, MP3, WAV, WMA, AAC, OGG, FLAC', '09/2019'),
(3, 'TFT', 'HD+ (720 x 1600 Pixels)', 6.5, 'Kính cường lực Corning Gorilla Glass 3', 'Chính 12 MP & Phụ 8 MP, 2 MP, 2 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Có', 'Chế độ làm đẹp, Chụp hình góc siêu rộng, Chế độ Slow Motion, Chế độ Time-Lapse, Chế độ chụp ban đêm (ánh sáng yếu), A.I Camera, Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chế độ chụp chuyên nghiệp (Pro)', '8 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chụp ảnh xoá phông, Công nghệ Selfie A.I Beauty, Flash màn hình, Panorama, Quay video HD, Selfie bằng cử chỉ, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR', 'Android 9.0 (Pie)', 'Snapdragon 665 8 nhân', '4 nhân 2.0 GHz & 4 nhân 1.8 GHz', 'Adreno 610', 3, 64, 'MicroSD, hỗ trợ tối đa 256 GB', '3G, 4G LTE Cat 13', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, DLNA, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'USB Type-C', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 163.6 mm - Ngang 75.6 mm - Dày 9.1 mm', 195, 5000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Khoá ứng dụng\r\nNhân bản ứng dụng\r\nKhông gian trẻ em\r\nĐa cửa sổ (chia đôi màn hình)\r\nKhông gian trò chơi\r\nMặt kính 2.5D\r\nChặn tin nhắn\r\nBáo rung khi kết nối cuộc gọi\r\nChặn cuộc gọi\r\nĐèn pin\r\nDolby Audio™\r\nTrợ lý ảo Google Assistant', 'Có', 'Có', 'MP4, AVI, WMV, H.264(MPEG4-AVC)', 'AMR, MP3, WAV, eAAC+', '10/2019'),
(4, 'IPS LCD', 'HD+ (720 x 1600 Pixels)', 6.5, ' Kính cường lực Corning Gorilla Glass 3', 'Chính 12 MP & Phụ 8 MP, 2 MP, 2 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Có', 'Chụp hình góc siêu rộng, Chụp ảnh siêu cận macro, Chụp hình góc rộng, Chống rung điện tử (EIS), Chụp ảnh xóa phông, Chế độ Time-Lapse, Chế độ chụp ban đêm (ánh sáng yếu), Lấy nét theo pha, Chế độ Slow Motion, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '13 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Selfie ngược sáng HDR, Quay video Full HD, Tự động lấy nét, Chế độ làm đẹp, Chụp ảnh xoá phông, Flash màn hình, Quay video HD, Nhận diện khuôn mặt\r\n', 'Android 9.0 (Pie)', 'Snapdragon 665 8 nhân', '4 nhân 2.0 GHz & 4 nhân 1.8 GHz', 'Adreno 610', 3, 64, 'MicroSD, hỗ trợ tối đa 256 GB\r\n', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, DLNA, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'A2DP, LE, v5.0', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 164.4 mm - Ngang 75.6 mm - Dày 9.3 mm', 198, 5000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Đèn pin\r\nKhông gian trò chơi\r\nĐa cửa sổ (chia đôi màn hình)\r\nNhân bản ứng dụng\r\nMặt kính 2.5D\r\nChặn tin nhắn\r\nChặn cuộc gọi\r\nGhi âm cuộc gọi\r\nTrợ lý ảo Google Assistant', 'Có', 'Có', '3GP, MP4, AVI, WMV', 'AMR, MP3, WAV, WMA, AAC, OGG, FLAC', '10/2019'),
(5, 'IPS LCD', 'HD+ (720 x 1520 Pixels)', 6.5, ' Mặt kính cong 2.5D', ' Mặt kính cong 2.5D', 'Quay phim FullHD 1080p@30fps', 'Có', 'Chụp ảnh xóa phông, Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify)', '8 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Tự động lấy nét, Quay video HD, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD', 'Android 9.0 (Pie)', 'Snapdragon 450 8 nhân', '1.8 GHz', 'Adreno 506', 3, 32, 'MicroSD, hỗ trợ tối đa 512 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'USB Type-C', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 163.3 mm - Ngang 77.5 mm - Dày 8 mm', 183, 4000, 'Pin chuẩn Li-Po', 'Tiết kiệm pin, Sạc pin nhanh', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Nhân bản ứng dụng\r\nMặt kính 2.5D\r\nChặn cuộc gọi\r\nChặn tin nhắn\r\nĐèn pin', 'Có, microphone chuyên dụng chống ồn', 'Không', '3GP, MP4, AVI, WMV', 'Midi, AMR, MP3, WAV, WMA, AAC, OGG, FLAC', '10/2019'),
(6, 'AMOLED', 'Full HD+ (1080 x 2340 Pixels)', 6.5, ' Kính cường lực Corning Gorilla Glass 5', 'Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps', 'Có', 'Lấy nét theo pha, A.I Camera, Chế độ chụp ban đêm (ánh sáng yếu), Chế độ Time-Lapse, Chế độ Slow Motion, Chụp ảnh xóa phông, Chụp bằng cử chỉ, Chụp hình góc rộng, Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '16 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chụp ảnh xoá phông, Công nghệ Selfie A.I Beauty, Flash màn hình, Quay video HD, Selfie bằng cử chỉ, Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR', 'Android 9.0 (Pie)', ')MediaTek Helio P70 8 nhân', '4 nhân 1.6 GHz & 4 nhân 1.2 GHz', 'Mali-G72 MP3', 8, 128, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'A2DP, LE, v4.2', 'USB Type-C', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung kim loại & Mặt lưng kính', 'Dài 161.8 mm - Ngang 75.8 mm - Dày 8.7 mm', 195, 4000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin, Siêu tiết kiệm pin, Sạc nhanh VOOC', 'Mở khoá khuôn mặt, Mở khoá vân tay dưới màn hình', 'Dolby Audio™\r\nTrợ lý ảo Google Assistant\r\nSạc pin nhanh\r\nGhi âm cuộc gọi\r\nChặn cuộc gọi\r\nChặn tin nhắn\r\nNhân bản ứng dụng\r\nĐa cửa sổ (chia đôi màn hình)\r\nĐèn pin', 'Có, microphone chuyên dụng chống ồn', 'Không', 'WMV, H.263, H.264(MPEG4-AVC)', 'MP3, WAV, WMA', '10/2019'),
(7, 'IPS LCD', 'HD+ (720 x 1520 Pixels)', 6.2, ' Kính cường lực Corning Gorilla Glass 3', 'Chính 13 MP & Phụ 2 MP', 'Quay phim FullHD 1080p@30fps', 'Có', 'Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, HDR, Panorama', '8 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Quay video HD, Tự động lấy nét, Chế độ làm đẹp', 'Android 8.1 (Oreo)', 'MediaTek Helio P35 8 nhân', '2.3 GHz', 'PowerVR GE8320', 3, 32, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v4.2', 'Micro USB', '3.5 mm', 'Không', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 155.9 mm - Ngang 75.4 mm - Dày 8.2 mm', 170, 4230, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Chặn tin nhắn\r\nChặn cuộc gọi\r\nĐèn pin', 'Có', 'Có', 'MP4, AVI', 'MP3, WAV', '05/2019'),
(8, 'OLED', '1242 x 2688 Pixels', 6.5, ' Kính cường lực oleophobic (ion cường lực)', '3 camera 12 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps, Quay phim FullHD 1080p@60fps, Quay phim FullHD 1080p@120fps, Quay phim FullHD 1080p@240fps, Quay phim 4K 2160p@24fps, Quay phim 4K 2160p@30fps, Quay phim 4K 2160p@60fps', '3 đèn LED 2 tông màu', 'Chụp hình góc rộng, Chụp ảnh xóa phông, Chế độ Slow Motion, Chế độ Time-Lapse, Chế độ chụp ban đêm (ánh sáng yếu), Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chống rung quang học (OIS)', '12 MP', 'Có', 'Chụp ảnh xoá phông, Quay phim 4K, Sticker AR (biểu tượng thực tế ảo), Retina Flash, Quay video HD, Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR, Chế độ Slow Motion', 'iOS 13', 'Apple A13 Bionic 6 nhân', '2 nhân 2.65 GHz & 4 nhân 1.8 GHz', 'Apple GPU 4 nhân', 4, 256, 'Không', 'Hỗ trợ 4G', 'Nano SIM & eSIM', 'Dual-band, Wi-Fi 802.11 a/b/g/n/ac/ax, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'Lightning', 'Lightning', 'NFC, OTG', 'Nguyên khối', 'Khung thép không gỉ & Mặt lưng kính cường lực', 'Dài 158 mm - Ngang 77.8 mm - Dày 8.1 mm', 226, 3969, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Sạc pin nhanh, Sạc pin không dây', 'Mở khoá khuôn mặt Face ID', 'Dolby Audio™\r\nĐèn pin\r\nApple Pay\r\nSạc pin không dây\r\nSạc pin nhanh\r\nChuẩn Kháng nước, Chuẩn kháng bụi', 'Có, microphone chuyên dụng chống ồn', 'Không', 'H.264(MPEG4-AVC)', 'Lossless, MP3, AAC, FLAC', '11/2019'),
(9, 'OLED', '1242 x 2688 Pixels', 6.5, ' Kính cường lực oleophobic (ion cường lực)', '3 camera 12 MP', 'Quay phim 4K 2160p@30fps, Quay phim 4K 2160p@60fps', '3 đèn LED 2 tông màu', 'Chụp hình góc rộng, Chụp ảnh xóa phông, Chế độ Slow Motion, Chế độ Time-Lapse, Chế độ chụp ban đêm (ánh sáng yếu), Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chống rung quang học (OIS)', '12 MP', 'Có', 'Chụp ảnh xoá phông, Quay phim 4K, Sticker AR (biểu tượng thực tế ảo), Retina Flash, Quay video HD, Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR, Chế độ Slow Motion', 'iOS 13', 'Apple A13 Bionic 6 nhân', '2 nhân 2.65 GHz & 4 nhân 1.8 GHz', 'Apple GPU 4 nhân', 4, 64, 'Không', 'Hỗ trợ 4G', 'Nano SIM & eSIM', 'Dual-band, Wi-Fi 802.11 a/b/g/n/ac/ax, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'Lightning', 'Lightning', 'NFC, OTG', 'Nguyên khối', 'Khung thép không gỉ & Mặt lưng kính cường lực', 'Dài 158 mm - Ngang 77.8 mm - Dày 8.1 mm', 226, 3969, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Sạc pin nhanh, Sạc pin không dây', 'Mở khoá khuôn mặt Face ID', 'Dolby Audio™\r\nĐèn pin\r\nApple Pay\r\nSạc pin không dây\r\nSạc pin nhanh\r\nChuẩn Kháng nước, Chuẩn kháng bụi', 'Có, microphone chuyên dụng chống ồn', 'Không', 'H.264(MPEG4-AVC)', 'Lossless, MP3, AAC, FLAC', '11/2019'),
(10, 'IPS TFT', 'HD+ (720 x 1520 Pixels)', 6.2, ' Mặt kính cong 2.5D', 'Chính 13 MP & Phụ 2 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps', 'Có', 'Chế độ làm đẹp, Hiệu ứng AR Stickers, Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '8 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Thông tin khácTự động lấy nét, Chụp ảnh xoá phông, Sticker AR (biểu tượng thực tế ảo), Quay video HD, Selfie bằng cử chỉ, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD', 'Android 9.0 (Pie)', 'MediaTek MT6762 8 nhân (Helio P22)', '4 nhân 2.0 GHz & 4 nhân 1.5 GHz', 'PowerVR GE8320', 2, 32, 'MicroSD, hỗ trợ tối đa 512 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot', 'A-GPS, GLONASS', 'A2DP, LE, v5.0', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 156.9 mm - Ngang 75.8 mm - Dày 7.8 mm', 168, 4000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin, Siêu tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Mặt kính 2.5D\r\nĐèn pin\r\nDolby Audio™\r\nGhi âm cuộc gọi\r\nChặn cuộc gọi\r\nNhân bản ứng dụng\r\nChặn tin nhắn', 'Có, microphone chuyên dụng chống ồn', 'Có', '3GP, MP4, AVI, WMV', 'Midi, AMR, MP3, WAV, WMA, AAC, OGG, FLAC', '08/2019'),
(11, 'Super AMOLED', 'HD+ (720 x 1560 Pixels)', 6.4, ' Mặt kính cong 2.5D', 'Chính 25 MP & Phụ 8 MP, 5 MP', 'Quay phim FullHD 1080p@30fps', 'Có', 'Chế độ làm đẹp, Chụp hình góc rộng, Chụp ảnh xóa phông, Chế độ Slow Motion, A.I Camera, Lấy nét theo pha, Hiệu ứng AR Stickers, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '16 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chụp ảnh xoá phông, Flash màn hình, Quay video HD, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét', 'Android 9.0 (Pie)', 'Exynos 7904 8 nhân', '1.8 GHz', 'Mali-G71', 4, 64, 'MicroSD, hỗ trợ tối đa 512 GB', '3G, 4G LTE Cat 6', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'A2DP, LE, v5.0', 'USB Type-C', '3.5 mm', 'NFC, OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 158.5 mm - Ngang 74.7 mm - Dày 7.8 mm', 166, 4000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin, Siêu tiết kiệm pin, Sạc pin nhanh', 'Mở khoá khuôn mặt, Mở khoá vân tay dưới màn hình', 'Thu nhỏ màn hình sử dụng một tay\r\nMặt kính 2.5D\r\nNhân bản ứng dụng\r\nKhông gian trẻ em\r\nKhông gian trò chơi\r\nChặn tin nhắn\r\nChặn cuộc gọi\r\nSạc pin nhanh\r\nChạm 2 lần sáng màn hình\r\nĐèn pin\r\nDolby Audio™', 'Có, microphone chuyên dụng chống ồn', 'Có', '3GP, MP4, AVI, WMV', 'AMR, Midi, MP3, WAV, WMA, AAC, OGG, FLAC', '09/2019'),
(12, 'IPS LCD', '828 x 1792 Pixels', 6.1, ' Kính cường lực oleophobic (ion cường lực)', 'Chính 12 MP & Phụ 12 MP', 'Quay phim 4K 2160p@30fps, Quay phim 4K 2160p@60fps', '3 đèn LED 2 tông màu', 'Chế độ chụp ban đêm (ánh sáng yếu), Chế độ Time-Lapse, Chế độ Slow Motion, Chụp ảnh xóa phông, Zoom quang học, Chụp hình góc rộng, Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama', '12 MP', 'Có', 'Chụp ảnh xoá phông, Quay phim 4K, Sticker AR (biểu tượng thực tế ảo), Retina Flash, Quay video HD, Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR, Chế độ Slow Motion', 'iOS 13', 'Apple A13 Bionic 6 nhân', '2 nhân 2.65 GHz & 4 nhân 1.8 GHz', 'Apple GPU 4 nhân', 4, 64, 'Không', 'Hỗ trợ 4G', 'Nano SIM & eSIM', 'Dual-band, Wi-Fi 802.11 a/b/g/n/ac/ax, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'Lightning', 'Lightning', 'NFC, OTG', 'Nguyên khối', 'Khung nhôm & Mặt lưng kính cường lực', 'Dài 150.9 mm - Ngang 75.7 mm - Dày 8.3 mm', 194, 3110, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Sạc pin nhanh, Sạc pin không dây', 'Mở khoá khuôn mặt Face ID', 'Đèn pin\r\nSạc pin không dây\r\nSạc pin nhanh\r\nApple Pay\r\nDolby Audio™\r\nChuẩn Kháng nước, Chuẩn kháng bụi', 'Có, microphone chuyên dụng chống ồn', 'Không', 'H.264(MPEG4-AVC)', 'Lossless, MP3, AAC, FLAC', '11/2019'),
(13, 'LED-backlit IPS LCD', 'Full HD (1080 x 1920 Pixels)', 5.5, ' Kính cường lực oleophobic (ion cường lực)', 'Chính 12 MP & Phụ 12 MP', 'Quay phim 4K 2160p@30fps', '4 đèn LED (2 tông màu)', 'Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chống rung quang học (OIS)', '7 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Retina Flash, Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR', 'iOS 12', 'Apple A10 Fusion 4 nhân', '2.3 GHz', 'Chip đồ họa 6 nhân', 3, 32, 'Không', '3G, 4G LTE Cat 9', '1 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP, v4.2', 'Lightning', 'Lightning', 'Air Play, NFC, OTG, HDMI', 'Nguyên khối, mặt kính cong 2.5D', 'Khung & Mặt lưng hợp kim nhôm, magie', 'Dài 158.2 mm - Ngang 77.9 mm - Dày 7.3 mm', 188, 2900, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin', 'Mở khóa bằng vân tay', '3D Touch', 'Có, microphone chuyên dụng chống ồn', 'Không', 'H.265, 3GP, MP4, AVI, WMV, H.264(MPEG4-AVC), DivX, WMV9, Xvid', 'Midi, Lossless, MP3, WAV, WMA, AAC, eAAC+', '11/2016'),
(14, 'Dynamic AMOLED', '2K+ (1440 x 3040 Pixels)', 6.8, ' Kính cường lực Corning Gorilla Glass', 'Chính 12 MP & Phụ 12 MP, 16 MP, TOF 3D', 'Quay phim siêu chậm 960 fps, Quay phim FullHD 1080p@240fps, Quay phim 4K 2160p@60fps', 'Có', 'Super Slow Motion (quay siêu chậm), Lấy nét theo pha, A.I Camera, Chế độ Time-Lapse, Chế độ Slow Motion, Chụp ảnh xóa phông, Zoom quang học, Chế độ làm đẹp, Chụp hình góc rộng, Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chống rung quang học (OIS), Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '10 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Flash màn hình, Quay video HD, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét', 'Android 9.0 (Pie)', 'Exynos 9825 8 nhân', '2 nhân 2.73 GHz, 2 nhân 2.4 GHz & 4 nhân 1.9 GHz', 'Mali-G76 MP12', 12, 256, 'MicroSD, hỗ trợ tối đa 1 TB', 'Hỗ trợ 4G', '2 SIM Nano (SIM 2 chung khe thẻ nhớ)', 'Wi-Fi 802.11 a/b/g/n/ac/ax, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, apt-X, v5.0', '2 đầu Type-C', 'Không', 'NFC, OTG', 'Nguyên khối', 'Khung kim loại & Mặt lưng kính cường lực', 'Dài 162.3 mm - Ngang 77.2 mm - Dày 7.9 mm', 196, 4300, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Siêu tiết kiệm pin, Sạc pin nhanh, Sạc pin không dây', 'Mở khoá khuôn mặt, Mở khoá vân tay dưới màn hình', 'Mặt kính 2.5D\r\nSiêu tiết kiệm pin\r\nChặn tin nhắn\r\nChặn cuộc gọi\r\nSạc pin nhanh\r\nSạc pin không dây\r\nĐèn pin\r\nSạc pin cho thiết bị khác\r\nChuẩn Kháng nước, Chuẩn kháng bụi\r\nDolby Audio™\r\nMàn hình luôn hiển thị AOD\r\nÂm thanh AKG\r\nTrợ lý ảo Samsung Bixby\r\nThu nhỏ màn hình sử dụng một tay\r\nSamsung Pay\r\nSamsung DeX\r\nĐa cửa sổ (chia đôi màn hình)\r\nTản nhiệt nước carbon\r\nNhân bản ứng dụng', 'Có, microphone chuyên dụng chống ồn', 'Không', 'H.265, 3GP, MP4, AVI, H.263, H.264(MPEG4-AVC), DivX, Xvid', 'Midi, AMR, MP3, WAV, AAC++, eAAC+, FLAC', '08/2019'),
(15, 'IPS LCD', 'HD+ (720 x 1560 Pixels)', 6.1, ' Kính cường lực Corning Gorilla Glass 3', 'Chính 13 MP & Phụ 2 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps', 'Có', 'A.I Camera, Chế độ Time-Lapse, Chế độ Slow Motion, Chụp ảnh xóa phông, Chụp bằng cử chỉ, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '5 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chụp ảnh xoá phông, Công nghệ Selfie A.I Beauty, Flash màn hình, Quay video HD, Selfie bằng cử chỉ, Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR', 'Android 9.0 (Pie)', 'MediaTek MT6762 8 nhân (Helio P22)', '2.0 GHz', 'PowerVR GE8320', 3, 32, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP, v4.2', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 154.3 mm - Ngang 73.7 - Dày 8.5 mm', 166, 4000, 'Pin chuẩn Li-Ion', 'Tiết kiệm pin, Siêu tiết kiệm pin\r\n', 'Mở khoá khuôn mặt', 'Trợ lý ảo Google Assistant\r\nĐèn pin\r\nChặn cuộc gọi\r\nBáo rung khi kết nối cuộc gọi\r\nGhi âm cuộc gọi\r\nChặn tin nhắn\r\nMặt kính 2.5D\r\nNhân bản ứng dụng\r\nĐa cửa sổ (chia đôi màn hình)', 'Có', 'Có', '3GP, MP4, AVI, WMV', 'AMR, MP3, WAV, WMA, AAC, OGG, FLAC', '06/2019'),
(16, 'TFT', 'HD+ (720 x 1600 Pixels)', 6.5, ' Kính cường lực Corning Gorilla Glass 3', 'Chính 12 MP & Phụ 8 MP, 2 MP, 2 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Có', 'Chế độ làm đẹp, Chụp hình góc siêu rộng, Chế độ Slow Motion, Chế độ Time-Lapse, Chế độ chụp ban đêm (ánh sáng yếu), A.I Camera, Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chế độ chụp chuyên nghiệp (Pro)', '8 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chụp ảnh xoá phông, Công nghệ Selfie A.I Beauty, Flash màn hình, Panorama, Quay video HD, Selfie bằng cử chỉ, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR', 'Android 9.0 (Pie)', 'Snapdragon 665 8 nhân', '4 nhân 2.0 GHz & 4 nhân 1.8 GHz', 'Adreno 610', 4, 128, 'MicroSD, hỗ trợ tối đa 256 GB', '3G, 4G LTE Cat 13', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, DLNA, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'USB Type-C', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 163.6 mm - Ngang 75.6 mm - Dày 9.1 mm', 195, 5000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Khoá ứng dụng\r\nNhân bản ứng dụng\r\nKhông gian trẻ em\r\nĐa cửa sổ (chia đôi màn hình)\r\nKhông gian trò chơi\r\nMặt kính 2.5D\r\nChặn tin nhắn\r\nBáo rung khi kết nối cuộc gọi\r\nChặn cuộc gọi\r\nĐèn pin\r\nDolby Audio™\r\nTrợ lý ảo Google Assistant', 'Có', 'Có', 'MP4, AVI, WMV, H.264(MPEG4-AVC)', 'AMR, MP3, WAV, eAAC+', '10/2019'),
(17, 'IPS LCD', 'HD+ (720 x 1520 Pixels)', 6.2, 'Mặt kính cong 2.5D', '13 MP', 'Quay phim FullHD 1080p@30fps', 'Có', 'Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify)', '5 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Sticker AR (biểu tượng thực tế ảo), Selfie ngược sáng HDR, Tự động lấy nét, Chế độ làm đẹp, Quay video HD, Nhận diện khuôn mặt', 'Android 9.0 (Pie)', 'Exynos 7884 8 nhân', '1.6 GHz', 'Mali-G71 MP2', 2, 32, 'MicroSD, hỗ trợ tối đa 512 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP, v4.2', 'Micro USB', '3.5 mm', 'Không', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 155.6 mm - Ngang 75.6 mm - Dày 7.94 mm', 168, 3400, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin', 'Mở khoá khuôn mặt', 'Chặn cuộc gọi\r\nĐèn pin\r\nChặn tin nhắn\r\nMặt kính 2.5D', 'Có', 'Có', '3GP, MP4, AVI, WMV', 'AMR, Midi, MP3, WAV, WMA, AAC, OGG, FLAC', '04/2019'),
(18, 'IPS LCD', 'HD+ (720 x 1560 Pixels)', 6.1, 'Kính cường lực Corning Gorilla Glass 3', '8 MP', 'Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps', 'Có', 'Chế độ Time-Lapse, Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '5 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chụp ảnh xoá phông, Flash màn hình, Quay video HD, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét', 'Android 9.0 (Pie)', 'MediaTek MT6762R 8 nhân', '2.0 GHz', 'PowerVR GE8320', 2, 32, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 b/g/n, DLNA, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v4.2', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 154.5 mm - Ngang 73.8 mm - Dày 8.4 mm', 170, 4000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin', 'Mở khoá khuôn mặt', 'Chặn cuộc gọi\r\nĐèn pin\r\nChặn tin nhắn\r\nMặt kính 2.5D\r\nĐa cửa sổ (chia đôi màn hình)', 'Có', 'Có', 'MP4, H.263, H.264(MPEG4-AVC)', 'MP3, WAV, eAAC+, FLAC', '05/2019'),
(19, 'Super AMOLED', 'Full HD+ (1080 x 2400 Pixels)', 6.7, ' Kính cường lực', 'Chính 32 MP & Phụ 8 MP, 5 MP', 'Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Có', 'A.I Camera, Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '32 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Selfie ngược sáng HDR, Đèn Flash trợ sáng, Tự động lấy nét, Quay video Full HD, Chế độ làm đẹp, Nhận diện khuôn mặt, Quay video HD, Sticker AR (biểu tượng thực tế ảo)', 'Android 9.0 (Pie)', 'Snapdragon 675 8 nhân', '2 nhân 2.0 GHz & 6 nhân 1.7 GHz', 'Adreno 612', 6, 128, 'MicroSD, hỗ trợ tối đa 512 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'A2DP, LE, v5.0', '2 đầu Type-C', '3.5 mm', 'Không', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 164.3 mm - Ngang 76.7 mm - Dày 7.9 mm', 183, 4500, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Sạc pin nhanh', 'Mở khoá khuôn mặt, Mở khoá vân tay dưới màn hình', 'Đèn pin\r\nChặn cuộc gọi\r\nSạc pin nhanh\r\nMàn hình luôn hiển thị AOD\r\nMặt kính 2.5D\r\nChặn tin nhắn', 'Có, microphone chuyên dụng chống ồn', 'Có', '3GP, MP4, AVI, WMV', 'Midi, AMR, MP3, WAV, WMA, AAC, OGG, FLAC', '04/2019'),
(20, 'IPS LCD', 'HD+ (720 x 1544 Pixels)', 6.35, ' Kính thường', 'Chính 13 MP & Phụ 2 MP', 'Quay phim 480p@30fps, Quay phim HD 720p@30fps, Quay phim FullHD 1080p@30fps', 'Có', 'Chụp ảnh xóa phông, Chụp bằng cử chỉ, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '8 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR, Flash màn hình, Quay video HD, Selfie bằng cử chỉ', 'Android 9.0 (Pie)', 'Snapdragon 439 8 nhân', '1.95 GHz', 'Adreno 505', 3, 32, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 159.43 mm - Rộng 76.77 mm - Dày 8.92 mm', 190, 5000, 'Pin chuẩn Li-Po', 'Tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Chạm 2 lần sáng màn hình\r\nĐèn pin\r\nChạm 2 lần tắt màn hình\r\nVẽ lên màn hình để mở nhanh ứng dụng\r\nThu nhỏ màn hình sử dụng một tay\r\nTrợ lý ảo Jovi\r\nNhân bản ứng dụng\r\nKhông gian trẻ em\r\nĐa cửa sổ (chia đôi màn hình)\r\nKhông gian trò chơi', 'Có', 'Có', '3GP, MP4, AVI', 'Midi, AMR, MP3, WAV, FLAC', '10/2019'),
(21, 'IPS LCD', 'Full HD+ (1080 x 2280 Pixels)', 5.8, ' Kính cường lực Corning Gorilla Glass 3', 'Chính 16 MP & Phụ 5 MP', 'Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Đèn LED 2 tông màu', 'Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify)', '16 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Sticker AR (biểu tượng thực tế ảo), Nhận diện khuôn mặt, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR, Chế độ làm đẹp', 'Android 8 Oreo (Android One)', 'Snapdragon 636 8 nhân', '1.8 GHz', 'Adreno 509', 4, 64, 'MicroSD, hỗ trợ tối đa 400 GB', 'Hỗ trợ 4G', '2 SIM Nano (SIM 2 chung khe thẻ nhớ)', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'LE, A2DP, v5.0', 'USB Type-C', '3.5 mm', 'USB 2.0', 'Nguyên khối', 'Khung kim loại & Mặt lưng kính cường lực', 'Dài 147.2 mm - Ngang 71 mm - Dày 8 mm', 153, 3060, 'Pin chuẩn Li-Ion', 'Tiết kiệm pin', 'Mở khóa bằng vân tay', 'Chặn tin nhắn\r\nChặn cuộc gọi\r\nĐèn pin', 'Không', 'Có', '3GP, MP4, WMV', 'AMR, MP3, WAV, AAC, OGG, FLAC', '08/2018'),
(22, 'IPS LCD', 'Full HD+ (1080 x 2280 Pixels)', 6.3, ' Mặt kính cong 2.5D', 'Chính 16 MP & Phụ 5 MP', 'Quay phim FullHD 1080p@30fps', 'Có', 'Chụp ảnh xóa phông, A.I Camera, Tự động lấy nét, Chạm lấy nét, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', '25 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Quay video Full HD, Tự động lấy nét, Chế độ làm đẹp, Sticker AR (biểu tượng thực tế ảo)', 'Android 8.1 (Oreo)', 'MediaTek Helio P60 8 nhân', '2.0 GHz', 'Mali-G72 MP3', 4, 128, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, DLNA, Wi-Fi Direct, Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP, v4.2', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 155.97 mm - Ngang 75.63 mm - Dày 8.1 mm', 163, 3315, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Siêu tiết kiệm pin, Sạc pin nhanh', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Chạm 2 lần sáng màn hình\r\nSạc pin nhanh\r\nChạm 2 lần tắt màn hình\r\nChặn cuộc gọi\r\nChặn tin nhắn\r\nMặt kính 2.5D\r\nVẽ lên màn hình để mở nhanh ứng dụng\r\nTrợ lý ảo Jovi\r\nNhân bản ứng dụng\r\nĐèn pin', 'Có', 'Có', 'MP4, AVI, H.263, H.264(MPEG4-AVC)', 'MP3, WAV', '09/2018'),
(23, 'IPS LCD', 'Full HD+ (1080 x 2280 Pixels)', 6.18, ' Mặt kính cong 2.5D', 'Chính 12 MP & Phụ 24 MP', 'Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Có', 'Chụp ảnh xóa phông, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama', '20 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Nhận diện khuôn mặt, Chế độ làm đẹp, Đèn Flash trợ sáng, Tự động lấy nét', 'Android 8.1 (Oreo)', 'Qualcomm Snapdragon 660 8 nhân', '4 nhân 2.2 GHz Kryo 260 & 4 nhân 1.8 GHz Kryo 260', 'Adreno 512', 6, 64, 'MicroSD, hỗ trợ tối đa 256 GB', '3G, 4G LTE Cat 6', '2 SIM Nano (SIM 2 chung khe thẻ nhớ)', 'Wi-Fi 802.11 b/g/n, Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP, v5.0', 'USB Type-C', '3.5 mm', 'Không', 'Nguyên khối', 'Khung kim loại + mặt lưng kính', 'Dài 156.1 mm - Ngang 76 mm - Dày 7.95 mm', 180, 3650, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Sạc pin nhanh', 'Mở khóa bằng vân tay', 'Mặt kính 2.5D\r\nĐèn pin\r\nSạc pin nhanh', 'Có, microphone chuyên dụng chống ồn', 'Có', '3GP, MP4', 'MP3, WAV, AAC', '12/2018'),
(24, 'LTPS LCD', 'Full HD+ (1080 x 2340 Pixels)', 6.5, ' Mặt kính cong 2.5D', 'Chính 13 MP & Phụ 2 MP', 'Quay phim FullHD 1080p@30fps, Quay phim FullHD 1080p@60fps', 'Có', 'Chụp ảnh xóa phông, Chế độ Time-Lapse, Chế độ chụp ban đêm (ánh sáng yếu), A.I Camera, Tự động lấy nét, Chạm lấy nét, HDR, Panorama, Làm đẹp (Beautify), Chế độ chụp chuyên nghiệp (Pro)', 'Chính 16 MP & Phụ 2 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chế độ làm đẹp, Camera kép, Quay video HD, Sticker AR (biểu tượng thực tế ảo), Tự động lấy nét', 'Android 8.1 (Oreo)', 'Kirin 710', '4 nhân 2.2 GHz & 4 nhân 1.7 GHz', 'Mali-G51 MP4', 4, 64, 'MicroSD, hỗ trợ tối đa 512 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot', 'A-GPS, GLONASS', 'LE, A2DP, v4.2', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung & Mặt lưng nhựa', 'Dài 162.4 mm - Ngang 77.1 mm - Dày 8.05 mm', 173, 4000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin, Siêu tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Chặn cuộc gọi\r\nChặn tin nhắn\r\nNhân bản ứng dụng\r\nĐèn pin', 'Có, microphone chuyên dụng chống ồn', 'Có', 'MP4, H.263, H.264(MPEG4-AVC)', 'MP3, WAV, eAAC+, FLAC', '10/2018'),
(25, 'IPS LCD', 'Full HD+ (1080 x 2340 Pixels)', 6.3, ' Kính cường lực Corning Gorilla Glass 5', 'Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP', 'Quay phim HD 720p@120fps, Quay phim HD 720p@240fps, Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Có', 'Super Slow Motion (quay siêu chậm), Lấy nét theo pha, A.I Camera, Chụp ảnh siêu độ phân giải, Chế độ chụp ban đêm (ánh sáng yếu), Chế độ Time-Lapse, Chế độ Slow Motion, Chụp ảnh xóa phông, Chống rung điện tử (EIS), Google Lens, Chụp hình góc rộng, Chụp ảnh siêu cận macro, Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify)', '13 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Flash màn hình, Quay video HD, Selfie bằng cử chỉ, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR', 'Android 9.0 (Pie)', 'Snapdragon 665 8 nhân', '4 nhân 2.0 GHz & 4 nhân 1.8 GHz', 'Adreno 610', 4, 64, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 Nano SIM', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'A2DP, LE, v4.2', 'USB Type-C', '3.5 mm', 'OTG, Hồng Ngoại', 'Nguyên khối', 'Khung kim loại & Mặt lưng kính cường lực', 'Dài 158.3 mm - Ngang 75.3 mm - Dày 8.4 mm', 190, 4000, 'Pin chuẩn Li-Po', ' Tiết kiệm pin, Sạc pin nhanh', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Đèn pin\r\nChạm 2 lần sáng màn hình\r\nSạc pin nhanh\r\nChặn cuộc gọi\r\nBáo rung khi kết nối cuộc gọi\r\nChặn tin nhắn\r\nMặt kính 2.5D\r\nThu nhỏ màn hình sử dụng một tay\r\nNhân bản ứng dụng\r\nKhoá ứng dụng\r\nĐa cửa sổ (chia đôi màn hình)\r\nKhông gian trò chơi', 'Có, microphone chuyên dụng chống ồn', 'Có', 'MP4, AVI', 'MP3, WAV', '10/2019'),
(26, 'IPS LCD', 'Full HD+ (1080 x 2280 Pixels)', 6.18, ' Kính cường lực Dinorex™ Glass', 'Chính 12 MP & Phụ 13 MP', 'Quay phim FullHD 1080p@30fps, Quay phim 4K 2160p@30fps', 'Đèn LED kép', 'A.I Camera, Chế độ Time-Lapse, Chế độ Slow Motion, Chụp ảnh xóa phông, Chống rung điện tử (EIS), Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Chống rung quang học (OIS), Chế độ chụp chuyên nghiệp (Pro)', '20 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Chụp ảnh xoá phông, Sticker AR (biểu tượng thực tế ảo), Flash màn hình, Camera kép, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét', 'Android 9 Pie (Android One)', 'Snapdragon 710 8 nhân', '2 nhân 2.2 GHz & 6 nhân 1.7 GHz', 'Adreno 616', 4, 64, 'MicroSD, hỗ trợ tối đa 400 GB', '3G, 4G LTE Cat 6', '2 SIM Nano (SIM 2 chung khe thẻ nhớ)', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'A2DP, LE, v5.0', 'USB Type-C', '3.5 mm', 'NFC', 'Nguyên khối', 'Khung kim loại & Mặt lưng kính cường lực', 'Dài 154.8 mm - Ngang 75.76 mm - Dày 7.97 mm', 180, 3500, 'Pin chuẩn Li-Ion', ' Tiết kiệm pin, Sạc pin nhanh', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Chặn tin nhắn\r\nChặn cuộc gọi\r\nSạc pin nhanh\r\nĐèn pin', 'Có, microphone chuyên dụng chống ồn', 'Có', '3GP, MP4, AVI, H.264(MPEG4-AVC)', 'AMR, Midi, MP3, WAV, AAC, AAC+, eAAC+\r\n', '12/2018'),
(27, 'LTPS LCD', 'Full HD+ (1080 x 2340 Pixels)', 6.3, ' Mặt kính cong 2.5D', 'Chính 16 MP & Phụ 2 MP', 'Quay phim FullHD 1080p@60fps', 'Có', 'Chụp ảnh xóa phông, Chế độ Time-Lapse, A.I Camera, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify)', 'Chính 24 MP & Phụ 2 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Tự động lấy nét, Quay video Full HD, Chế độ làm đẹp, Công nghệ Selfie A.I Beauty, Camera kép, Nhận diện khuôn mặt', 'Android 8.1 (Oreo)', 'Kirin 710', '4 nhân 2.2 GHz & 4 nhân 1.7 GHz', 'Mali-G51 MP4', 4, 128, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 SIM Nano (SIM 2 chung khe thẻ nhớ)', 'Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot', 'A-GPS, GLONASS', 'apt-X, v4.2', 'Micro USB', '3.5 mm', 'OTG', 'Nguyên khối', 'Khung kim loại & Mặt lưng kính', 'Dài 157.6 mm - Ngang 75.2 mm - Dày 7.6 mm', 169, 3340, 'Pin chuẩn Li-Po', ' Tiết kiệm pin', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Đèn pin', 'Có, microphone chuyên dụng chống ồn', 'Có', '3GP, MP4', 'AMR, Midi, MP3, WAV, AAC, OGG, FLAC', '07/2018'),
(28, 'IPS LCD', 'Full HD+ (1080 x 2340 Pixels)', 6.53, 'Kính cường lực Corning Gorilla Glass 5', 'Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP', 'Quay phim FullHD 1080p@120fps, Quay phim 4K 2160p@30fps', 'Đèn LED kép', 'Super Slow Motion (quay siêu chậm), Lấy nét theo pha, A.I Camera, Chụp ảnh siêu độ phân giải, Chế độ chụp ban đêm (ánh sáng yếu), Chế độ Time-Lapse, Chế độ Slow Motion, Chụp ảnh xóa phông, Chống rung điện tử (EIS), Chụp hình góc rộng, Chụp ảnh siêu cận macro, Chụp hình góc siêu rộng, Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt, HDR, Panorama, Làm đẹp (Beautify)', '20 MP', 'Hỗ trợ VideoCall thông qua ứng dụng', 'Flash màn hình, Quay video HD, Nhận diện khuôn mặt, Chế độ làm đẹp, Quay video Full HD, Tự động lấy nét, Selfie ngược sáng HDR, Chụp ảnh xoá phông', 'Android 9.0 (Pie)', 'Mediatek Helio G90T 8 nhân', '2 nhân 2.05 GHz & 6 nhân 2.0 GHz', 'Mali-G76 MC4', 6, 128, 'MicroSD, hỗ trợ tối đa 256 GB', 'Hỗ trợ 4G', '2 SIM Nano (SIM 2 chung khe thẻ nhớ)', 'Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot', 'BDS, A-GPS, GLONASS', 'A2DP, LE, v5.0', 'USB Type-C', '3.5 mm', 'NFC, OTG, Hồng Ngoại', 'Nguyên khối', 'Khung kim loại & Mặt lưng kính cường lực', 'Dài 161.3 mm - Ngang 76.4 mm - Dày 8.8 mm', 199, 4500, 'Pin chuẩn Li-Po', ' Tiết kiệm pin, Sạc nhanh Quick Charge 3.0', 'Mở khóa bằng vân tay, Mở khoá khuôn mặt', 'Chặn tin nhắn\r\nChặn cuộc gọi\r\nSạc pin nhanh\r\nThu nhỏ màn hình sử dụng một tay\r\nĐèn pin\r\nChạm 2 lần sáng màn hình\r\nNhân bản ứng dụng\r\nKhoá ứng dụng\r\nĐa cửa sổ (chia đôi màn hình)\r\nKhông gian trò chơi\r\nTrợ lý ảo Google Assistant\r\nMặt kính 2.5D\r\nCổng hồng ngoại', 'Có, microphone chuyên dụng chống ồn\r\nRadio', 'Có', 'MP4, AVI', 'MP3, WAV', '10/2019');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `MADonHang` int(11) NOT NULL,
  `LoaiSanPham` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `MaSanPham` int(11) NOT NULL,
  `Mau` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `GiaBan` int(11) NOT NULL,
  `SoLuong` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`MADonHang`, `LoaiSanPham`, `MaSanPham`, `Mau`, `GiaBan`, `SoLuong`) VALUES
(26, 'Điện thoại', 28, NULL, 6490000, 2),
(27, 'Phụ kiện', 40, NULL, 90000, 1),
(28, 'Điện thoại', 27, NULL, 5390000, 1),
(28, 'Phụ kiện', 39, NULL, 90000, 2),
(29, 'Phụ kiện', 35, NULL, 90000, 1),
(30, 'Phụ kiện', 40, NULL, 90000, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `IDCmt` int(11) NOT NULL,
  `MaKhachHang` int(11) NOT NULL,
  `LoaiSanPham` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `MaSanPham` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `NoiDung` text COLLATE utf8_vietnamese_ci NOT NULL,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`IDCmt`, `MaKhachHang`, `LoaiSanPham`, `MaSanPham`, `NoiDung`, `ThoiGian`) VALUES
(1, 2, 'Điện Thoại', '1', 'Sản phẩm được bảo hành 24 tháng phải không ad?', '2019-11-23 21:28:26'),
(2, 3, 'Điện Thoại', '1', 'Điện thoại này chơi được liên quân không ad?', '2019-11-23 21:30:30'),
(3, 1, 'Điện Thoại', '1', 'Ai dùng điện thoại này cho mình hỏi camera tốt không vậy.', '2019-11-23 21:32:06'),
(4, 2, 'Điện Thoại', '1', 'Sạc nhanh pin khá trâu .. Game ổn , nói chung giá vậy đừng đòi hỏi thêm', '2019-11-23 21:39:31'),
(5, 3, 'Điện Thoại', '1', 'Ko có j để soi vs smartphone giá tầm này... Quá tuyệt...', '2019-11-23 21:40:05'),
(6, 2, 'Điện Thoại', '1', 'Mới mua được vài tuần có một số đánh giá như sau. Pin khá trâu thoải mái dùng 1 ngày với mình, mình dùng khá nhiều. Màn hình chưa được ưng ý, nhưng trong tầm giá thì không đòi hỏi thêm. Game khá ổn lqm cài max trong điều kiện máy cho phép mà chưa thấy giật lag. Loa cũng kha to, không như mấy bạn nhận xét. Cam thì mình cũng không quan trọng vì mình cũng ít chụp ảnh chỉ dùng cho công việc nên thấy như vậy là ổn rồi, hơi hơi ảo tý. Mình chỉ không thích là công USB type - C như không chặt lắm, rất khó chịu. Không biết do cấu tạo chung của loại cổng này hay do lỗi của máy mình, hay do cáp thì mình chưa liên hệ ktv kiểm tra nên mình chưa đánh giá sâu. Kết: thấy máy việt mà giá hợp lý nên mua về dùng, nhưng bất ngờ về chất lượng máy trong tầm giá', '2019-11-23 21:40:39'),
(7, 3, 'Điện Thoại', '1', 'Pin ổn,chơi game nặng khá mượt và máy không quá nóng. Điểm trừ là vân tay quá kém. Nói chung là ổn trong mức giá hiện tại. Chứ cao hơn thì không được.', '2019-11-23 21:41:01'),
(8, 2, 'Điện Thoại', '1', 'Mọi người cho hỏi con này với con  oppo a5s thì con nào chơi game tốt hơn vậy.', '2019-11-23 21:44:25'),
(9, 1, 'Phụ kiện', '2', 'Sản phẩm được bảo hành 24 tháng phải không ad?', '2019-11-27 10:03:46'),
(10, 1, 'Phụ kiện', '2', 'Điện thoại này chơi được liên quân không ad?', '2019-11-27 10:04:36'),
(22, 1, 'Điện thoại', '19', 'Điện thoại đẹp thếhay', '2019-12-04 09:25:43'),
(23, 1, 'Điện thoại', '19', 'hay<br/>ho', '2019-12-04 09:33:05'),
(24, 1, 'Điện thoại', '28', 'hay <br>lắm', '2019-12-04 09:36:53'),
(25, 1, 'Điện thoại', '19', 'hay thế', '2019-12-04 09:51:45'),
(26, 1, 'Điện thoại', '13', 'Máy này còn không admin ơi?', '2019-12-04 15:38:24'),
(27, 6, 'Điện thoại', '28', 'Sản phẩm này còn không bạn', '2019-12-16 03:41:06'),
(28, 6, 'Phụ kiện', '41', 'Sản phẩm rất tốt', '2019-12-16 03:46:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment2`
--

CREATE TABLE `comment2` (
  `IDCmt2` int(11) NOT NULL,
  `IDNguoiDung` int(11) NOT NULL,
  `IDCmt` int(11) NOT NULL,
  `NoiDung` text COLLATE utf8_vietnamese_ci NOT NULL,
  `ThoiGian` timestamp NOT NULL DEFAULT current_timestamp(),
  `LoaiSanPham` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `comment2`
--

INSERT INTO `comment2` (`IDCmt2`, `IDNguoiDung`, `IDCmt`, `NoiDung`, `ThoiGian`, `LoaiSanPham`) VALUES
(1, 1, 1, 'Đúng vậy bạn.', '2019-11-23 21:29:10', 'Điện Thoại'),
(2, 1, 2, 'Điện thoại này chơi được game Liên quân bạn nhé.', '2019-11-23 21:31:08', 'Điện Thoại'),
(3, 2, 3, 'Camera chụp ban ngày khá tốt bạn nhá.', '2019-11-23 21:33:25', 'Điện Thoại'),
(4, 3, 3, 'Chụp tốt bạn nhá', '2019-11-23 21:33:53', 'Điện Thoại'),
(5, 5, 3, 'Chụp tối không tốt lắm nhá', '2019-11-23 21:36:11', 'Điện Thoại'),
(6, 1, 8, 'Chào anh !\r\nDạ về game thì sản phẩm Vsmart Live sẽ nhỉnh hơn do được hỗ trợ con chip Snap 675 anh nhé \r\nChia sẻ cùng anh.', '2019-11-23 21:45:04', 'Điện Thoại'),
(7, 2, 8, 'Con  Vsmart Live chiến game tốt hơn bạn nhá', '2019-11-23 21:45:45', 'Điện Thoại'),
(8, 3, 8, ' Vsmart Live nhá', '2019-11-23 21:45:58', 'Điện Thoại'),
(9, 4, 8, 'Mình nghĩ là con  Vsmart Live bạn nhá', '2019-11-23 21:46:22', 'Điện thoại'),
(10, 3, 9, 'Đúng vậy bạn.', '2019-11-27 10:05:21', 'Phụ kiện'),
(11, 4, 9, 'Được bảo hành 24 tháng bạn nhé', '2019-11-27 10:07:02', 'Phụ kiện'),
(12, 2, 1, 'Hay vay ban', '2019-12-04 14:48:14', 'Phụ kiện'),
(13, 1, 10, 'Đây không phải điện thoại bạn nhá!', '2019-12-04 15:01:39', 'Phụ kiện'),
(14, 1, 26, 'Sản phẩm này bên mình còn nhiều bạn nhé', '2019-12-04 15:38:47', 'Điện thoại'),
(15, 1, 26, 'Bạn muốn mua với số lượng bao nhiêu vậy', '2019-12-04 15:39:13', 'Điện thoại'),
(16, 6, 1, 'Đúng rồi bạn', '2019-12-16 03:37:05', 'Điện thoại'),
(17, 6, 27, 'Còn bạn nhé!', '2019-12-16 03:41:22', 'Điện thoại'),
(18, 6, 28, 'Cảm ơn bạn nhiều!', '2019-12-16 03:46:43', 'Phụ kiện');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dienthoai`
--

CREATE TABLE `dienthoai` (
  `MaDienThoai` int(11) NOT NULL,
  `Hang` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `TenDienThoai` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `GiaBan` int(11) NOT NULL,
  `GiaKhuyenMai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `dienthoai`
--

INSERT INTO `dienthoai` (`MaDienThoai`, `Hang`, `TenDienThoai`, `SoLuong`, `GiaBan`, `GiaKhuyenMai`) VALUES
(1, 'Vsmart', 'Vsmart Live 6GB-64GB', 3, 7790000, 3790000),
(2, 'Samsung', 'Samsung Galaxy A50s', 50, 6990000, NULL),
(3, 'Oppo', 'Oppo A5 2020 3GB-64GB', 50, 4290000, NULL),
(4, 'Realme', 'Realme 5 3GB-64GB', 50, 3990000, 3690000),
(5, 'Samsung', 'Samsung Galaxy A20s 32GB', 50, 4390000, NULL),
(6, 'Oppo', 'OPPO Reno2 F', 50, 6990000, NULL),
(7, 'Oppo', 'OPPO A5s', 50, 3690000, NULL),
(10, 'Samsung', 'Samsung Galaxy A10s', 50, 3690000, NULL),
(11, 'Samsung', 'Samsung Galaxy A30s', 50, 6290000, NULL),
(13, 'IPhone', 'iPhone 7 Plus 32GB', 50, 12900000, 11900000),
(14, 'Samsung', 'Samsung Galaxy Note 10+', 50, 26900000, NULL),
(15, 'Realme', 'Realme C2 3GB-32GB', 50, 2990000, 2790000),
(16, 'Oppo', 'Oppo A5 2020 4GB-128GB', 50, 5290000, NULL),
(17, 'Samsung', 'Samsung Galaxy A10', 50, 3090000, NULL),
(18, 'Oppo', 'OPPO A1k', 50, 3190000, NULL),
(19, 'Samsung', 'Samsung Galaxy A70', 44, 9290000, 8790000),
(20, 'Vivo', 'Vivo Y11', 50, 2990000, NULL),
(21, 'Nokia', 'Nokia 6.1 Plus', 50, 3690000, 3390000),
(22, 'Vivo', 'Vivo V11i', 37, 5490000, 3490000),
(23, 'Vsmart', 'Vsmart Active 1+', 50, 4590000, 3790000),
(24, 'Huawei', 'Huawei Y9 (2019)', 50, 4490000, NULL),
(25, 'Xiaomi', 'Xiaomi Redmi Note 8 4GB-64GB', 48, 4990000, NULL),
(26, 'Nokia', 'Nokia 8.1', 48, 6590000, 5990000),
(27, 'Huawei', 'Huawei Nova 3i', 49, 5990000, 5390000),
(28, 'Xiaomi', 'Xiaomi Redmi Note 8 Pro 6GB-128GB', 46, 6990000, 6490000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `MADonHang` int(11) NOT NULL,
  `MaKhachHang` int(11) NOT NULL,
  `DiaChi` text COLLATE utf8_vietnamese_ci NOT NULL,
  `HoTen` char(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `SoDienThoai` char(10) COLLATE utf8_vietnamese_ci NOT NULL,
  `Email` char(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `NgayDatHang` timestamp NOT NULL DEFAULT current_timestamp(),
  `NgayChuyenHang` timestamp NULL DEFAULT NULL,
  `NgayNhanHang` timestamp NULL DEFAULT NULL,
  `TrangThai` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `GhiChu` text COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`MADonHang`, `MaKhachHang`, `DiaChi`, `HoTen`, `SoDienThoai`, `Email`, `NgayDatHang`, `NgayChuyenHang`, `NgayNhanHang`, `TrangThai`, `GhiChu`) VALUES
(26, 6, 'số 9 lê đức thọ, Quận Nam Từ Liêm, Hà Nội', 'Nguyễn Duy Tâm', '0965923824', 'ndt012399@gmail.com', '2019-12-16 03:57:59', NULL, NULL, 'Đang chờ', NULL),
(27, 6, 'số 125, Quận Tây Hồ, Hà Nội', 'Nguyễn Duy Tâm', '0965923824', 'ndt012399@gmail.com', '2019-12-16 03:59:09', NULL, NULL, 'Đang chờ', NULL),
(28, 6, 'sdfds df , Quận Thanh Xuân, Hà Nội', 'Nguyễn Duy Tâm', '0965923824', 'ndt012399@gmail.com', '2019-12-16 04:10:28', NULL, NULL, 'Đang chờ', NULL),
(29, 19, 'dgfdsg g ds, Quận Hoàng Mai, Hà Nội', 'Nguyễn Duy Tâm', '0965923824', 'ndt012399@gmail.com', '2019-12-16 04:14:46', NULL, NULL, 'Đang chờ', NULL),
(30, 19, 'hhhkjk  kjhh  j, Quận Nam Từ Liêm, Hà Nội', 'Nguyễn Duy Tâm', '0965923824', 'ndt012399@gmail.com', '2019-12-16 04:21:06', NULL, NULL, 'Đang chờ', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohang`
--

CREATE TABLE `giohang` (
  `MaGioHang` int(11) NOT NULL,
  `MaSanPham` int(11) NOT NULL,
  `LoaiSanPham` varchar(50) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `MaKhachHang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `giohang`
--

INSERT INTO `giohang` (`MaGioHang`, `MaSanPham`, `LoaiSanPham`, `MaKhachHang`) VALUES
(18, 13, 'Điện thoại', 6),
(21, 27, 'Điện thoại', 19),
(25, 18, 'Điện thoại', 19),
(26, 25, 'Phụ kiện', 19),
(27, 2, 'Điện thoại', 19);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanhdienthoai`
--

CREATE TABLE `hinhanhdienthoai` (
  `MaDT` int(11) NOT NULL,
  `DuongDan` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hinhanhdienthoai`
--

INSERT INTO `hinhanhdienthoai` (`MaDT`, `DuongDan`) VALUES
(1, '../images/phones/636993881843916699_vsmart-live-xanh-5.png'),
(1, '../images/phones/636993881844072690_vsmart-live-xanh-4.png'),
(1, '../images/phones/636993881849220393_vsmart-live-xanh-3.png'),
(1, '../images/phones/636993881844072690_vsmart-live-xanh-2.png'),
(1, '../images/phones/636993881845164627_vsmart-live-xanh-1.png'),
(2, '../images/phones/637030967816819060_ss-a50s-den-4.png.jpeg'),
(2, '../images/phones/637030967816506704_ss-a50s-den-3.png.jpeg'),
(2, '../images/phones/637030967816506704_ss-a50s-den-2.png.jpeg'),
(2, '../images/phones/637030967816819060_ss-a50s-den-1.png.jpeg'),
(3, '../images/phones/637057859884933799_oppo-a5-2020-den-5.png.jpeg'),
(3, '../images/phones/637057859885558677_oppo-a5-2020-den-4.png.jpeg'),
(3, '../images/phones/637057859885558677_oppo-a5-2020-den-3.png.jpeg'),
(3, '../images/phones/637057859885715146_oppo-a5-2020-den-2.png.jpeg'),
(3, '../images/phones/637057859885558677_oppo-a5-2020-den-1.png.jpeg'),
(4, '../images/phones/637039814616177925_realme-5-xanh-5.png.jpeg'),
(4, '../images/phones/637039814617690200_realme-5-xanh-4.png.jpeg'),
(4, '../images/phones/637039814617387906_realme-5-xanh-2.png.jpeg'),
(4, '../images/phones/637039814617047815_realme-5-xanh-3.png.jpeg'),
(4, '../images/phones/637039814617846652_realme-5-xanh-1.png.jpeg'),
(5, '../images/phones/637049168075038350_ss-a20s-den-1.png.jpeg'),
(5, '../images/phones/637049168074988336_ss-a20s-den-2.png.jpeg'),
(5, '../images/phones/637049168074798388_ss-a20s-den-4.png.jpeg'),
(5, '../images/phones/637049168074788366_ss-a20s-den-3.png.jpeg'),
(5, '../images/phones/637049168073998446_ss-a20s-den-5.png.jpeg'),
(6, '../images/phones/637063038223413617_oppo-reno2-f-xanh-1-1.png.jpeg'),
(6, '../images/phones/637063038223393681_oppo-reno2-f-xanh-2-1.png.jpeg'),
(6, '../images/phones/637060610979277330_oppo-reno2-f-xanh-3.png.jpeg'),
(6, '../images/phones/637060610978327467_oppo-reno2-f-xanh-5.png.jpeg'),
(7, '../images/phones/636930203388933145_oppo-a5s-den-2.png.jpeg'),
(7, '../images/phones/636930203385923205_oppo-a5s-den-4.png.jpeg'),
(7, '../images/phones/636930203385853205_oppo-a5s-den-1.png.jpeg'),
(7, '../images/phones/636930203385133205_oppo-a5s-den-3.png.jpeg'),
(7, '../images/phones/636930203385033205_oppo-a5s-den-5.png.jpeg'),
(8, '../images/phones/637082819704537852_iphone-11-pro-max-19.JPG'),
(8, '../images/phones/637082819454125898_iphone-11-pro-max-2.JPG'),
(8, '../images/phones/637082819453145929_iphone-11-pro-max-5.JPG'),
(8, '../images/phones/637082819452806776_iphone-11-pro-max-7.JPG'),
(8, '../images/phones/637037687765081535_11-pro-max-vang.png.jpeg'),
(9, '../images/phones/637082819796891143_iphone-11-pro-max-18.JPG'),
(9, '../images/phones/637037687763926758_11-pro-max-xanh.png.jpeg'),
(11, '../images/phones/637027741626632925_ss-a30s-den-1.png.jpeg'),
(11, '../images/phones/637027741626632925_ss-a30s-den-2.png.jpeg'),
(11, '../images/phones/637027741626320955_ss-a30s-den-3.png.jpeg'),
(12, '../images/phones/s1r.png'),
(12, '../images/phones/iphone-11-red-2-400x460.png'),
(13, '../images/phones/apple-iphone-7-plus-1-400x460.png'),
(13, '../images/phones/636836615184176790_ip7-plus-den-3.png.jpeg'),
(13, '../images/phones/636836615184176790_ip7-plus-den-4.png.jpeg'),
(13, '../images/phones/636836615183864836_ip7-plus-den-5.png.jpeg'),
(14, '../images/phones/637008702547566121_SS-note-10-pl-glow-1-1.png.jpeg'),
(14, '../images/phones/637008691896256121_SS-note-10-pl-glow-2.png.jpeg'),
(14, '../images/phones/637008691896296121_SS-note-10-pl-glow-4.png.jpeg'),
(14, '../images/phones/637008691896296121_SS-note-10-pl-glow-3.png.jpeg'),
(14, '../images/phones/637008691895586121_SS-note-10-pl-glow-5.png.jpeg'),
(15, '../images/phones/636952659466260206_realme-c2-den-1-1.png.jpeg'),
(15, '../images/phones/636952659466260206_realme-c2-den-2-1.png.jpeg'),
(15, '../images/phones/636941170640232215_realme-c2-den-3.png.jpeg'),
(15, '../images/phones/636952659466260206_realme-c2-den-4-1.png.jpeg'),
(15, '../images/phones/636941170640062232_realme-c2-den-5.png.jpeg'),
(16, '../images/phones/637057859885558677_oppo-a5-2020-den-1.png.jpeg'),
(16, '../images/phones/637057859885715146_oppo-a5-2020-den-2.png.jpeg'),
(16, '../images/phones/637057859885558677_oppo-a5-2020-den-3.png.jpeg'),
(16, '../images/phones/637057859885558677_oppo-a5-2020-den-4.png.jpeg'),
(16, '../images/phones/637057859884933799_oppo-a5-2020-den-5.png.jpeg'),
(17, '../images/phones/636933637955357473_samsung-galaxy-a10-den-1.png.jpeg'),
(17, '../images/phones/636933637955347473_samsung-galaxy-a10-den-2.png.jpeg'),
(17, '../images/phones/636933637955247473_samsung-galaxy-a10-den-3.png.jpeg'),
(18, '../images/phones/636943826665822425_oppo-a1k-den-1.png.jpeg'),
(18, '../images/phones/636943826662332425_oppo-a1k-den-2.png.jpeg'),
(18, '../images/phones/636943826665352425_oppo-a1k-den-3.png.jpeg'),
(19, '../images/phones/636907473389115737_samsung-galaxy-a70-xanh-1.png.jpeg'),
(19, '../images/phones/636907473389085737_samsung-galaxy-a70-xanh-2.png.jpeg'),
(19, '../images/phones/636907473385515737_samsung-galaxy-a70-xanh-3.png.jpeg'),
(20, '../images/phones/637069295775630500_vivo-y11-xanh-1.png.jpeg'),
(20, '../images/phones/637069295775480620_vivo-y11-xanh-2.png.jpeg'),
(20, '../images/phones/637069295775370648_vivo-y11-xanh-3.png.jpeg'),
(20, '../images/phones/637069295775680534_vivo-y11-xanh-4.png.jpeg'),
(20, '../images/phones/637069295774065724_vivo-y11-xanh-5.png.jpeg'),
(21, '../images/phones/636737414993121438_nokia6Plus-xanh-1.jpg'),
(21, '../images/phones/636737264642517996_nokia6Plus-xanh-3.jpg'),
(21, '../images/phones/636737414993426411_nokia6Plus-xanh-2.jpg'),
(22, '../images/phones/636728888019871409_vivo-v11i-tim-0.jpg'),
(22, '../images/phones/636728888019746419_vivo-v11i-tim-1.jpg'),
(22, '../images/phones/636728888019246451_vivo-v11i-tim-3.jpg'),
(22, '../images/phones/636728888019946403_vivo-v11i-tim-2.jpg'),
(23, '../images/phones/636801168764977606_vsmart-active1-plus-hong-1.png.jpeg'),
(23, '../images/phones/636800617664765208_vsmart-active1-plus-hong-2.png.jpeg'),
(23, '../images/phones/636800617664765208_vsmart-active1-plus-hong-3.png.jpeg'),
(23, '../images/phones/636800617663913232_vsmart-active1-plus-hong-4.png.jpeg'),
(24, '../images/phones/636864401747926277_huawei-y9-2019-blue-1.png.jpeg'),
(24, '../images/phones/636864411331737062_huawei-y9-2019-blue-5.png.jpeg'),
(24, '../images/phones/636753723947419339_huawei-y9-2019-blue-.jpg'),
(24, '../images/phones/636864401747448292_huawei-y9-2019-blue-3.png.jpeg'),
(24, '../images/phones/636864411331581069_huawei-y9-2019-blue-4.png.jpeg'),
(25, '../images/phones/637060410960077373_xiaomi-redmi-note-8-xanh-1.png.jpeg'),
(25, '../images/phones/637060410959767458_xiaomi-redmi-note-8-xanh-2.png.jpeg'),
(25, '../images/phones/637060410959487455_xiaomi-redmi-note-8-xanh-3.png.jpeg'),
(25, '../images/phones/637060410960077373_xiaomi-redmi-note-8-xanh-4.png.jpeg'),
(26, '../images/phones/636809860721137664_nokia81-xanh-1.png.jpeg'),
(26, '../images/phones/636809860720577720_nokia81-xanh-3.png.jpeg'),
(26, '../images/phones/636809863167244928_nokia81-xanh-4.png.jpeg'),
(27, '../images/phones/636675937265268603_nova3i-den-1.jpg'),
(27, '../images/phones/636675937265268603_nova3i-den-2.jpg'),
(27, '../images/phones/636675937265268603_nova3i-den-4.jpg'),
(27, '../images/phones/636675937265268603_nova3i-den-3.jpg'),
(28, '../images/phones/637060441292208256_xiaomi-redmi-note-8-pro-den-1.png.jpeg'),
(28, '../images/phones/637060441292308282_xiaomi-redmi-note-8-pro-den-2.png.jpeg'),
(28, '../images/phones/637060441290718374_xiaomi-redmi-note-8-pro-den-3.png.jpeg'),
(28, '../images/phones/637060465257853242_xiaomi-redmi-note-8-pro-den-4.png.jpeg'),
(28, '../images/phones/637060465256933289_xiaomi-redmi-note-8-pro-den-5.png.jpeg'),
(3, '../images/phones/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-add-600x600.jpg'),
(3, '../images/phones/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-1-1-fix3.jpg'),
(3, '../images/phones/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-3-1-fix2.jpg'),
(3, '../images/phones/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-2-1.jpg'),
(3, '../images/phones/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-4-1.jpg'),
(9, '../images/phones/cap-micro-1m-esaver-ds118br-tb-avatar-1-fix-600x600.jpg'),
(9, '../images/phones/cap-micro-usb-1m-esaver-ds118-tb-xanh-duong-1-1.jpg'),
(18, '../images/phones/tai-nghe-ep-awei-q7ni-1-2-600x600.jpg'),
(18, '../images/phones/tai-nghe-ep-awei-q7ni9.jpg'),
(18, '../images/phones/tai-nghe-ep-awei-q7ni8.jpg'),
(18, '../images/phones/tai-nghe-ep-awei-q7ni2.jpg'),
(18, '../images/phones/tai-nghe-ep-awei-q7ni5.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanhphukien`
--

CREATE TABLE `hinhanhphukien` (
  `MaPhuKien` int(11) NOT NULL,
  `DuongDan` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hinhanhphukien`
--

INSERT INTO `hinhanhphukien` (`MaPhuKien`, `DuongDan`) VALUES
(1, '../images/accessories/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg'),
(1, '../images/accessories/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-1.jpg'),
(1, '../images/accessories/pin-sac-du-phong-7500mah-esaver-la-a33-den-2-1.jpg'),
(1, '../images/accessories/pin-sac-du-phong-7500mah-esaver-la-a33-den-3-1.jpg'),
(1, '../images/accessories/pin-sac-du-phong-7500mah-esaver-la-a33-den-4-1.jpg'),
(2, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg'),
(2, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-2-1-fixx2.jpg'),
(2, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-2-1-fixx.jpg'),
(2, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-3-1.jpg'),
(2, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy.jpg'),
(2, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-4-1.jpg'),
(3, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-add-600x600.jpg'),
(3, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-1-1-fix3.jpg'),
(3, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-3-1-fix2.jpg'),
(3, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-2-1.jpg'),
(3, '../images/accessories/pin-sac-du-phong-10000mah-xmobile-gram-4-dull-dog-xanh-la-4-1.jpg'),
(4, '../images/accessories/polymer-10000-mah-type-c-esaver-pj-jp106s-avatar-1-600x600.jpg'),
(4, '../images/accessories/pin-sac-du-phong-polymer-10000-mah-type-c-esaver-p-1.jpg'),
(4, '../images/accessories/pin-sac-du-phong-polymer-10000-mah-type-c-esaver-p-7.jpg'),
(4, '../images/accessories/polymer-10000-mah-type-c-esaver-pj-jp106s-fixx.jpg'),
(4, '../images/accessories/pin-sac-du-phong-polymer-10000-mah-type-c-esaver-p-2.jpg'),
(4, '../images/accessories/pin-sac-du-phong-polymer-10000-mah-type-c-esaver-p-8.jpg'),
(5, '../images/accessories/sac-du-phong-polymer-10000mah-qc-3-evalu-pa-f1-air-anh-dai-dien-600x600.jpg'),
(5, '../images/accessories/sac-du-phong-polymer-10000mah-qc-3-evalu-pa-f1-air-11.jpg'),
(5, '../images/accessories/sac-du-phong-polymer-10000mah-qc-3-evalu-pa-f1-air-16.jpg'),
(5, '../images/accessories/sac-du-phong-polymer-10000mah-qc-3-evalu-pa-f1-air-13.jpg'),
(5, '../images/accessories/sac-du-phong-polymer-10000mah-qc-3-evalu-pa-f1-air-pin.jpg'),
(5, '../images/accessories/sac-du-phong-polymer-10000mah-qc-3-evalu-pa-f1-air-17.jpg'),
(5, '../images/accessories/sac-du-phong-polymer-10000mah-qc-3-evalu-pa-f1-air-15-1.jpg'),
(6, '../images/accessories/sac-du-phong-polymer-10000mah-xmobile-atela-10-add-600x600.jpg'),
(6, '../images/accessories/sac-du-phong-polymer-10000mah-xmobile-atela-10-den-fix3.jpg'),
(6, '../images/accessories/sac-du-phong-polymer-10000mah-xmobile-atela-10-den-2-1.jpg'),
(6, '../images/accessories/sac-du-phong-polymer-10000mah-xmobile-atela-10-den-3-1.jpg'),
(6, '../images/accessories/sac-du-phong-polymer-10000mah-xmobile-atela-10-den-fix1.jpg'),
(7, '../images/accessories/sac-dtdd-pin-sac-du-phong-19000mah-xmobile-gram-6s-trang-600x600.jpg'),
(7, '../images/accessories/pin-sac-du-phong-19000mah-xmobile-gram-6s-trang-11.jpg'),
(7, '../images/accessories/pin-sac-du-phong-19000mah-xmobile-gram-6s-trang-17.jpg'),
(7, '../images/accessories/pin-sac-du-phong-19000mah-xmobile-gram-6s-trang-122-fixx.jpg'),
(7, '../images/accessories/pin-sac-du-phong-19000mah-xmobile-gram-6s-trang-18.jpg'),
(8, '../images/accessories/cap-micro-1m-xmobile-paladin-bac-up-1-fix-600x600.jpg'),
(8, '../images/accessories/cap-micro-1m-xmobile-paladin-bac-23.jpg'),
(8, '../images/accessories/cap-micro-1m-xmobile-paladin-bac-26.jpg'),
(8, '../images/accessories/cap-micro-1m-xmobile-paladin-bac-25.jpg'),
(9, '../images/accessories/cap-micro-1m-esaver-ds118br-tb-avatar-1-fix-600x600.jpg'),
(9, '../images/accessories/cap-micro-usb-1m-esaver-ds118-tb-xanh-duong-1-1.jpg'),
(9, '../images/accessories/cap-micro-usb-1m-esaver-ds118-tb-xanh-duong-1-2.jpg'),
(9, '../images/accessories/cap-micro-usb-1m-esaver-ds118-tb-xanh-duong-1-6.jpg'),
(10, '../images/accessories/cap-micro-1m-evalu-ltm-01-12-600x600.jpg'),
(10, '../images/accessories/cap-micro-1m-evalu-ltm-01-do-1-4.jpg'),
(10, '../images/accessories/cap-micro-1m-evalu-ltm-01-do-1-5.jpg'),
(10, '../images/accessories/cap-micro-1m-evalu-ltm-01-do-1-6.jpg'),
(10, '../images/accessories/cap-micro-1m-evalu-ltm-01-do-1-1.jpg'),
(11, '../images/accessories/cap-micro-2m-xmobile-ltmp-2006-xanh-navy-1-fix1-600x600.jpg'),
(11, '../images/accessories/cap-micro-2m-xmobile-ltmp-2006-xanh-navy-1-1.jpg'),
(11, '../images/accessories/cap-micro-2m-xmobile-ltmp-2006-xanh-navy-2-1.jpg'),
(11, '../images/accessories/cap-micro-2m-xmobile-ltmp-2006-xanh-navy-3-1.jpg'),
(11, '../images/accessories/cap-micro-2m-xmobile-ltmp-2006-xanh-navy-1-fix2.jpg'),
(11, '../images/accessories/cap-micro-2m-xmobile-ltmp-2006-xanh-navy-1-fix3.jpg'),
(11, '../images/accessories/cap-micro-2m-xmobile-ltmp-2006-xanh-navy-1-fix4.jpg'),
(12, '../images/accessories/cap-lightning-1m-evalu-spanker-b-do-den-1-fixx1-600x600.jpg'),
(12, '../images/accessories/cap-lightning-1m-evalu-spanker-b-do-den-1-fixx4.jpg'),
(12, '../images/accessories/cap-lightning-1m-evalu-spanker-b-do-den5.jpg'),
(12, '../images/accessories/cap-lightning-1m-evalu-spanker-b-do-den-1-fixx2.jpg'),
(12, '../images/accessories/cap-lightning-1m-evalu-spanker-b-do-den-1-fixx3.jpg'),
(12, '../images/accessories/cap-lightning-1m-evalu-spanker-b-do-den4.jpg'),
(13, '../images/accessories/tai-nghe-ep-awei-q27hi-den-1-600x600.jpg'),
(13, '../images/accessories/tai-nghe-ep-awei-q27hi-den2.jpg'),
(13, '../images/accessories/tai-nghe-ep-awei-q27hi-den5.jpg'),
(13, '../images/accessories/tai-nghe-ep-awei-q27hi-den4-2.jpg'),
(13, '../images/accessories/tai-nghe-ep-awei-q27hi-den1.jpg'),
(13, '../images/accessories/tai-nghe-ep-awei-q27hi-den3.jpg'),
(14, '../images/accessories/tai-nghe-ep-awei-q29hi-den-hong-1-600x600.jpg'),
(14, '../images/accessories/tai-nghe-ep-awei-q29hi-den-hong2.jpg'),
(14, '../images/accessories/tai-nghe-ep-awei-q29hi-den-hong3.jpg'),
(14, '../images/accessories/tai-nghe-ep-awei-q29hi-den-hong5-2.jpg'),
(14, '../images/accessories/tai-nghe-ep-awei-q29hi-den-hong1.jpg'),
(14, '../images/accessories/tai-nghe-ep-awei-q29hi-den-hong4.jpg'),
(15, '../images/accessories/tai-nghe-ep-kanen-ip-219-aqua-xam-ava-600x600.jpg'),
(15, '../images/accessories/tai-nghe-ep-kanen-ip-219-aqua-xam-1-4.jpg'),
(15, '../images/accessories/tai-nghe-ep-kanen-ip-219-aqua-xam-3-1.jpg'),
(15, '../images/accessories/tai-nghe-ep-kanen-ip-219-aqua-xam-2-4.jpg'),
(15, '../images/accessories/tai-nghe-ep-kanen-ip-219-aqua-xam-4.jpg'),
(15, '../images/accessories/tai-nghe-ep-kanen-ip-219-aqua-xam-5.jpg'),
(16, '../images/accessories/tai-nghe-ep-kanen-ip-218-ava-600x600.jpg'),
(16, '../images/accessories/tai-nghe-ep-kanen-ip-218-1.jpg'),
(16, '../images/accessories/tai-nghe-ep-kanen-ip-218-4.jpg'),
(16, '../images/accessories/tai-nghe-ep-kanen-ip-218-5.jpg'),
(16, '../images/accessories/tai-nghe-ep-kanen-ip-218-2-3.jpg'),
(17, '../images/accessories/tai-nghe-ep-kanen-ip-225-add-600x600.jpg'),
(17, '../images/accessories/tai-nghe-ep-kanen-ip-225-1.jpg'),
(17, '../images/accessories/tai-nghe-ep-kanen-ip-225-2.jpg'),
(17, '../images/accessories/tai-nghe-ep-kanen-ip-225-3.jpg'),
(17, '../images/accessories/tai-nghe-ep-kanen-ip-225-4.jpg'),
(17, '../images/accessories/tai-nghe-ep-kanen-ip-225-5.jpg'),
(18, '../images/accessories/tai-nghe-ep-awei-q7ni-1-2-600x600.jpg'),
(18, '../images/accessories/tai-nghe-ep-awei-q7ni9.jpg'),
(18, '../images/accessories/tai-nghe-ep-awei-q7ni8.jpg'),
(18, '../images/accessories/tai-nghe-ep-awei-q7ni2.jpg'),
(18, '../images/accessories/tai-nghe-ep-awei-q7ni5.jpg'),
(19, '../images/accessories/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg'),
(19, '../images/accessories/tai-nghe-chup-tai-kanen-ip-2090-1-1.jpg'),
(19, '../images/accessories/tai-nghe-chup-tai-kanen-ip-2090-5copy.jpg'),
(19, '../images/accessories/tai-nghe-chup-tai-kanen-ip-2090-6-2.jpg'),
(19, '../images/accessories/tai-nghe-chup-tai-kanen-ip-2090-4.jpg'),
(19, '../images/accessories/tai-nghe-chup-tai-kanen-ip-2090-2-1.jpg'),
(20, '../images/accessories/tai-nghe-bluetooth-roman-s205-xanh-600x600.jpg'),
(20, '../images/accessories/tai-nghe-bluetooth-roman-s205-xanh-1-1.jpg'),
(20, '../images/accessories/tai-nghe-bluetooth-roman-s205-xanh-2-1.jpg'),
(20, '../images/accessories/tai-nghe-bluetooth-roman-s205-xanh-4-1.jpg'),
(20, '../images/accessories/tai-nghe-bluetooth-roman-s205-xanh-5-1.jpg'),
(21, '../images/accessories/loa-bluetooth-icutes-mb-m818-cun-avatar-2-600x600.jpg'),
(21, '../images/accessories/loa-bluetooth-icutes-mb-m818-cun-11.jpg'),
(21, '../images/accessories/loa-bluetooth-icutes-mb-m818-cun-12.jpg'),
(21, '../images/accessories/loa-bluetooth-icutes-mb-m818-cun-19.jpg'),
(21, '../images/accessories/loa-bluetooth-icutes-mb-m818-cun-17.jpg'),
(21, '../images/accessories/loa-bluetooth-icutes-mb-m818-cun-18.jpg'),
(22, '../images/accessories/loa-bluetooth-fenda-w5-avatar-5-600x600.jpg'),
(22, '../images/accessories/loa-bluetooth-fenda-w5--1.jpg'),
(22, '../images/accessories/loa-bluetooth-fenda-w5--2.jpg'),
(22, '../images/accessories/loa-bluetooth-fenda-w5--4.jpg'),
(23, '../images/accessories/loa-bluetooth-mozard-h8030d-den-add-1-600x600-1-600x600.jpg'),
(23, '../images/accessories/loa-bluetooth-mozard-h8030d-den-1-2.jpg'),
(23, '../images/accessories/loa-bluetooth-mozard-h8030d-den-2-fixx.jpg'),
(23, '../images/accessories/loa-bluetooth-mozard-h8030d-den-4-1.jpg'),
(23, '../images/accessories/loa-bluetooth-mozard-h8030d-den.jpg'),
(23, '../images/accessories/loa-bluetooth-mozard-h8030d-den-3-1.jpg'),
(24, '../images/accessories/loa-bluetooth-esaver-s12b-2-den-avatar-2-600x600.jpg'),
(24, '../images/accessories/loa-bluetooth-esaver-s12b-2-den-12.jpg'),
(24, '../images/accessories/loa-bluetooth-esaver-s12b-2-den-12.jpg'),
(24, '../images/accessories/loa-bluetooth-esaver-s12b-2-den-14.jpg'),
(25, '../images/accessories/the-nho-microsd-8gb-class-4-9-600x600.jpg'),
(25, '../images/accessories/the-nho-microsd-8gb-class-4--1.jpg'),
(25, '../images/accessories/the-nho-microsd-8gb-class-4--2.jpg'),
(25, '../images/accessories/the-nho-microsd-8gb-class-4--3.jpg'),
(26, '../images/accessories/the-nho-microsd-16gb-class-10-10-600x600.jpg'),
(26, '../images/accessories/the-nho-microsd-16gb-class-10--1.jpg'),
(26, '../images/accessories/the-nho-microsd-16gb-class-10--7.jpg'),
(26, '../images/accessories/the-nho-microsd-16gb-class-10--4.jpg'),
(26, '../images/accessories/the-nho-microsd-16gb-class-10--6.jpg'),
(27, '../images/accessories/the-nho-microsd-32gb-class-10-3-600x600.jpg'),
(27, '../images/accessories/the-nho-microsd-32gb-class-10--1.jpg'),
(27, '../images/accessories/the-nho-microsd-32gb-class-10--3.jpg'),
(27, '../images/accessories/the-nho-microsd-32gb-class-10--fix.jpg'),
(27, '../images/accessories/the-nho-microsd-32gb-class-10--5.jpg'),
(28, '../images/accessories/the-nho-microsd-64gb-class-10u1-7-600x600.jpg'),
(28, '../images/accessories/the-nho-microsd-64gb-class-10u1--1.jpg'),
(28, '../images/accessories/the-nho-microsd-64gb-class-10u1--5.jpg'),
(29, '../images/accessories/the-nho-microsd-128gb-class-10-uhs1-9-600x600.jpg'),
(29, '../images/accessories/the-nho-microsd-128gb-class-10-uhs1-1-3.jpg'),
(29, '../images/accessories/the-nho-microsd-128gb-class-10-uhs1-4-fix.jpg'),
(29, '../images/accessories/the-nho-microsd-128gb-class-10-uhs1-5-1.jpg'),
(30, '../images/accessories/gay-chup-anh-mini-osmia-ow3-1-1-600x600.jpg'),
(30, '../images/accessories/gay-chup-anh-mini-osmia-ow3--1.jpg'),
(30, '../images/accessories/gay-chup-anh-mini-osmia-ow3--2.jpg'),
(30, '../images/accessories/gay-chup-anh-mini-osmia-ow3--3.jpg'),
(30, '../images/accessories/gay-chup-anh-mini-osmia-ow3--4.jpg'),
(30, '../images/accessories/gay-chup-anh-mini-osmia-ow3--5.jpg'),
(31, '../images/accessories/gay-chup-anh-mini-cosano-cw1-ava-600x600.jpg'),
(31, '../images/accessories/gay-chup-anh-mini-cosano-cw1--1.jpg'),
(31, '../images/accessories/gay-chup-anh-mini-cosano-cw1--2.jpg'),
(31, '../images/accessories/gay-chup-anh-mini-cosano-cw1--3.jpg'),
(31, '../images/accessories/gay-chup-anh-mini-cosano-cw1--4.jpg'),
(32, '../images/accessories/gay-chup-anh-xmobile-csa003-kitty-hong-1-17-600x600.jpg'),
(32, '../images/accessories/gay-chup-anh-xmobile-csa003-kitty-hong-1-16.jpg'),
(32, '../images/accessories/gay-chup-anh-xmobile-csa003-kitty-hong-3-7.jpg'),
(32, '../images/accessories/gay-chup-anh-xmobile-csa003-kitty-hong-4-3.jpg'),
(33, '../images/accessories/gay-chup-anh-bluetooth-tripod-xmobile-k06-den-1-600x600.jpg'),
(33, '../images/accessories/gay-chup-anh-bluetooth-tripod-xmobile-k06-den-16.jpg'),
(33, '../images/accessories/gay-chup-anh-bluetooth-tripod-xmobile-k06-den.jpg'),
(33, '../images/accessories/gay-chup-anh-bluetooth-tripod-xmobile-k06-den-5-2.jpg'),
(34, '../images/accessories/op-lung-iphone-xs-max-nhua-deo-tskb415-xinh-dep-1-600x600.jpg'),
(35, '../images/accessories/op-lung-iphone-xs-max-nhua-deo-tks515-tricolor-1-600x600.jpg'),
(36, '../images/accessories/op-lung-iphone-7-8-plus-nhua-deo-tskb517-gau-tho-1-600x600.jpg'),
(37, '../images/accessories/op-lung-iphone-7-8-plus-nhua-deo-water-tskb089-no-1-600x600.jpg'),
(38, '../images/accessories/op-lung-iphone-7-8-plus-nhua-deo-water-tskb089-yes-1-600x600.jpg'),
(39, '../images/accessories/op-lung-oppo-a9-deo-tks-515-meeker-tska288-tho-1-600x600.jpg'),
(40, '../images/accessories/op-lung-oppo-a9-deo-new-jelly-tks-511-meeker-den-1-600x600.jpg'),
(41, '../images/accessories/op-lung-oppo-a9-deo-luggage-tks-510-xanh-olive-1-600x600.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `MaNguoiDung` int(11) NOT NULL,
  `TenNguoiDung` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `TenDangNhap` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `SDT` varchar(11) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Password` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`MaNguoiDung`, `TenNguoiDung`, `TenDangNhap`, `Email`, `SDT`, `Password`, `Level`) VALUES
(1, 'Đặng Văn Nguyễn', 'nguyendv99', 'nguyendv99@gmail.com', '0989123456', '88888888', 1),
(2, 'Nguyễn Đặng', 'nguyend', 'nguyend@gmail.com', '0989123455', '12345678', 1),
(3, 'Nguyễn Đặng Văn', 'nguyendv', 'nguyen@vl.com', '0989123454', '12345678', 1),
(4, 'Văn Nguyễn Đặng', 'vndang', 'vndang@vl.com', '0989123453', '12345678', 2),
(5, 'Văn Văn Văn', 'vanvanvan', 'vvvan@vl.com', '0989123457', '12345678', 2),
(6, NULL, 'tam0123', NULL, NULL, '17021009', 1),
(17, NULL, 'ngu', NULL, NULL, '8888', 1),
(18, NULL, 'tam01231999', NULL, NULL, '1234567890', 1),
(19, NULL, 'nguyendv9999', NULL, NULL, '000000000', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phukien`
--

CREATE TABLE `phukien` (
  `MaPhuKien` int(11) NOT NULL,
  `LoaiPhuKien` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `TenPhuKien` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `GiaBan` int(11) NOT NULL,
  `GiaKhuyenMai` int(11) DEFAULT NULL,
  `Hang` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ThongTin` text COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `phukien`
--

INSERT INTO `phukien` (`MaPhuKien`, `LoaiPhuKien`, `TenPhuKien`, `SoLuong`, `GiaBan`, `GiaKhuyenMai`, `Hang`, `ThongTin`) VALUES
(1, 'Sạc dự phòng', 'Pin sạc dự phòng 7.500 mAh eSaver LA A33 Đen', 36, 400000, 260000, 'eSaver', 'Thiết kế gọn gàng, màu sắc đẹp mắt.\r\nDễ dàng kiểm tra lại được dung lượng pin còn lại trong sạc.\r\nSử dụng lõi pin Li-Ion an toàn.\r\nSạc được cho mọi điện thoại và máy tính bảng.\r\nBộ sản phẩm gồm: pin sạc.'),
(2, 'Sạc dự phòng', 'Pin sạc dự phòng 10.000 mAh Xmobile Gram 4 Xanh Navy', 50, 500000, 375000, 'Xmobile', 'Thiết kế đẹp mắt, nhỏ gọn dễ mang theo.\r\nSạc 4 lần thiết bị pin dưới 1.500 mAh, 2 lần dưới 3.500 mAh.\r\nSử dụng lõi pin Li-Ion an toàn.\r\nSạc được cho mọi điện thoại và máy tính bảng.\r\nBộ sản phẩm gồm: pin sạc.'),
(3, 'Sạc dự phòng', 'Pin sạc dự phòng 10.000 mAh Xmobile Gram 4 Dull Dog Xanh lá', 50, 500000, 400000, 'Xmobile', 'Thiết kế đẹp mắt, màu sắc trẻ trung, nhỏ gọn dễ mang theo.\r\nSạc 4 lần thiết bị pin dưới 1.500 mAh, 2 lần dưới 3.500 mAh.\r\nSử dụng lõi pin Li-Ion an toàn.\r\nSạc được cho mọi điện thoại và máy tính bảng.\r\nBộ sản phẩm gồm: pin sạc.'),
(4, 'Sạc dự phòng', 'Pin sạc dự phòng Polymer 10.000 mAh Type C eSaver PJ JP106S', 50, 600000, 450000, 'eSaver', 'Thiết kế vỏ nhôm chắc chắn, màu sắc trang nhã.\r\nSử dụng lõi pin Polymer chất lượng cao, tăng khả năng dùng được lâu và an toàn.\r\nTrang bị thêm cổng ra/vào Type-C thích hợp cho các thiết bị có cổng kết nối Type-C.\r\nTương thích với nhiều thiết bị điện thoại, máy tính bảng,...'),
(5, 'Sạc dự phòng', 'Pin sạc dự phòng Polymer 10.000 mAh QC 3.0 eValu PA F1 Air Nhôm Bạc', 50, 650000, 500000, 'eValu', 'Thiết kế gọn nhẹ, dễ dàng mang theo và cất giữ.\r\n2 cổng sạc ra với chuẩn Quick Charge 3.0 rất nhanh.\r\nDung lượng pin 10.000 mAh sạc được nhiều lần.\r\nSạc được cho tất cả điện thoại và máy tính bảng.\r\nDễ dàng xem dung lượng pin còn lại bằng đèn Led.'),
(6, 'Sạc dự phòng', 'Pin sạc dự phòng Polymer 10.000 mAh Xmobile Atela 10 Nhôm Xám', 50, 650000, 460000, 'Xmobile', 'Thiết kế đơn giản, cứng cáp, nhỏ gọn dễ mang theo\r\nSử dụng lõi pin Polymer an toàn.\r\nĐèn Led nhận biết dung lượng pin còn lại.\r\nSạc được cho mọi điện thoại và máy tính bảng.\r\nBộ sản phẩm gồm: pin sạc.'),
(7, 'Sạc dự phòng', 'Pin sạc dự phòng 19.000 mAh Xmobile Gram 6S Trắng', 50, 950000, 750000, 'Xmobile', 'Tích hợp đèn Led hiển thị mức pin khả dụng.\r\nSạc 9 lần thiết bị pin dưới 1.500 mAh, 4.5 lần dưới 3.500 mAh.\r\nSạc được cho mọi điện thoại và máy tính bảng.\r\nSử dụng lõi pin LG, an toàn và chất lượng khi sử dụng.\r\nBộ sản phẩm gồm: pin sạc.'),
(8, 'Cáp sạc', 'Cáp Micro 1 m Xmobile Paladin', 50, 80000, 55000, 'Xmobile', 'Dùng được cho các thiết bị dùng cổng Micro USB.\r\nDùng để chép dữ liệu hay sạc pin (dùng với adapter riêng).\r\nDây dài 1 m thoải mái vừa sạc vừa dùng điện thoại.'),
(9, 'Cáp sạc', 'Dây cáp Micro USB 1 m e.Saver DS118-TB\r\n', 50, 80000, 50000, 'eSaver', 'Chất lượng tương đương với hàng chính hãng.\r\nDùng để chép dữ liệu với máy tính hay sạc pin (dùng với adapter riêng).\r\nDây dài 1 m thoải mái cho bạn vừa sạc vừa sử dụng với pin sạc dự phòng.\r\nDây cáp được làm to và trơn bóng giúp không bị rối.'),
(10, 'Cáp sạc', 'Dây cáp Micro USB 1 m e.VALU LTM-01', 50, 80000, 56000, 'eValu', 'Thân dây được bảo vệ bằng sợi nilon giúp hạn chế đứt gãy.\r\nDùng được cho các thiết bị dùng cổng Micro USB.\r\nChất lượng tương đương với hàng chính hãng.\r\nDùng để chép dữ liệu hay sạc pin (dùng với adapter riêng).\r\nDây 1 m thoải mái vừa sạc vừa dùng điện thoại'),
(11, 'Cáp sạc', 'Cáp Micro 2 m Xmobile LTMP-2006 Xanh Navy', 50, 100000, 70000, 'Xmobile', 'Dùng được cho các thiết bị dùng cổng Micro USB.\r\nChất lượng tương đương với hàng chính hãng.\r\nDùng để chép dữ liệu với máy tính hay sạc pin (dùng với adapter riêng).\r\nDây dài 2 m thoải mái vừa sạc vừa sử dụng khi ổ điện ở xa.'),
(12, 'Cáp sạc', 'Cáp Lightning 1 m e.VALU Spanker B Đỏ Đen', 50, 120000, 61000, 'eValu', 'Cổng lightning dùng cho dòng iPhone 5, iPad 4 trở lên.\r\nDùng để chép dữ liệu hay sạc pin (dùng với adapter riêng).\r\nDây dài 1 m thoải mái để bạn vừa sạc vừa sử dụng khi cần thiết.'),
(13, 'Tai nghe', 'Tai nghe EP Awei Q27Hi Đen', 50, 150000, 105000, 'Awei', 'Thiết kế trẻ trung, nhỏ gọn, dễ mang theo.\r\nCó đệm cao su chống ồn, êm ái khi đeo.\r\nTương thích nhiều thiết bị có cổng 3.5mm, dây dài 1.2 m.\r\nNhận cuộc gọi, tăng giảm âm lượng, dừng/phát nhạc bằng nút bấm trên tai nghe.'),
(14, 'Tai nghe', 'Tai nghe EP Awei Q29Hi Đen Hồng', 50, 150000, 105000, 'Awei', 'Thiết kế thời trang, trẻ trung và nhỏ gọn, dễ dàng mang theo.\r\nDây dài 1.2 m, có jack cắm 3.5mm tương thích tất cả thiết bị có cổng 3.5mm.\r\nCó đệm cao su êm ái, chống ồn ngoài môi trường, đảm bảo chất lượng âm thanh.\r\nCó mic thoại, nhận cuộc gọi, tăng giảm âm lượng, dừng/phát nhạc tiện lợi bằng nút bấm.'),
(15, 'Tai nghe', 'Tai nghe nhét trong Kanen IP-219 Aqua', 50, 150000, 105000, 'Kanen', 'Tai nghe phối màu trang nhã, hợp thời trang.\r\nTương thích tốt với nhiều dòng điện thoại.\r\nTai nghe dạng nút giúp cách âm tốt với bên ngoài.\r\nCó nút ấn nhận cuộc gọi, ngừng/chơi nhạc, tăng/giảm âm lượng.\r\nDây dài 120 cm thoải mái để vừa dùng máy vừa nghe nhạc.'),
(16, 'Tai nghe', 'Tai nghe nhét trong Kanen IP-218', 50, 150000, 97000, 'Kanen', 'Tương thích tốt với nhiều dòng điện thoại.\r\nTai nghe dạng nút giúp cách âm tốt với bên ngoài.\r\nCó nút ấn nhận cuộc gọi, ngừng/chơi nhạc, tăng/giảm âm lượng.\r\nDây dài 1.2 m thoải mái để vừa dùng máy vừa nghe nhạc.'),
(17, 'Tai nghe', 'Tai nghe EP Kanen IP-225', 50, 150000, 105000, 'Kanen', 'Tai nghe phối màu trang nhã, hợp thời trang.\r\nTương thích tốt với nhiều dòng điện thoại.\r\nTai nghe dạng nút giúp cách âm tốt với bên ngoài.\r\nCó nút ấn nhận cuộc gọi, ngừng/chơi nhạc, tăng/giảm âm lượng.\r\nDây dài 120 cm thoải mái để vừa dùng máy vừa nghe nhạc.'),
(18, 'Tai nghe', 'Tai nghe nhét trong Awei Q7Ni', 50, 150000, 75000, 'Awei', 'Tương thích tốt với nhiều dòng điện thoại.\r\nTai nghe dạng nút giúp cách âm tốt với bên ngoài.\r\nCó nút ấn nhận cuộc gọi, ngừng/chơi nhạc, chuyển bài hát.\r\nDây dài 1.2 m thoải mái để vừa dùng máy vừa nghe nhạc.'),
(19, 'Tai nghe', 'Tai nghe chụp tai Kanen IP-2090', 20, 400000, 250000, 'Kanen', 'Có thể gấp gọn khi muốn cho vào trong balo.\r\nLớp đệm tai êm và dày, giúp đeo tai thoải mái và hạn chế bị rách.\r\nCó thể kéo dãn tai nghe 3 cm để vừa vặn hơn khi sử dụng.\r\nTương thích với hầu hết điện thoại hiện nay.\r\nCó nút nhận cuộc gọi, phát/dừng chơi nhạc, tăng giảm âm lượng.\r\nDây dài lên đến 1.5 m thoải mái để vừa dùng máy vừa nghe nhạc.'),
(20, 'Tai nghe', 'Tai nghe Bluetooth Roman S205 Xanh', 50, 450000, 270000, 'Roman', 'Thiết kế màu sắc trang nhã, hợp thời trang, nhỏ gọn.\r\nKhông lo tai nghe rơi khi không dùng nhờ 2 đầu hít nam châm.\r\nCông nghệ Bluetooth 4.2 cho khoảng cách kết nối tốt đến 10 m.\r\nThời gian đàm thoại 4,5 giờ, thời gian nghe nhạc 4 giờ, thời gian chờ 105 giờ, thời gian sạc 2 giờ.'),
(21, 'Loa', 'Loa Bluetooth iCutes MB-M818 Cún', 50, 300000, 260000, 'iCutes', 'Thiết kế đẹp mắt, màu sắc tươi sáng.\r\nThời gian hoạt động lên đến: 6 giờ (100% pin).\r\nSau 5 phút không sử dụng, loa tự động tắt.\r\nDung lượng pin 400 mAh 3.7V. Thời gian sạc khoảng 2 giờ.'),
(22, 'Loa', 'Loa Bluetooth Fenda W5', 50, 400000, 320000, 'Fanda', 'Loa có nhiều màu sắc bắt mắt để lựa chọn.\r\nTích hợp mic thoại để nhận, trả lời cuộc gọi tới và đi.\r\nCông nghệ Bluetooth 4.0 giúp kết nối tới hơn 10 m.\r\nÂm thanh phát ra lớn, âm thanh trầm ấm, bass đầy đủ.\r\nSử dụng lõi pin Polymer bền bỉ, không bị chai pin sau thời gian dài.\r\nDung lượng pin 600 mAh, chơi nhạc từ 3 - 5 giờ, sạc chỉ 2 giờ.'),
(23, 'Loa', 'Loa Bluetooth Mozard H8030D Đen', 50, 860000, 680000, 'Mozard', 'Thiết kế nhỏ gọn, chắc chắn, phù hợp mang theo dã ngoại.\r\nTrang bị Bluetooth 4.2 cho kết nối ổn định mượt mà đến 10 m.\r\nCông suất 10W cho trải nghiệm âm thanh sống động.\r\nDung lượng pin 2.000 mAh, thời gian sạc 3 giờ, thời gian sử dụng 3 - 5 giờ.'),
(24, 'Loa', 'Loa Bluetooth eSaver S12B-2 Đen', 50, 950000, 780000, 'eSaver', 'Kiểu dáng loa như cái trống, có dây đai tiện mang đi dã ngoại.\r\nMàn hình Led hiển thị thông tin âm lượng, số kênh...\r\nCó thể dò kênh để nghe đài radio.\r\nCông nghệ bluetooth 4.0 giúp kết nối tới hơn 10 m.\r\nCông suất loa 18W mạnh phát nhạc rất lớn, hay, không bị rè.\r\nPin 1.800 mAh, chơi nhạc 2 giờ âm lượng cao nhất, sạc đầy 4 giờ.\r\nChú ý: Dùng Adapter 5V-1A/2A để sạc cho thiết bị, Adapter trên 5.5V có thể gây ra hư hỏng cho thiết bị.'),
(25, 'Thẻ nhớ', 'Thẻ nhớ MicroSD 8 GB Class 4', 50, 150000, NULL, NULL, 'Thương hiệu uy tín trong lĩnh vực sản xuất thẻ nhớ: SanDisk, Transcend, Apacer.\r\nGiao ngẫu nhiên 1 trong 3 thương hiệu.\r\nTốc độ đọc: 30 MB/s.\r\nTốc độ ghi: 4 MB/s.\r\nTương thích tốt với điện thoại, máy tính bảng.\r\nTương thích với thiết bị có thể nhận thẻ nhớ tối đa 8 GB.\r\nChép một video 1 GB vào thẻ nhớ trong gần 4 phút rưỡi.\r\nLưu trữ hơn 2.600 bài hát (1 bài ~3 MB).'),
(26, 'Thẻ nhớ', 'Thẻ nhớ MicroSD 16 GB Class 10', 50, 220000, NULL, NULL, 'Thương hiệu uy tín trong lĩnh vực sản xuất thẻ nhớ: SanDisk, Transcend, Apacer.\r\nGiao ngẫu nhiên 1 trong 3 thương hiệu.\r\nTốc độ đọc: 30 MB/s.\r\nTốc độ ghi: 10 MB/s.\r\nTương thích tốt với điện thoại hay máy tính bảng.\r\nTương thích với thiết bị có thể nhận thẻ nhớ tối đa 16 GB.\r\nLưu trữ hơn 15.500 tấm ảnh (1 tấm ~1.5 MB).\r\nChép một video dung lượng 1 GB vào thẻ chưa tới 2 phút.'),
(27, 'Thẻ nhớ', 'Thẻ nhớ MicroSD 32 GB Class 10', 50, 300000, NULL, NULL, 'Thương hiệu uy tín trong lĩnh vực sản xuất thẻ nhớ: SanDisk, Transcend, Apacer.\r\nGiao ngẫu nhiên 1 trong 3 thương hiệu.\r\nTốc độ đọc: 30 MB/s.\r\nTốc độ ghi: 10 MB/s.\r\nTương thích tốt với điện thoại, máy tính bảng.\r\nTương thích với thiết bị có thể nhận thẻ nhớ tối đa 32 GB.\r\nChép một video dung lượng 1 GB vào thẻ chưa tới 2 phút.'),
(28, 'Thẻ nhớ', 'Thẻ nhớ MicroSD 64 GB Class 10', 50, 550000, NULL, NULL, 'Thương hiệu uy tín trong lĩnh vực sản xuất thẻ nhớ: SanDisk, Transcend, Apacer.\r\nGiao ngẫu nhiên 1 trong 3 thương hiệu.\r\nTốc độ đọc: 45 MB/s.\r\nTốc độ ghi: 10 MB/s.\r\nTương thích tốt với điện thoại hay máy tính bảng.\r\nTương thích với thiết bị có thể nhận thẻ nhớ tối đa 64 GB.\r\nChép một video dung lượng 1 GB vào thẻ chưa tới 2 phút.\r\nLưu trữ hơn 20.000 bài hát (1 bài ~3 MB).'),
(29, 'Thẻ nhớ', 'Thẻ nhớ MicroSD 128 GB Class 10', 50, 1200000, NULL, NULL, 'Thương hiệu uy tín trong lĩnh vực sản xuất thẻ nhớ: SanDisk, Transcend.\r\nGiao ngẫu nhiên 1 trong 2 thương hiệu.\r\nKèm theo Adapter chuyển đổi từ Micro SD (TF) sang SD.\r\nTốc độ đọc: 45 MB/s.\r\nTốc độ ghi: 10 MB/s.\r\nTương thích tốt với điện thoại, máy tính bảng.\r\nTương thích với thiết bị có thể nhận thẻ nhớ tối đa 128 GB.\r\nChép một video dung lượng 1 GB vào thẻ chưa tới 2 phút.\r\nLưu trữ hơn 40.000 bài hát (1 bài ~3 MB).'),
(30, 'Gậy selfie', 'Gậy chụp ảnh Mini Osmia OW3', 50, 30000, NULL, NULL, 'Tay cầm bọc lớp cao su để hạn chế trơn trượt khi dùng.\r\nThiết kế nhỏ gọn chỉ 16 cm, có 1 lỗ nhỏ để xỏ dây ở đuôi gậy.\r\nKhông cần hẹn giờ, chỉ cần ấn nút trên thân gậy để chụp ảnh.\r\nĐộ dài gậy có thể kéo dài lên đến 57 cm.\r\nĐầu gậy có thể gập mở góc 270 độ tùy bạn lựa chọn.'),
(31, 'Gậy selfie', 'Gậy chụp ảnh Mini Cosano CW1', 50, 70000, NULL, NULL, 'Tay cầm bọc lớp cao su để hạn chế trơn trượt khi dùng.\r\nThiết kế nhỏ gọn chỉ 16 cm, dễ dàng mang theo bên mình.\r\nKhông cần hẹn giờ, chỉ cần ấn nút trên thân gậy để chụp ảnh.\r\nĐộ dài gậy có thể kéo dài lên đến 60 cm.\r\nĐầu gậy có thể gập mở góc 270 độ tùy bạn lựa chọn.\r\nXuất xứ sản phẩm: Trung Quốc.'),
(32, 'Gậy selfie', 'Gậy chụp ảnh Xmobile Hình Kitty CSA003', 50, 90000, NULL, NULL, 'Thân gậy tạo kiểu với biểu tượng Kitty hồng dễ thương.\r\nĐầu gắn điện thoại lạ mắt nhưng rất dễ sử dụng.\r\nPhù hợp với nhiều dòng điện thoại dưới 6 inch khác nhau.\r\nKhông cần hẹn giờ, chỉ cần ấn nút trên thân gậy để chụp ảnh.\r\nĐộ dài gậy lên đến 100 cm, chụp nhóm nhiều người dễ hơn.\r\nĐầu gậy có thể gập mở góc 270 độ tùy bạn lựa chọn.\r\nXuất xứ sản phẩm: Trung Quốc.'),
(33, 'Gậy selfie', 'Gậy chụp ảnh Bluetooth Tripod Xmobile K06 Đen', 50, 300000, NULL, NULL, 'Gậy kết nối Bluetooth với điện thoại để chụp ảnh.\r\nThiết kế nhỏ gọn nhưng cứng cáp và vô cùng tiện lợi, thân gậy có thể kéo dài đến 63 cm.\r\nChân đế có thể mở rộng 3 chân và có thể đặt đứng giúp việc chụp ảnh dễ dàng hơn.\r\nNút chụp kết nối Bluetooth có thể tháo rời, tiện lợi sefie khi đặt điện thoại ở xa.\r\nĐầu gậy có thể xoay 360 độ, giúp chụp nhiều góc khác nhau dễ dàng.\r\nSử dụng được cho điện thoại Android 4.3 và iOS 5.1 trở lên có màn hình từ 6 inch trở xuống.'),
(34, 'Ốp lưng', 'Ốp lưng iPhone XS Max Nhựa dẻo Water printing TPU MEEKER TSKB415 Xinh đẹp', 50, 90000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy'),
(35, 'Ốp lưng', 'Ốp lưng iPhone XS Max Nhựa dẻo Sandy printing TKS-515 MEEKER Tricolor', 49, 90000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy'),
(36, 'Ốp lưng', 'Ốp lưng iPhone 7/8+ Nhựa dẻo IMD Printing MEEKER TSKB517 Gấu thỏ', 48, 90000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy'),
(37, 'Ốp lưng', 'Ốp lưng iPhone 7/8+ Nhựa dẻo Water printing TPU MEEKER TSKB089 No', 50, 90000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy'),
(38, 'Ốp lưng', '\r\nỐp lưng iPhone 7/8+ Nhựa dẻo Water printing TPU MEEKER TSKB089 Yes', 47, 90000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy'),
(39, 'Ốp lưng', 'Ốp lưng Oppo A9 Nhựa dẻo Sandy printing TKS-515 MEEKER TSKA288 Thỏ', 48, 90000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy '),
(40, 'Ốp lưng', 'Ốp lưng Oppo A9 Nhựa dẻo New jelly TKS-511 MEEKER Đen', 45, 90000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy '),
(41, 'Ốp lưng', 'Ốp lưng Oppo A9 Nhựa dẻo Luggage style TKS-510 MEEKER Xanh Olive', 50, 100000, NULL, NULL, 'Kiểu dáng thời trang và đẹp mắt\r\nThiết kế vừa vặn và ôm sát thân máy\r\nDễ dàng tháo/lắp ốp vào máy ');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`IDCmt`);

--
-- Chỉ mục cho bảng `comment2`
--
ALTER TABLE `comment2`
  ADD PRIMARY KEY (`IDCmt2`);

--
-- Chỉ mục cho bảng `dienthoai`
--
ALTER TABLE `dienthoai`
  ADD PRIMARY KEY (`MaDienThoai`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`MADonHang`);

--
-- Chỉ mục cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`MaGioHang`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `phukien`
--
ALTER TABLE `phukien`
  ADD PRIMARY KEY (`MaPhuKien`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `IDCmt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `comment2`
--
ALTER TABLE `comment2`
  MODIFY `IDCmt2` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `dienthoai`
--
ALTER TABLE `dienthoai`
  MODIFY `MaDienThoai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `MADonHang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `giohang`
--
ALTER TABLE `giohang`
  MODIFY `MaGioHang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `MaNguoiDung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `phukien`
--
ALTER TABLE `phukien`
  MODIFY `MaPhuKien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
