import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/24/solid';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-outline btn-circle">
        <LanguageIcon className="h-6 w-6" />
      </button>
      <ul className="dropdown-content menu p-2 shadow bg-neutral rounded-box">
        <li>
          <button
            onClick={() => changeLanguage('en')}
            className={`flex items-center ${
              i18n.language === 'en' ? 'font-bold' : ''
            }`}
          >
            EN
          </button>
        </li>
        <li>
          <button
            onClick={() => changeLanguage('id')}
            className={`flex items-center ${
              i18n.language === 'id' ? 'font-bold' : ''
            }`}
          >
            ID
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageSwitcher;  