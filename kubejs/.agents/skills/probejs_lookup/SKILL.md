---
name: ProbeJS Lookup
description: Hướng dẫn Agent tra cứu định nghĩa kiểu dữ liệu được tạo bởi ProbeJS để viết mã KubeJS chính xác 100%.
---

# Hướng dẫn Tra cứu ProbeJS cho KubeJS

Kịch bản KubeJS tương tác trực tiếp với các class Java của Minecraft và các mod. Để tránh viết sai tên hàm, số lượng tham số hoặc kiểu dữ liệu, Agent cần sử dụng các file định nghĩa kiểu dữ liệu `.d.ts` được tạo tự động bởi mod **ProbeJS**.

## Vị trí Thư mục ProbeJS (Đường dẫn tương đối)
Thư mục ProbeJS nằm bên ngoài thư mục làm việc hiện tại (`kubejs/`):
*   Thư mục gốc của ProbeJS: `../.probe/`
*   Định nghĩa cho Startup Scripts: `../.probe/startup/probe-types/`
*   Định nghĩa cho Server Scripts: `../.probe/server/probe-types/`
*   Định nghĩa cho Client Scripts: `../.probe/client/probe-types/`

Các định nghĩa được gộp chung theo các gói thư mục lớn trong thư mục `packages/` tại mỗi loại script (ví dụ: `../.probe/startup/probe-types/packages/`). Các file `.d.ts` quan trọng bao gồm:
*   `dev.latvian.d.ts`: Chứa toàn bộ các class cốt lõi và các lớp chỉnh sửa của KubeJS (như `ItemEvents`, `ItemModificationEventJS`...).
*   `net.minecraft.d.ts`: Chứa tất cả các class mặc định của Minecraft (như `Item`, `ItemStack`, `LivingEntity`...).
*   `yesman.epicfight.d.ts`: Chứa các class của mod Epic Fight.
*   `net.liopyu.d.ts`: Chứa các class của mod EntityJS.

## Cách Tra cứu Khi Lập Trình
Mỗi khi cần chỉnh sửa thuộc tính trang bị, đăng ký công thức hoặc lắng nghe sự kiện, Agent **phải** thực hiện tra cứu bằng công cụ tìm kiếm:

1.  **Tìm kiếm hàm/class:** Sử dụng `grep_search` để tìm kiếm tên hàm (ví dụ: `addAttribute`, `setFoodProperties`) hoặc tên class trong thư mục `../.probe/` tương ứng.
2.  **Đọc định nghĩa kiểu:** Đọc kỹ dòng code `.d.ts` chứa định nghĩa phương thức để biết:
    *   Tên chính xác của hàm (ví dụ: `kjs$setFoodProperties` hay `setFoodProperties`).
    *   Các tham số cần truyền vào và kiểu dữ liệu của chúng.
    *   Giá trị trả về.
3.  **Áp dụng:** Viết mã KubeJS dựa trên kết quả tra cứu để đảm bảo game không bị crash khi khởi động hoặc chạy sự kiện.
