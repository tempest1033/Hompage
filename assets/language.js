(function () {
  const STORAGE_KEY = 'tribigames-language';
  const translations = {
    ko: {
      'home.heroCopy': '픽셀 감성과 전략적 재미를 담아 전 세계 게이머에게 새로운 모험을 선사합니다.',
      'footer.address': '34, Suji-ro 342beon-gil, Suji-gu, Yongin-si, Gyeonggi-do A128',
      'footer.email': 'contact@tribigames.com',
      'footer.copyright': '2025 TRIB GAMES All rights rewerved.',
      'footer.link.terms': '이용약관',
      'footer.link.privacy': '개인정보처리방침',
      'terms.title': '이용약관',
      'terms.intro': '본 약관은 트리비게임즈 서비스를 이용하는 이용자(이하 “회원”)와 회사 간의 서비스 이용에 관한 권리, 의무 및 책임사항을 규정합니다.',
      'terms.section1.title': '제1조 (목적)',
      'terms.section1.body': '이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 기본적인 권리·의무 및 책임사항을 규정함을 목적으로 합니다.',
      'terms.section2.title': '제2조 (약관의 효력 및 변경)',
      'terms.section2.item1': '이 약관은 서비스를 이용하고자 하는 모든 회원에게 적용됩니다.',
      'terms.section2.item2': '회사는 관련 법령을 위배하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 공지사항을 통해 사전 공지합니다.',
      'terms.section3.title': '제3조 (서비스의 제공 및 변경)',
      'terms.section3.item1': '회사는 게임 서비스 및 관련 콘텐츠를 회원에게 제공합니다.',
      'terms.section3.item2': '회사는 서비스의 운영상, 기술상의 필요에 따라 제공하는 콘텐츠의 전부 또는 일부를 변경할 수 있습니다.',
      'terms.section4.title': '제4조 (회원의 의무)',
      'terms.section4.item1': '회원은 관련 법령, 약관 및 공지사항을 준수하여야 합니다.',
      'terms.section4.item2': '회원은 타인의 정보를 도용하거나 부정 사용해서는 안 됩니다.',
      'terms.section5.title': '제5조 (계약 해지 및 이용 제한)',
      'terms.section5.body': '회사는 회원이 약관을 위반한 경우 사전 통지 후 서비스 이용을 제한하거나 계약을 해지할 수 있습니다.',
      'terms.effectiveDate': '시행일: 2025년 9월 16일',
      'privacy.title': '개인정보처리방침',
      'privacy.intro': '회사는 회원의 개인정보를 중요하게 생각하며, 관련 법령과 지침을 준수하여 안전하게 관리합니다.',
      'privacy.section1.title': '1. 수집하는 개인정보 항목 및 수집 방법',
      'privacy.section1.item1': '가입 시: 이메일 주소, 닉네임, 비밀번호',
      'privacy.section1.item2': '서비스 이용 과정에서 생성되는 게임 플레이 기록, 접속 로그, 결제 기록',
      'privacy.section2.title': '2. 개인정보의 이용 목적',
      'privacy.section2.item1': '서비스 제공 및 회원 관리',
      'privacy.section2.item2': '고객 문의 대응 및 공지사항 전달',
      'privacy.section2.item3': '서비스 품질 향상을 위한 통계 분석',
      'privacy.section3.title': '3. 개인정보의 보유 및 이용 기간',
      'privacy.section3.body': '회사는 이용 목적 달성 후 지체 없이 개인정보를 파기하며, 관련 법령에서 정한 기간 동안은 해당 법령을 따릅니다.',
      'privacy.section4.title': '4. 개인정보의 제3자 제공',
      'privacy.section4.body': '회사는 이용자의 동의가 있거나 법령에 의해 요구되는 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다.',
      'privacy.section5.title': '5. 이용자의 권리 및 행사 방법',
      'privacy.section5.body': '회원은 언제든지 자신의 개인정보를 열람, 정정, 삭제를 요청할 수 있으며, 회사는 지체 없이 조치합니다.',
      'privacy.effectiveDate': '시행일: 2025년 9월 16일'
    },
    en: {
      'home.heroCopy': 'Blending pixel charm with strategic depth to deliver new adventures to players worldwide.',
      'footer.address': '34, Suji-ro 342beon-gil, Suji-gu, Yongin-si, Gyeonggi-do A128',
      'footer.email': 'contact@tribigames.com',
      'footer.copyright': '2025 TRIB GAMES All rights rewerved.',
      'footer.link.terms': 'Terms of Service',
      'footer.link.privacy': 'Privacy Policy',
      'terms.title': 'Terms of Service',
      'terms.intro': 'These terms define the rights, obligations, and responsibilities between Tribigames and the users (“Members”) who use its services.',
      'terms.section1.title': 'Article 1 (Purpose)',
      'terms.section1.body': 'These terms aim to set forth the fundamental rights, obligations, and responsibilities between the Company and Members regarding the use of the services provided by the Company.',
      'terms.section2.title': 'Article 2 (Effectiveness and Amendments of the Terms)',
      'terms.section2.item1': 'These terms apply to every Member who wishes to use the services.',
      'terms.section2.item2': 'The Company may amend the terms within the scope permitted by applicable laws and will announce such changes in advance through notices.',
      'terms.section3.title': 'Article 3 (Provision and Changes of Services)',
      'terms.section3.item1': 'The Company provides game services and related content to Members.',
      'terms.section3.item2': 'The Company may change all or part of the content provided due to operational or technical needs.',
      'terms.section4.title': 'Article 4 (Obligations of Members)',
      'terms.section4.item1': 'Members must comply with relevant laws, these terms, and posted notices.',
      'terms.section4.item2': 'Members must not steal or misuse another person’s information.',
      'terms.section5.title': 'Article 5 (Termination and Use Restrictions)',
      'terms.section5.body': 'If a Member violates these terms, the Company may restrict service use or terminate the contract after prior notice.',
      'terms.effectiveDate': 'Effective Date: September 16, 2025',
      'privacy.title': 'Privacy Policy',
      'privacy.intro': 'The Company values Members’ personal information and manages it safely in accordance with applicable laws and guidelines.',
      'privacy.section1.title': '1. Personal Information Collected and Collection Methods',
      'privacy.section1.item1': 'During sign-up: email address, nickname, password',
      'privacy.section1.item2': 'During service use: gameplay records, access logs, payment history',
      'privacy.section2.title': '2. Purpose of Using Personal Information',
      'privacy.section2.item1': 'Service provision and Member management',
      'privacy.section2.item2': 'Responding to customer inquiries and delivering notices',
      'privacy.section2.item3': 'Statistical analysis to improve service quality',
      'privacy.section3.title': '3. Retention and Use Period of Personal Information',
      'privacy.section3.body': 'The Company destroys personal information without delay once the purpose of use is achieved, and retains it only for periods required by applicable laws.',
      'privacy.section4.title': '4. Provision of Personal Information to Third Parties',
      'privacy.section4.body': 'The Company does not provide personal information to third parties unless consent is obtained or it is required by law.',
      'privacy.section5.title': '5. Rights of Users and Exercise Methods',
      'privacy.section5.body': 'Members may request to view, correct, or delete their personal information at any time, and the Company will promptly take necessary actions.',
      'privacy.effectiveDate': 'Effective Date: September 16, 2025'
    }
  };

  const states = [];

  const getSavedLanguage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) {
        return stored;
      }
    } catch (error) {
      /* localStorage unavailable */
    }
    return null;
  };

  const saveLanguage = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* ignore storage errors */
    }
  };

  const closeAll = (exceptComponent) => {
    states.forEach((state) => {
      if (exceptComponent && state.component === exceptComponent) {
        return;
      }
      state.closeMenu();
    });
  };

  const applyLanguage = (lang) => {
    const targetLang = translations[lang] ? lang : 'ko';
    const dictionary = translations[targetLang];

    document.documentElement.lang = targetLang === 'en' ? 'en' : 'ko';

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (!key) {
        return;
      }
      const text = dictionary[key];
      if (typeof text === 'string') {
        node.textContent = text;
      }
    });

    states.forEach((state) => {
      state.updateSelection(targetLang);
      state.closeMenu();
    });

    saveLanguage(targetLang);
  };

  const components = Array.from(document.querySelectorAll('[data-language-select]'));
  if (!components.length) {
    return;
  }

  components.forEach((component) => {
    const toggle = component.querySelector('.language-select__toggle');
    const menu = component.querySelector('.language-select__menu');
    const current = component.querySelector('[data-language-current]');
    const options = Array.from(component.querySelectorAll('[data-language-option]'));

    if (!toggle || !menu || !current || !options.length) {
      return;
    }

    const closeMenu = () => {
      component.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    };

    const updateSelection = (value) => {
      options.forEach((option) => {
        const isSelected = option.dataset.languageOption === value;
        option.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        if (isSelected) {
          current.textContent = option.textContent;
        }
      });
      component.dataset.languageValue = value;
    };

    const openMenu = () => {
      closeAll(component);
      component.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
    };

    states.push({ component, toggle, menu, options, updateSelection, closeMenu });

    menu.hidden = true;

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      if (component.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    toggle.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openMenu();
        options[0].focus();
      } else if (event.key === 'Escape') {
        closeMenu();
      }
    });

    menu.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    options.forEach((option, index) => {
      option.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const value = option.dataset.languageOption || 'ko';
        applyLanguage(value);
        component.dispatchEvent(
          new CustomEvent('language-select:change', {
            detail: { value },
            bubbles: true
          })
        );
        toggle.focus();
      });

      option.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeMenu();
          toggle.focus();
        } else if (event.key === 'ArrowDown') {
          event.preventDefault();
          const next = options[index + 1] || options[0];
          next.focus();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          const prev = options[index - 1] || options[options.length - 1];
          prev.focus();
        } else if (event.key === 'Tab') {
          closeMenu();
        }
      });
    });
  });

  const initialLang = getSavedLanguage() || document.documentElement.lang || 'ko';
  applyLanguage(initialLang);

  document.addEventListener('click', () => {
    closeAll();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAll();
    }
  });
})();
