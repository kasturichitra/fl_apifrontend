import React, { useState } from "react";

export default function LanguageSelection({
  languages,
  currentLanguage,
  setCurrentLanguage,
}) {

  return (
    <div className="">
      <p className="codes_heads_title">Language</p>
      <div className="flex pt-2 items-center flex-wrap gap-2">
        {languages?.map((l, i) => {
          return (
            <GetImage
              key={i}
              lang={l}
              currentLanguage={currentLanguage}
              setCurrentLanguage={setCurrentLanguage}
            />
          );
        })}
      </div>
    </div>
  );
}

function GetImage({ lang, currentLanguage, setCurrentLanguage }) {
  const { languageName, imageUrl } = lang;
  const handleClick = () => {
    setCurrentLanguage(languageName);
  };
  return (
    <button
      className={`lang_chg_btn ${
        currentLanguage === languageName
          ? "border  border-gray-200/20 "
          : "border border-transparent hover:border-gray-200/20"
      }`}
      onClick={handleClick}
    >
      <img src={imageUrl} alt="" className="w-6 h-6" />
      <span className="text-sm">{languageName}</span>
    </button>
  );
}
