import React from "react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const employees = [
  {
    id: 1,
    name: "Danielle Thompson",
    position: "Developer",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36pQiVFqlQmsC90YTurTe3bc0XVaZAV8EfA&usqp=CAU",
  },
  {
    id: 2,
    name: "Vladimir Mitrovic",
    position: "Back-End Developer",
    imageUrl:
      "http://genk.mediacdn.vn/2018/6/5/photo-1-15281889747982079253360.jpg",
  },
  {
    id: 3,
    name: "Emily Dubow",
    position: "Python Developer",
    imageUrl:
      "http://media.thieunien.vn/uploads/2019/07/1562834819-photo-1-1562817296997400822402.jpg",
  },
  {
    id: 4,
    name: "Casey Arrington",
    position: "UI/UX Designer",
    imageUrl:
      "https://static1.dienanh.net/upload/202107/338185a5-21c5-40bc-b82a-bc164eac2e92.jpeg",
  },
  {
    id: 5,
    name: "Jane Smith",
    position: "Front-End Developer",
    imageUrl:
      "https://static-images.vnncdn.net/files/publish/2023/1/3/untitled-3-228.jpg",
  },
];

const EmployeeCard = ({ employee }) => (
  <div className="relative hover:bg-[#0f0d58] flex flex-col w-full h-full p-4 border rounded-lg shadow-lg overflow-hidden transition-all duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-105">
    <img
      src={employee.imageUrl}
      alt={employee.name}
      className="h-60 w-[250px] object-cover mb-4 transition-opacity ease-in-out duration-500 rounded-2xl"
    />
    <div className="relative z-10">
      <span className="font-bold text-[20px] text-yellow-500">&lt;/&gt;</span>
      <h3 className="font-bold text-lg text-[#277cfb]">{employee.name}</h3>
      <p className="text-[#10a37f] font-semibold">{employee.position}</p>
    </div>
    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
  </div>
);

function EmployeeSlider() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Những chuyên gia, đội ngũ dày dặn kinh nghiệm đến từ chúng tôi
      </h1>
      <div className="flex flex-grow gap-4">
        {employees.map((employee) => (
          <div key={employee.id} className="col-span-1 row-span-1">
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeSlider;
