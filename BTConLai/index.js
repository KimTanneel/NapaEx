/* 
    1. Phân biệt SetInterval và SetTimeout
    - Cả hai đều là hàm thực hiện một hàm bất đồng bộ trong js.
    Khi hàm được gọi, nó sẽ đẩy vào API server call back và có bộ đếm.
    Sau một khoảng thời gian callback sẽ được đẩy vào Queuce loop .
        + SetTimeout sẽ thực hiện một lần 
        + SetInterval sẽ thực hiện nhiều lần

*/


/* 
    2. Hiện tượng call back hell
    - Là hiện tượng mà nhiều call back lồng nhau gây khó hiểu, đọc code,
     maintain code...
*/

/* 
    3. Phân biệt let và const
    - Đều là 2 cách khai báo biến và có scope là block scope.
    Không thể khai báo trùng tên trong cùng 1 scope
        + Let : Có thể set lại giá trị 
        + Const : Không thể set lại giá trị
*/

/* 
    4. phân biệt forEach, filter, map, every, some, for thường
    - ForEach: lặp hết các phần tử của mảng
    - Filter : Lọc và trả về mảng gồm phần tử của mảng thỏa điều kiện
    - Map : Trả về một mảng mới bằng độ dài mảng cũ với các phần tử được tùy biến
    - Every: Trả về true nếu tất cả phần tử thỏa mãn điều kiện ngược lại trả lại fasel
    - Some : Trả về true nếu có ít nhất 1 phần tử thỏa mãn điều kiện ngược lại trả về false
*/

/* 
    5. phân biệt giá trị và địa chỉ của biến
    - Giá trị của biến là do người dùng định nghĩa, khi giá trị được gán 
    vùng nhớ của biến đó sẽ được gán giá trị đó.
    - Địa chỉ của biến là khi khai báo biến chương trình sẽ cấp phát
    một vùng nhớ cho biến đó
*/

/* 
    6. Lỗi reference object mà dev hay gặp là lỗi gì? minh họa

    Lỗi tham chiếu cùng một đối tượng
    let a = "heelo"
    let b = a;
    b = "Hi" - > Khi này cả biến a và b đều có g trị là "Hi"
    vì cả 2 cùng trỏ tới một vùng nhớ


*/

/* 
    7. phân biệt call, bind, apply
    - Call, Bind, Apply đều là prototype của function. 
    - Cả ba đều cho phép truy cập method của object khác.
    - Call và Apply giống nhau, chỉ khác cách truyền tham số vào.
    Call truyền các tham số cách nhau bởi dấu phẩy, còn Apply truyền truyền tham số mảng.
    - Bind trả về 1 function mới, khác với Call và Apply thực thi function trực tiếp
*/

/* 
    7. phân biệt call, bind, apply
    - Call, Bind, Apply đều là prototype của function. 
    - Cả ba đều cho phép truy cập method của object khác.
    - Call và Apply giống nhau, chỉ khác cách truyền tham số vào.
    Call truyền các tham số cách nhau bởi dấu phẩy, còn Apply truyền truyền tham số mảng.
    - Bind trả về 1 function mới, khác với Call và Apply thực thi function trực tiếp
*/

/* 
    8. javascript có bao nhiêu kiểu dữ liệu
    - Js có 2 kiểu dữ liệu là Nguyên Thủy và Object
        + Nguyên thủy 6 kiểu : string, number, null, undefined, symbol, boolean
        + Kiểu Object 3 kiểu : Function, Object , Array  
*/

/* 
    9. prototype là gì
    - Bản chất js không phải ngôn ngữ OOP. Nên Js tạo prototype để 
    giải quyết vấn đề kế thừa các property của object


*/

/* 
    10/ trình bày các phương pháp để khởi tạo object
    - Có 4 cách
        + Object literal 
        + New Operator with function 
        + New Operator with Class
        + Object create method

*/

/* 
    10/ trình bày các phương pháp để khởi tạo object
    - Có 4 cách
        + Object literal 
        + New Operator with function 
        + New Operator with Class
        + Object create method

*/

/* 
    11/ trình bày các phương pháp để clone object (càng nhiều càng tốt, so sánh ưu nhược điểm)
    - Spread :
        + Ưu : Dễ triển khai
        + Nhược : Swallow Copy chỉ copy được level đầu, các level sâu hơn sẽ được hiểu là tham chiếu        + Example: 
            let car = {"name"}
            let clone = {...car}
    
    - Operation "="
        + Ưu : Dễ nhìn
        + Nhược : Khi thay đổi giá trị của obj thì cả hai obj cùng thay đổi
        + Example : 
            let car = "Audi"
            let clone = car
    
    - Json parse
        + Ưu : Deep Copy. Có thể thay đổi gía trị của obj mà không bị ảnh hưởng tới obj khác
        + Nhược : Nhìn rối 

    - Assign Object
        + Ưu : Giống như Spread là Swallow copy
        + Ưu : Đễ triển khai

        

*/


/* 
    13/ Toán tử == và === khác và giống nhau như thế nào?
    Switch case là so sánh == hay ===.
    - == so sánh giá trị khi cast ví dụ 1=='1' nó sẽ trả về true vì '1' được cast về number 1
    - === là so sánh giá trị và so sánh kiểu dữ liệu nên 1==='1' trả về false
*/
/* 
    14/ Sự khác nhau giữa require và import?

    - require
        + Được gọi ở bất cứ đâu
        + Thực thi đồng bộ
        + Lấy tất cả các file 1 lúc

    - import
        + Được gọi ở đầu chương trình
        + Thực thi bất đồng bộ
        + Cho phép lấy dữ liệu cần thiết
*/
