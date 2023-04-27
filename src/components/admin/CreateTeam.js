import React, { useState } from 'react'

const CreateTeam = () => {
  const [nameTeam, setNameTeam] = useState("");
  const [field, setField] = useState("");
  const [leader, setLeader] = useState("");
  const [typeWork, setTypeWork] = useState("");
  const [total, setToTal] = useState();


  const leaders = [
    "Tran Phuc Tong", "Nguyen Minh Chanh", "Do Thanh Danh", "Phan Thanh Hai"
  ]
  


  return (
    <div class="p-6 w-full  min-h-screen-except-header">
      <span className="text-2xl font-extrabold text-blue-500">
        Tạo nhóm mới
      </span>
      <div class="mt-6 bg-white shadow-xl rounded-lg p-8 pt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {/* name  */}
          <div class="h-[2.875rem] relative flex items-center border border-solid focus-within:border-blue-500 transition-all ease-linear  border-gray-200 rounded-lg">
            <label className="absolute -top-1/4  left-2 px-2 bg-white text-blue-500 text-sm">
              Tên nhóm
            </label>
            <input
              className="text-sm  w-full border border-none outline-none px-4 py-2"
              type="text"
              formControlName="name"
              value={nameTeam}
              onChange={(e) => setNameTeam(e.target.value)}
            />
          </div>
          {/* Field  */}
          <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Mảng làm việc
            </label>
            <select
              className="text-sm w-full border border-none outline-none px-4 py-2 mb-0"
              formControlName="field"
              value={field}
              onChange={(e) => setField(e.target.value)}
            >
              <option value="">Vui lòng chọn</option>
              <option value="web">Lập trình Web</option>
              <option value="app">Ứng dụng di động</option>
              <option value="game">Lập trình game</option>
              <option value="data">Khoa học dữ liệu</option>
              <option value="ai">Trí tuệ nhân tạo</option>
              <option value="security">An ninh mạng</option>
            </select>
          </div>

          {/* Leader */}
          <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Chọn trưởng nhóm
            </label>
            <select
              className="text-sm w-full border border-none outline-none px-4 py-2 mb-0"
              formControlName="leader"
              value={leader}
              onChange={(e) => setLeader(e.target.value)}
            >
              <option value="">Vui lòng chọn</option>
              {leaders.map((leader, index) => (
                <option key={index} value={leader}>
                  {leader}
                </option>
              ))}
            </select>
          </div>

          {/* Type Work */}
          <div class="h-[2.875rem] relative flex items-center justify-center border border-solid focus-within:border-blue-500 transition-all ease-linear border-gray-200 rounded-lg">
            <label className="absolute -top-1/4 left-2 px-2 bg-white text-blue-500 text-sm">
              Chọn hình thức làm việc
            </label>
            <select
              className="text-sm w-full border border-none outline-none px-4 py-2 mb-0"
              formControlName="leader"
              value={typeWork}
              onChange={(e) => setTypeWork(e.target.value)}
            >
              <option value="">Vui lòng chọn</option>
              <option value="remote">Làm việc từ xa</option>
              <option value="live">Làm việc trực tiếp</option>
            </select>
          </div>
          
          {/* Total */}
          <div class="h-[2.875rem] relative flex items-center border border-solid focus-within:border-blue-500 transition-all ease-linear  border-gray-200 rounded-lg">
            <label className="absolute -top-1/4  left-2 px-2 bg-white text-blue-500 text-sm">
              Số lượng nhân viên
            </label>
            <input
              className="text-sm  w-full border border-none outline-none px-4 py-2"
              type="number"
              formControlName="total"
              value={total}
              onChange={(e) => setToTal(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={() => {console.log(total);}}
            type="submit"
            class={`bg-blue-500 px-8 py-2 text-white font-semibold rounded-lg mt-12 hover:bg-blue-600 transition-colors ease-linear 
          `}
            // ${isFormComplete ? "" : "opacity-50 pointer-events-none"}
          >
            Tạo mới
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTeam