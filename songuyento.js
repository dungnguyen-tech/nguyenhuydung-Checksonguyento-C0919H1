var n = prompt("Nhập tên của bạn", '');
{
    var count = true;
    if (n <= 2) {
        count = false;
    } else if (n == 2) {
        count = true;
    } else if (n % 2 == 0) {
        count = false;
    } else {
        for (var i = 3; i < n - 1; i += 2) {
            if (n % i == 0) {
                count = false;
                break;
            }
        }
    }
    if (count == true) {
        alert(n + " là số nguyên tố ");
    } else {
        alert(n + " không phải là số nguyên tố ");
    }
}