import React from "react";

const Skill = ({ onChange, skills, onKeyDown, skill,onRemoveSkill }) => {
  const removeSkillHandle = (skill) => {
    onRemoveSkill(skill);
  };
  return (
    <div className="">
      <h4 className="text-[#00bdd6] font-bold text-lg text-left ">Công nghệ:</h4>
      <input
        className="border-2 w-full rounded-lg my-5 border-neutral-500 py-2 px-5 "
        placeholder="Công nghệ bạn cần tìm kiếm..."
        value={skill}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => onKeyDown(e.key)}
      />
      <div className="flex flex-wrap items-center">
        {skills ? (
          skills.length ? (
            skills.map((item, index) => {
              return (
                <div
                  onClick={() => removeSkillHandle(item)}
                  key={index}
                  className="hover:bg-red-400 hover:opacity-60 cursor-pointer transition-all h-6 rounded-2xl px-4 m-2 bg-[#F3F4F6FF] text-sm"
                >
                  {item}
                </div>
              );
            })
          ) : (
            ""
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Skill;
