// ==UserScript==
// @name         智谱清言(ChatGLM) - 侧边栏会话跳转导航 | ChatGLM Sidebar Navigator
// @namespace    https://github.com/sakura11111111111111/ChatGLM-Sidebar-Jump-Axis
// @version      1.0
// @description  为智谱清言(ChatGLM.cn)添加右侧悬浮侧边栏。核心功能：1. 布局锁死：修复内容溢出问题，按钮永远可见；2. 会话跳转：自动生成问题锚点，平滑滚动定位；3. 宝石皮肤：支持 Base64 自定义图标；4. 智能记忆：自动记录星标节点。
// @author       zdm@Gai.cn
// @match        https://chatglm.cn/*
// @icon         https://chatglm.cn/img/icons/favicon.svg
// @license      MIT
// @homepageURL  https://space.bilibili.com/497930349
// @supportURL   https://github.com/sakura11111111111111/ChatGLM-Sidebar-Jump-Axis/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // === 1. 宝石素材库 ===
    // 星标态 七彩石头
        const GEM_STAR = "data:image/png;base64,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";


    // 默认态 紫色石头
       const GEM_NORMAL = "data:image/png;base64,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";



    // === 2. 智能记忆系统 ===
    function getChatId(fallbackText) {
        const match = window.location.href.match(/\/(detail|share)\/([a-zA-Z0-9]+)/);
        if (match) return match[2];
        let fingerprint = document.title;
        if (fallbackText) fingerprint += "_" + fallbackText.replace(/\s/g, '').slice(0, 15);
        return "session_" + fingerprint;
    }
    function getStarredList(cid) {
        const raw = localStorage.getItem(`chatglm_stars_${cid}`);
        return raw ? JSON.parse(raw) : [];
    }
    function saveStarredList(cid, list) {
        localStorage.setItem(`chatglm_stars_${cid}`, JSON.stringify(list));
    }
    function toggleStar(qid, cid) {
        let list = getStarredList(cid);
        const idx = list.indexOf(qid);
        if (idx === -1) list.push(qid); else list.splice(idx, 1);
        saveStarredList(cid, list);
        return idx === -1;
    }

    // === 3. 样式定义 ===
    const STYLES = `
        /* 高亮动画 */
        @keyframes glm-highlight-pulse {
            0% { box-shadow: 0 0 0 transparent; background-color: transparent; border-color: transparent; }
            30% { box-shadow: 0 0 25px rgba(64, 158, 255, 0.6); background-color: rgba(64, 158, 255, 0.1); border-color: rgba(64, 158, 255, 0.8); }
            100% { box-shadow: 0 0 0 transparent; background-color: transparent; border-color: transparent; }
        }
        .glm-flash-target {
            animation: glm-highlight-pulse 1.8s ease-out forwards;
            border: 1px solid transparent;
            border-radius: 8px;
        }

        /* === 外层包裹器 (Layout Fix) === */
        #glm-nav-wrapper {
            position: fixed;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            /* 关键：限制最大高度，给上下留出余地 */
            max-height: 80vh;
            height: auto; /* 自适应高度 */
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 99998;
            /* 过渡动画 */
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), right 0.4s ease;
        }

        /* 折叠状态 */
        #glm-nav-wrapper.collapsed {
            transform: translateY(-50%) translateX(80px);
            right: 20px;
            pointer-events: none;
        }

        /* === 主内容区 (Main Content) === */
        #glm-nav-main-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            /* 关键：这个容器必须是 Flex 布局，且高度要受控 */
            flex: 1;
            min-height: 0; /* 防止子元素溢出 */
            transition: opacity 0.3s;

            /* 给容器加个极淡的背景，方便你调试看到它的范围 (平时透明) */
            /* background: rgba(0,0,0,0.2); border-radius: 20px; */
        }

        #glm-nav-wrapper.collapsed #glm-nav-main-content {
            opacity: 0;
            pointer-events: none;
        }

        /* === 中间滚动区域 (Scroll Area Fix) === */
        #glm-scroll-area {
            /* 核心修复：flex: 1 让它自动占据剩余空间，min-height: 0 防止撑破父容器 */
            flex: 1;
            min-height: 0;
            width: 100%;

            overflow-y: auto;
            overflow-x: visible;
            padding: 5px 15px; /* 稍微减小内边距 */

            scrollbar-width: none;
            -ms-overflow-style: none;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        #glm-scroll-area::-webkit-scrollbar { display: none; }

        /* 宝石节点 */
        .glm-nav-dot {
            width: 24px; height: 24px;
            background-size: contain; background-repeat: no-repeat; background-position: center;
            background-color: transparent; border: none; box-shadow: none;

            /* 增加一点默认边框，防止没填 Base64 时完全看不见 (保底措施) */
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 50%;

            opacity: 0.6; filter: grayscale(40%);
            transform: scale(0.85); cursor: pointer;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative; flex-shrink: 0;
            margin: 18px auto;
        }
        .glm-nav-dot:hover { opacity: 1; filter: grayscale(0%); transform: scale(1.1); border-color: rgba(255,255,255,0.3); }
        .glm-nav-dot.active { opacity: 1; filter: grayscale(0%) drop-shadow(0 0 8px rgba(64, 158, 255, 0.6)); transform: scale(1.3); z-index: 10; border: none; }
        .glm-nav-dot.is-starred { opacity: 1 !important; filter: grayscale(0%) brightness(1.1) !important; transform: scale(1.1); border: none; }
        .glm-nav-dot.is-starred.active { transform: scale(1.4); filter: drop-shadow(0 0 10px rgba(255, 60, 60, 0.8)) !important; }

        /* 电梯按钮 (固定高度) */
        .glm-elevator-btn {
            width: 28px; height: 28px;
            /* 强制不压缩 */
            flex-shrink: 0;
            background: rgba(30, 30, 35, 0.85);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.7);
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            font-size: 12px; /* 稍微调小字体 */
            transition: all 0.2s;
            user-select: none;
            margin: 2px 0;
            z-index: 99999;
        }
        .glm-elevator-btn:hover {
            background: rgba(64, 158, 255, 0.2);
            border-color: rgba(64, 158, 255, 0.6);
            color: #fff;
            transform: scale(1.1);
        }

        /* === 折叠控制按钮 (挂在最底下) === */
        #glm-toggle-btn {
            position: absolute;
            bottom: -45px; /* 挂在导航栏下方 45px 处 */
            width: 24px; height: 24px;
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: rgba(255, 255, 255, 0.6);
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s;
            z-index: 100000;
            pointer-events: auto;
        }
        #glm-toggle-btn:hover {
            background: rgba(64, 158, 255, 0.8);
            color: #fff;
            transform: scale(1.2);
        }
        /* 折叠后的 Toggle 按钮样式 */
        #glm-nav-wrapper.collapsed #glm-toggle-btn {
            transform: translateX(-70px) translateY(-50%); /* 移到屏幕边缘 */
            bottom: 50%; /* 居中 */
            width: 30px; height: 60px; /* 变成长条 */
            border-radius: 15px 0 0 15px;
            background: rgba(64, 158, 255, 0.3);
            box-shadow: -2px 0 10px rgba(0,0,0,0.2);
        }
        #glm-nav-wrapper.collapsed #glm-toggle-btn:hover {
            background: rgba(64, 158, 255, 0.9);
            width: 35px;
        }

        /* 提示框 */
        #glm-global-tooltip {
            position: fixed; background: rgba(15, 15, 20, 0.95); backdrop-filter: blur(10px);
            color: rgba(255, 255, 255, 0.95); padding: 10px 16px; font-size: 13px; font-weight: 500;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.6); z-index: 99999; pointer-events: none;
            opacity: 0; visibility: hidden; transition: opacity 0.2s, transform 0.2s;
            transform: translateY(-50%) translateX(15px);
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            max-width: 400px; white-space: normal; line-height: 1.5;
        }
        #glm-global-tooltip.visible { opacity: 1; visibility: visible; transform: translateY(-50%) translateX(0); }
        #glm-global-tooltip::before {
            content: ''; position: absolute; left: -5px; top: 50%; transform: translateY(-50%) rotate(45deg);
            width: 10px; height: 10px; background: inherit;
            border-left: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); z-index: -1;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = STYLES;
    document.head.appendChild(styleSheet);

    // === 4. DOM 结构 ===
    const wrapper = document.createElement('div');
    wrapper.id = 'glm-nav-wrapper';
    document.body.appendChild(wrapper);

    // 主内容区 (flex: 1 容器)
    const mainContent = document.createElement('div');
    mainContent.id = 'glm-nav-main-content';
    wrapper.appendChild(mainContent);

    // 1. 顶部按钮
    const btnTop = document.createElement('div');
    btnTop.className = 'glm-elevator-btn';
    btnTop.innerHTML = '▲';
    btnTop.title = "回到顶部";
    btnTop.style.display = 'none';
    mainContent.appendChild(btnTop);

    // 2. 滚动区域 (Flex Grow)
    const scrollArea = document.createElement('div');
    scrollArea.id = 'glm-scroll-area';
    mainContent.appendChild(scrollArea);

    // 3. 底部按钮
    const btnBottom = document.createElement('div');
    btnBottom.className = 'glm-elevator-btn';
    btnBottom.innerHTML = '▼';
    btnBottom.title = "直达最新";
    btnBottom.style.display = 'none';
    mainContent.appendChild(btnBottom);

    // 4. 折叠按钮 (挂载到 wrapper，绝对定位)
    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'glm-toggle-btn';
    toggleBtn.innerHTML = '»';
    toggleBtn.title = "折叠/展开";
    wrapper.appendChild(toggleBtn);

    const tooltip = document.createElement('div');
    tooltip.id = 'glm-global-tooltip';
    document.body.appendChild(tooltip);

    let lastRenderedSignature = "";
    let isClickScrolling = false;
    let currentQuestions = [];

    // === 5. 折叠逻辑 ===
    let isCollapsed = false;
    function toggleSidebar(forceState = null) {
        if (forceState !== null) isCollapsed = forceState;
        else isCollapsed = !isCollapsed;

        if (isCollapsed) {
            wrapper.classList.add('collapsed');
            toggleBtn.innerHTML = '💎';
            tooltip.classList.remove('visible');
        } else {
            wrapper.classList.remove('collapsed');
            toggleBtn.innerHTML = '»';
        }
    }
    toggleBtn.onclick = (e) => { e.stopPropagation(); toggleSidebar(); };

    function checkResponsive() {
        if (window.innerWidth < 1400) toggleSidebar(true);
        // else toggleSidebar(false); // 宽屏时不自动展开，保持用户选择
    }
    checkResponsive();
    window.addEventListener('resize', () => setTimeout(checkResponsive, 200));

    // === 6. 渲染逻辑 ===
    const observerOptions = { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 };
    const scrollObserver = new IntersectionObserver((entries) => {
        if (isClickScrolling) return;
        entries.forEach(entry => { if (entry.isIntersecting) activateDot(entry.target.id); });
    }, observerOptions);

    function activateDot(targetId) {
        const allDots = scrollArea.querySelectorAll('.glm-nav-dot');
        let activeDot = null;
        allDots.forEach(dot => {
            if (dot.dataset.targetId === targetId) {
                dot.classList.add('active'); activeDot = dot;
            } else {
                dot.classList.remove('active');
            }
        });
        if (activeDot) {
            const containerHeight = scrollArea.clientHeight;
            const dotTop = activeDot.offsetTop;
            const dotHeight = activeDot.clientHeight;
            scrollArea.scrollTo({ top: dotTop - (containerHeight / 2) + (dotHeight / 2), behavior: 'smooth' });
        }
    }

    btnTop.onclick = () => {
        if (currentQuestions.length > 0) {
            isClickScrolling = true;
            const target = currentQuestions[0];
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            activateDot(target.id);
            setTimeout(() => isClickScrolling = false, 1000);
        }
    };
    btnBottom.onclick = () => {
        if (currentQuestions.length > 0) {
            isClickScrolling = true;
            const target = currentQuestions[currentQuestions.length - 1];
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            activateDot(target.id);
            setTimeout(() => isClickScrolling = false, 1000);
        }
    };

    function generateNavNodes() {
        const allQuestions = document.querySelectorAll('[id^="row-question-"]');
        const validQuestions = Array.from(allQuestions).filter(q => /^row-question-\d+$/.test(q.id) && q.offsetHeight > 0);
        currentQuestions = validQuestions;

        const showElevator = validQuestions.length > 3;
        btnTop.style.display = showElevator ? 'flex' : 'none';
        btnBottom.style.display = showElevator ? 'flex' : 'none';

        if (validQuestions.length === 0) {
            wrapper.style.display = 'none';
            return;
        }
        wrapper.style.display = 'flex';

        const firstQuestionText = validQuestions[0].innerText;
        const currentChatId = getChatId(firstQuestionText);
        const currentSignature = currentChatId + "|" + validQuestions.map(q => q.id).join('|');

        if (currentSignature === lastRenderedSignature) return;
        lastRenderedSignature = currentSignature;

        scrollArea.innerHTML = '';
        scrollObserver.disconnect();

        const starredList = getStarredList(currentChatId);

        validQuestions.forEach((q, index) => {
            scrollObserver.observe(q);
            const dot = document.createElement('div');
            dot.className = 'glm-nav-dot';
            dot.dataset.targetId = q.id;

            const isStarred = starredList.includes(q.id);
            if (isStarred && GEM_STAR) dot.style.backgroundImage = `url(${GEM_STAR})`;
            else if (!isStarred && GEM_NORMAL) dot.style.backgroundImage = `url(${GEM_NORMAL})`;
            if(isStarred) dot.classList.add('is-starred');

            let textRaw = (q.querySelector('.question-txt') || q).innerText;
            const cleanText = textRaw.replace(/\s+/g, ' ').trim();
            dot.dataset.rawText = `Q${index + 1}: ${cleanText.slice(0, 80)}${cleanText.length > 80 ? '...' : ''}`;

            dot.onmouseenter = () => {
                if (isCollapsed) return;
                const rect = dot.getBoundingClientRect();
                tooltip.innerText = (dot.classList.contains('is-starred') ? "⭐ " : "") + dot.dataset.rawText;
                tooltip.style.right = (window.innerWidth - rect.left + 25) + 'px';
                tooltip.style.top = (rect.top + rect.height / 2) + 'px';
                tooltip.classList.add('visible');
            };
            dot.onmouseleave = () => tooltip.classList.remove('visible');

            dot.onclick = (e) => {
                e.stopPropagation();
                isClickScrolling = true;
                activateDot(q.id);
                q.scrollIntoView({ behavior: 'smooth', block: 'center' });
                q.classList.remove('glm-flash-target');
                void q.offsetWidth;
                q.classList.add('glm-flash-target');
                setTimeout(() => { isClickScrolling = false; }, 1000);
            };

            dot.ondblclick = (e) => {
                e.stopPropagation();
                const nowStarred = toggleStar(q.id, currentChatId);
                if (nowStarred && GEM_STAR) dot.style.backgroundImage = `url(${GEM_STAR})`;
                else if (!nowStarred && GEM_NORMAL) dot.style.backgroundImage = `url(${GEM_NORMAL})`;
                nowStarred ? dot.classList.add('is-starred') : dot.classList.remove('is-starred');
                tooltip.innerText = (nowStarred ? "⭐ " : "") + dot.dataset.rawText;
                dot.style.transform = "scale(1.6)";
                setTimeout(() => dot.style.transform = "", 200);
            };

            scrollArea.appendChild(dot);
        });
    }

    let timeout = null;
    const observer = new MutationObserver(() => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(generateNavNodes, 500);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(generateNavNodes, 1000);

})();
