import React from 'react'
import { FreelancerCard } from '../Freelancer'
const freelancers = [
  {
    id: 1,
    imgBG: "https://qn.iuh.edu.vn/uploads/2021/04/CNTT.gif",
    imgAvt:
      "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mgeI5yjJ0kwAX8OAP-Q&_nc_ht=scontent-sin6-4.xx&oh=00_AfD38HRJcKiWjdDZxntm7C8-ZoLXBq9kDf8gk39Fs4kenA&oe=64288CFD",
    name: "Tong Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 2,
    imgBG:
      "https://cdn.baoquocte.vn/stores/news_dataimages/minhhoa/012020/03/10/in_article/nhung-cong-nghe-ngu-tri-nam-2020.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/322249286_708446770664814_2655483604596819168_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dHE2ogRZlJIAX_kmxxC&_nc_ht=scontent-sin6-2.xx&oh=00_AfBvhO7ctGjgnACWSe-TQoQrR9v6PToG3eYYpGoIqxBapw&oe=64287B3C",
    name: "Danh Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$130",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 3,
    imgBG: "https://csifac.mans.edu.eg/images/design/it.gif",
    imgAvt:
      "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/245431236_597079805039666_801776340192898134_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8rG5Km4HWgQAX_2hMwK&_nc_ht=scontent-sin6-3.xx&oh=00_AfBn4rN25oJ6hOotNyyeZki5k_JIuYxS2Nn2MfHe6F_mQw&oe=6428FC5F",
    name: "Chanh Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 4,
    imgBG:
      "https://cdn.dribbble.com/users/1797155/screenshots/5018207/malware-attack.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/329130951_510650267785844_1747888420654964900_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yYZoTPJMpHoAX9SYSlC&_nc_ht=scontent-sin6-2.xx&oh=00_AfC0KksZYRw3VxVsKhVVrsyrepqwgJQG_jPuIiNGtEbpPQ&oe=642820A0",
    name: "Hoang Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$430",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 1,
    imgBG: "https://qn.iuh.edu.vn/uploads/2021/04/CNTT.gif",
    imgAvt:
      "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mgeI5yjJ0kwAX8OAP-Q&_nc_ht=scontent-sin6-4.xx&oh=00_AfD38HRJcKiWjdDZxntm7C8-ZoLXBq9kDf8gk39Fs4kenA&oe=64288CFD",
    name: "Tong Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 2,
    imgBG:
      "https://cdn.baoquocte.vn/stores/news_dataimages/minhhoa/012020/03/10/in_article/nhung-cong-nghe-ngu-tri-nam-2020.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/322249286_708446770664814_2655483604596819168_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dHE2ogRZlJIAX_kmxxC&_nc_ht=scontent-sin6-2.xx&oh=00_AfBvhO7ctGjgnACWSe-TQoQrR9v6PToG3eYYpGoIqxBapw&oe=64287B3C",
    name: "Danh Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$130",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 3,
    imgBG: "https://csifac.mans.edu.eg/images/design/it.gif",
    imgAvt:
      "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/245431236_597079805039666_801776340192898134_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8rG5Km4HWgQAX_2hMwK&_nc_ht=scontent-sin6-3.xx&oh=00_AfBn4rN25oJ6hOotNyyeZki5k_JIuYxS2Nn2MfHe6F_mQw&oe=6428FC5F",
    name: "Chanh Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 4,
    imgBG:
      "https://cdn.dribbble.com/users/1797155/screenshots/5018207/malware-attack.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/329130951_510650267785844_1747888420654964900_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yYZoTPJMpHoAX9SYSlC&_nc_ht=scontent-sin6-2.xx&oh=00_AfC0KksZYRw3VxVsKhVVrsyrepqwgJQG_jPuIiNGtEbpPQ&oe=642820A0",
    name: "Hoang Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$430",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 1,
    imgBG: "https://qn.iuh.edu.vn/uploads/2021/04/CNTT.gif",
    imgAvt:
      "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/337145845_1179316779393527_5171054869994625444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mgeI5yjJ0kwAX8OAP-Q&_nc_ht=scontent-sin6-4.xx&oh=00_AfD38HRJcKiWjdDZxntm7C8-ZoLXBq9kDf8gk39Fs4kenA&oe=64288CFD",
    name: "Tong Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 2,
    imgBG:
      "https://cdn.baoquocte.vn/stores/news_dataimages/minhhoa/012020/03/10/in_article/nhung-cong-nghe-ngu-tri-nam-2020.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/322249286_708446770664814_2655483604596819168_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dHE2ogRZlJIAX_kmxxC&_nc_ht=scontent-sin6-2.xx&oh=00_AfBvhO7ctGjgnACWSe-TQoQrR9v6PToG3eYYpGoIqxBapw&oe=64287B3C",
    name: "Danh Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$130",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 3,
    imgBG: "https://csifac.mans.edu.eg/images/design/it.gif",
    imgAvt:
      "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/245431236_597079805039666_801776340192898134_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8rG5Km4HWgQAX_2hMwK&_nc_ht=scontent-sin6-3.xx&oh=00_AfBn4rN25oJ6hOotNyyeZki5k_JIuYxS2Nn2MfHe6F_mQw&oe=6428FC5F",
    name: "Chanh Taddy",
    text: "Tôi chuyên thiết kế những trang web trẻ trung, hiện đại giao diện thân thiện với người dùng ",
    price: "$230",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
  {
    id: 4,
    imgBG:
      "https://cdn.dribbble.com/users/1797155/screenshots/5018207/malware-attack.gif",
    imgAvt:
      "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/329130951_510650267785844_1747888420654964900_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yYZoTPJMpHoAX9SYSlC&_nc_ht=scontent-sin6-2.xx&oh=00_AfC0KksZYRw3VxVsKhVVrsyrepqwgJQG_jPuIiNGtEbpPQ&oe=642820A0",
    name: "Hoang Taddy",
    text: "Nếu bạn thích sự đơn giản tối ưu hãy tìm đến tôi. Tôi sẽ giúp bạn hoàn thiện sản phẩm của mình",
    price: "$430",
    href: "https://www.facebook.com/profile.php?id=100084368642280",
  },
];

const ListFreelancer = () => {
  return (
   <div className="grid grid-cols-4 grid-rows-1 gap-10 mb-8">
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="col-span-1 row-span-1">
            <FreelancerCard freelancer={freelancer} />
          </div>
        ))}
      </div>
  )
}

export default ListFreelancer