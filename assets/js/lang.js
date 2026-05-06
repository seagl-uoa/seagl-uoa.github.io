(function () {
  var T = {
    en: {
      nav_home:         'Home',
      nav_about:        'About',
      nav_projects:     'Projects',
      nav_publications: 'Publications',
      nav_casestudy:    'Case Study',
      nav_team:         'Team',
      nav_news:         'News',
      nav_contact:      'Contact',

      // index
      hero_title:           'Welcome',
      hero_sub:             'Sustainable | Efficient | Green',
      btn_whatwedo:         'What We Do',
      btn_news:             'News',
      card_proj_title:      '📊 Projects',
      card_proj_desc:       'Explore our innovative research and development projects.',
      card_proj_link:       'Go to Projects →',
      card_pub_title:       '📚 Publications',
      card_pub_desc:        'Read our published papers and research findings.',
      card_pub_link:        'Go to Publications →',
      card_case_title:      '🔍 Case Studies',
      card_case_desc:       'Discover detailed case studies and real-world applications.',
      card_case_link:       'Go to Case Studies →',
      card_team_title:      '👥 Team',
      card_team_desc:       'Meet the talented researchers and collaborators.',
      card_team_link:       'Go to Team →',
      footer_heading:       'Get in Touch',
      footer_rights:        '© 2024. All rights reserved.',
      footer_back:          '← Back to Home',

      // about
      about_hero_title:     'What We Do',
      about_hero_sub:       'Fundamental research towards Sustainable, Efficient and Green Learning',
      about_core_h2:        'The Core Problem',
      about_theme1_h2:      'Research Theme 1: [Theme Title]',
      about_theme2_h2:      'Research Theme 2: [Theme Title]',
      about_theme3_h2:      'Research Theme 3: [Theme Title]',
      about_rel_h2:         'Relation to Projects',
      about_date:           'Fundamental Research Area',

      // projects
      proj_hero_title:      'Projects',
      proj_hero_sub:        'Innovative research and development projects',

      // publications
      pub_hero_title:       'Publications',
      pub_hero_sub:         'Published papers and research findings',

      // case-studies
      case_hero_title:      'Case Studies',
      case_hero_sub:        'Detailed analysis and real-world applications',

      // team
      team_hero_title:      'Our Team',
      team_hero_sub:        'Meet the talented researchers and collaborators',

      // contact
      contact_hero_title:   'Contact',
      contact_hero_sub:     'Get in touch with the SEaGL research group',
      contact_general_h2:   'General Enquiries',
      contact_collab_h2:    'Collaboration & Research',
      contact_phd_h2:       'PhD & Postdoc Opportunities',
      contact_loc_h2:       'Location',

      // news
      news_hero_title:      'News',
      news_hero_sub:        'Latest updates from the SEaGL research group',
    },

    zh: {
      nav_home:         '首页',
      nav_about:        '关于',
      nav_projects:     '项目',
      nav_publications: '发表成果',
      nav_casestudy:    '案例研究',
      nav_team:         '团队',
      nav_news:         '新闻',
      nav_contact:      '联系我们',

      // index
      hero_title:           '欢迎',
      hero_sub:             '可持续 | 高效 | 绿色',
      btn_whatwedo:         '我们的研究',
      btn_news:             '新闻动态',
      card_proj_title:      '📊 项目',
      card_proj_desc:       '探索我们的创新研究与开发项目。',
      card_proj_link:       '前往项目页面 →',
      card_pub_title:       '📚 发表成果',
      card_pub_desc:        '阅读我们发表的论文与研究成果。',
      card_pub_link:        '前往发表成果 →',
      card_case_title:      '🔍 案例研究',
      card_case_desc:       '探索详细案例研究与实际应用。',
      card_case_link:       '前往案例研究 →',
      card_team_title:      '👥 团队',
      card_team_desc:       '认识我们的研究人员与合作者。',
      card_team_link:       '前往团队页面 →',
      footer_heading:       '联系我们',
      footer_rights:        '© 2024. 保留所有权利。',
      footer_back:          '← 返回首页',

      // about
      about_hero_title:     '我们的研究',
      about_hero_sub:       '面向可持续、高效、绿色学习的基础研究',
      about_core_h2:        '核心问题',
      about_theme1_h2:      '研究方向一：[方向标题]',
      about_theme2_h2:      '研究方向二：[方向标题]',
      about_theme3_h2:      '研究方向三：[方向标题]',
      about_rel_h2:         '与项目的关系',
      about_date:           '基础研究方向',

      // projects
      proj_hero_title:      '项目',
      proj_hero_sub:        '创新研究与开发项目',

      // publications
      pub_hero_title:       '发表成果',
      pub_hero_sub:         '已发表的论文与研究成果',

      // case-studies
      case_hero_title:      '案例研究',
      case_hero_sub:        '详细分析与实际应用',

      // team
      team_hero_title:      '我们的团队',
      team_hero_sub:        '认识我们的研究人员与合作者',

      // contact
      contact_hero_title:   '联系我们',
      contact_hero_sub:     '与 SEaGL 研究团队取得联系',
      contact_general_h2:   '一般咨询',
      contact_collab_h2:    '合作与研究',
      contact_phd_h2:       '博士及博士后招募',
      contact_loc_h2:       '地址',

      // news
      news_hero_title:      '新闻动态',
      news_hero_sub:        'SEaGL 研究团队的最新动态',
    }
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-key]').forEach(function (el) {
      var key = el.getAttribute('data-key');
      if (T[lang] && T[lang][key] !== undefined) {
        el.textContent = T[lang][key];
      }
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('lang', lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('lang') || 'en';
    applyLang(saved);
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('lang') || 'en';
        applyLang(current === 'en' ? 'zh' : 'en');
      });
    }

    // Hamburger menu toggle
    var hamburger = document.getElementById('hamburger');
    var navCollapse = document.getElementById('nav-collapse');
    if (hamburger && navCollapse) {
      hamburger.addEventListener('click', function () {
        navCollapse.classList.toggle('open');
      });
      // Close menu when a nav link is clicked
      navCollapse.querySelectorAll('.nav-menu a').forEach(function (link) {
        link.addEventListener('click', function () {
          navCollapse.classList.remove('open');
        });
      });
    }
  });
})();
