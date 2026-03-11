export function isF3Pressed(event) {
    if (event.key === "F3") {
        event.preventDefault(); // لمنع ظهور شريط البحث الافتراضي في المتصفح
        return true;
    }
}
