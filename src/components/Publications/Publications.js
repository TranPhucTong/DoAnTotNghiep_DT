import React from "react";
import "../Publications/Publications.css";
const publications = [
  {
    id: 1,
    imgBG:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1216159/retina_500x200_Untitled-ff82fb85c7fe5e6f7c06c94923e6b98b.png",
    imgAvt:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/1049191/retina_64x64_huge_dca545a4cc64edf64bfe4691a84485ec-b077a2d438110198956a9a4545ad4cae.jpg",
    topic:
      "Mua sắm quần áo trong thế giới trực tuyến: Thiết kế UI/UX cho việc thử quần áo ảo",
    name: "Tong Rose",
    text: "Các lập trình viên đạt được các kỹ năng thực tế có giá trị từ các cuộc thi thuật toán có thể nâng cao triển vọng việc làm của họ—và xếp hạng cuộc thi giúp các nhà quản lý tuyển dụng dễ dàng tìm thấy nhân tài hàng đầu. Khám phá C++ cạnh tranh với một lập trình viên có điểm số giúp họ được Google tuyển dụng.",
    field: "Thiết kế UX",
  },
  {
    id: 2,
    imgBG:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1235773/regular_500x200_Untitled-9fb24a6ca89698a6d97a65a0a061e70d.png",
    imgAvt:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_author/content/photo_file/photo/967375/laurencebrothers-186dc3386cfd70baf5110ea2e948d028.jpg",
    topic:
      "CapEx 101: Giải quyết xung đột giữa Agile và Waterfall bằng phương pháp kết hợp",
    name: "Danh Brothers",
    text: "Các lập trình viên đạt được các kỹ năng thực tế có giá trị từ các cuộc thi thuật toán có thể nâng cao triển vọng việc làm của họ—và xếp hạng cuộc thi giúp các nhà quản lý tuyển dụng dễ dàng tìm thấy nhân tài hàng đầu. Khám phá C++ cạnh tranh với một lập trình viên có điểm số giúp họ được Google tuyển dụng.",
    field: "project",
  },
  {
    id: 3,
    imgBG:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1216175/regular_500x200_pasted_image_0-ac434609e39bfcc563c5b39968580186.png",
    imgAvt:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/1087731/retina_64x64_huge_14176d384b69eee0799d8f6276148b70-8a86f751bc602a434cc2e8ad2b014556.png",
    topic:
      "Một giải pháp thay thế chuyên gia để thực thi các thủ tục lưu trữ lõi khung thực thể phức tạp",
    name: "Chanh Beo",
    text: "Các lập trình viên đạt được các kỹ năng thực tế có giá trị từ các cuộc thi thuật toán có thể nâng cao triển vọng việc làm của họ—và xếp hạng cuộc thi giúp các nhà quản lý tuyển dụng dễ dàng tìm thấy nhân tài hàng đầu. Khám phá C++ cạnh tranh với một lập trình viên có điểm số giúp họ được Google tuyển dụng.",
    field: "khoa học dữ liệu",
  },
  {
    id: 4,
    imgBG:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1216165/regular_500x200_Design_How-to-Improve-the-Product-Development-Process-by-Analyzing-User-Flows-Cover-302876e3b8fddfa5cb1abe375df9af1d.png",
    imgAvt:
      "https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/1076353/retina_64x64_huge_2024a62774902d2b21841f8ce35e4ddd-17745f32d3def90195ace0da5af23f50.png",
    topic:
      "Cải thiện quy trình phát triển sản phẩm với phân tích luồng người dùng đơn giản nhưng mạnh mẽ này",
    name: "Hoang TailWind",
    text: "Các lập trình viên đạt được các kỹ năng thực tế có giá trị từ các cuộc thi thuật toán có thể nâng cao triển vọng việc làm của họ—và xếp hạng cuộc thi giúp các nhà quản lý tuyển dụng dễ dàng tìm thấy nhân tài hàng đầu. Khám phá C++ cạnh tranh với một lập trình viên có điểm số giúp họ được Google tuyển dụng.",
    field: "thiết kế ux",
  },
];

const PubliCard = ({ publication }) => (
  <div className="iHover border-[1px] rounded-lg border-gray-300 shadow hover:shadow-xl cursor-pointer ease-in-out transition-all duration-300">
    <div className="w-full h-[150px] relative">
      <img
        src={publication.imgBG}
        alt=""
        className="imgHover w-full h-full object-cover rounded-lg"
      />
      <div className="w-10 h-10 absolute left-4 bottom-[-18px] rounded-md">
        <img
          src={publication.imgAvt}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>

    <div className="text-left mt-6 px-4 mb-2">
      <p className="text-blue-500 font-semibold mb-1 text-sm uppercase">
        {publication.field}
      </p>
      <h1 className="font-bold text-base mb-2">{publication.topic}</h1>
      <p className="text-[10px] mb-2">
        By <span className="font-bold">{publication.name}</span>
      </p>
    </div>
  </div>
);

function Publication() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Khám phá những sản phẩm thịnh hành của chúng tôi
      </h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="iHover border-[1px] cursor-pointer transition-all duration-300 ease-linear rounded-lg border-gray-300 shadow hover:shadow-xl">
          <div className="w-full h-[250px] relative">
            <img
              src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1216117/regular_500x200_pasted_image_0-6d578bc0a35bd7ca53dcf70403e3f5d5.png"
              alt=""
              className="imgHover w-full h-full object-cover rounded-lg"
            />
            <div className="w-16 h-16 absolute left-8 bottom-[-30px] rounded-md">
              <img
                src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-1/337145845_1179316779393527_5171054869994625444_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=UUc4hOLetn8AX8PMFre&_nc_ht=scontent-sin6-4.xx&oh=00_AfA8rpbM8ZSAY_NjN_4fA90LFKVPvGvzEzjZjp9igDpFcg&oe=6427E33F"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="text-left mt-10 px-8 mb-8">
            <p className="text-blue-500 font-semibold mb-3 text-lg uppercase">
              Phát triển Back-End
            </p>
            <h1 className="font-bold text-2xl mb-4">
              Cách lập trình cạnh tranh C ++ có thể giúp tuyển dụng người quản
              lý và nhà phát triển như nhau
            </h1>
            <p className="text-sm mb-4">
              By <span className="font-bold">Anitet Wheeler-Rose</span>
            </p>
            <p className="text-gray-500">
              Các lập trình viên đạt được các kỹ năng thực tế có giá trị từ các
              cuộc thi thuật toán có thể nâng cao triển vọng việc làm của họ—và
              xếp hạng cuộc thi giúp các nhà quản lý tuyển dụng dễ dàng tìm thấy
              nhân tài hàng đầu. Khám phá C++ cạnh tranh với một lập trình viên
              có điểm số giúp họ được Google tuyển dụng.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {publications.map((publication) => (
            <div key={publication.id} className="col-span-1 row-span-1">
              <PubliCard publication={publication} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publication;
