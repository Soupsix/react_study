var huyen = 14;
console.log('tranhuyen ', huyen);

const b = 5;

//for in: lay key cua mot object(can be string, array)
const obj = [
    {
        ten: 'huyen',
        diem: 10
    },
    {
        ten: 'truong',
        diem: 9
    }
]

// console.log('Object: ', obj);
//for in lấy index của 1 object
for (item in obj) {
    console.log('item: ', item);
}

//for of Lấy object của đối tượng trong mảng
for (item of obj) {
    console.log('item: ', item.diem);
}

var arr = [1, 2, 3, 4, 5];

function sumEven(arr) {

    let tong = 0;
    for (const item of arr) {
        if (item % 2 === 0) {
            tong += item;
        }
    }

    return tong;
}

//Cách gọi function 1:
var result = sumEven(arr);
console.log('Tong so chan: ', result);

//Cách gọi function 2:
console.log('Tong so chan: ', sumEven(arr));

function a() {
    console.log('hàm : ', a);

    function b() {
        console.log('hàm: ', b);
    }

    b();
}

// a()

//Function declaration có tính chất hoisting, có thể gọi trước khi được định nghĩa
function sum(a, b) {
    console.log('a: ', a);
    console.log('b: ', b);
    return a + b;
}

//Function expression phải được gọi sau khi được định nghĩa
console.log('Tong: ', sum(1, 2));

//Arrow function(Không có tính hoisting không được gọi hàm trước khi khai báo)
var tich = (a, b) => {

    return a * b;
}
console.log('Tich: ', tich(2, 3));

try {
    //Chứa đoạn code có thể xảy ra lỗi
    let x = 10;
    let y = 0;
    let result = x / y;
    console.log('Result: ', result);
} catch (error) {
    //Xử lý lỗi nếu có
    console.error('Lỗi xảy ra: ', error.message);
} finally {
    //Mã này sẽ luôn được thực thi, bất kể có lỗi hay không
    console.log('Kết thúc xử lý lỗi.');
}

//Working on Objects
var info = {
    name: 'Huyen', 
    age: 14,
    address: 'Hanoi',
    std: 123
};

console.log('Info: ', info);
//Lấy ra giá trị của key trong object
console.log('Name: ', info.name);

var keyFind = 'age';
//Dấu [] phân biệt với dấu chấm, [] có thể lấy giá trị của key trong object
console.log('Age: ', info[keyFind]);

delete info.std; //Xóa key std trong object
console.log('Info after delete std: ', info);


//Parameters in function
const tinhTong2 = (a = 0, b = 1) => { //Default parameters
    //Nếu không truyền giá trị thì a = 0, b = 1
    //tránh làm việc thiếu sót gây ra lỗi hệ thống
    console.log('a: ', a);
    console.log('b: ', b);
    return a + b;
}

console.log('Tong 2 so: ', tinhTong2());

//Spread parameters: Cú pháp trải dải các phần tử của mảng hoặc đối tượng
console.log('-----------------------------------------');
const obj1 = { name: 'Huyen',age: 14};
const obj2 = { address: 'Hanoi', std: 123};

const obj3 = { ...obj1, ...obj2 }; //Trải dải các phần tử của obj1 và obj2 vào obj3
console.log('Obj3: ', obj3);

let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
let arr4 = [...arr2, ...arr3]; //Trải dải các phần tử của arr2 và arr3 vào arr4
console.log('Arr4: ', arr4);

let person = { name: 'Huyen', age: 14 };
let hobies = ['reading', 'coding', 'traveling'];

let truong = { ...person, hobbies: [...hobies] }; //Trải dải các phần tử của person và hobies
let truong2 = { ...person,  ...hobies }; //Không cần trải dải, chỉ cần gán mảng
console.log('Truong: ', truong);
console.log('Truong2: ', truong2);

function tinhTong3() { //Spread parameters
    //args là một mảng chứa tất cả các tham số được truyền vào
    let tong = 0;
    for (item of arguments) { //arguments là biến toàn cục chứa tất cả các tham số được truyền vào
        tong += item;
    }
    return tong;
}

result = tinhTong3(1, 2, 3, 4, 5); //Truyền nhiều tham số vào hàm
let result2 = tinhTong3(1, 2, 3, 4, 5,6,7,8); //Truyền nhiều tham số vào hàm
console.log('Tong cac so: ', result);
console.log('Tong cac so: ', result2);
//Destructuring: Cú pháp phân rã các phần tử của mảng hoặc đối tượng
console.log('----------------DESTRUCTURING-------------------------'); 
const arr5 = [1, 2, 3, 4, 5];
console.log('Arr5: ', arr5);

let [a1, a2, ...a3] = arr5; //Phân rã các phần tử của mảng arr5 vào các biến a1, a2, a3
console.log('a1: ', a1);
console.log('a2: ', a2);
console.log('a3: ', a3);