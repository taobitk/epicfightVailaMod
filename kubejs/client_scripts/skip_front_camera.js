// Tên file: kubejs/client_scripts/skip_front_camera.js
// Mục đích: Bỏ qua góc nhìn thứ 3 từ phía trước (THIRD_PERSON_FRONT) khi nhấn F5.

ClientEvents.tick(event => {
    // Sử dụng biến toàn cục 'Client' đại diện cho Minecraft instance trên client
    if (typeof Client !== 'undefined' && Client && Client.options) {
        let currentType = Client.options.cameraType;
        
        if (currentType) {
            let name = currentType.name();
            // Nếu phát hiện góc nhìn thứ 3 từ phía trước (THIRD_PERSON_FRONT)
            if (name === 'THIRD_PERSON_FRONT') {
                Client.options.setCameraType('FIRST_PERSON');
                console.info("[SkipCamera] Phát hiện THIRD_PERSON_FRONT. Đã ép chuyển về FIRST_PERSON.");
            }
        }
    }
});
