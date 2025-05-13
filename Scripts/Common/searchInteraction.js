/**
 * searchInteraction.js - 搜尋功能交互
 * 
 * 功能：
 * 1. 點擊搜尋按鈕時隱藏導航菜單，顯示搜尋框
 * 2. 點擊關閉按鈕時隱藏搜尋框，恢復導航菜單
 */
document.addEventListener('DOMContentLoaded', function () {
    // 搜尋按鈕元素
    const searchButton = document.querySelector('[data-bs-toggle="search"]');
    // 關閉搜尋框按鈕
    const searchCloseButton = document.getElementById('closeSearchBox');
    // 導航菜單
    const navbarNav = document.getElementById('navbarNav');
    // 搜尋框容器
    const searchContainer = document.getElementById('searchContainer');
    // 搜尋輸入框
    const searchInput = document.getElementById('searchInput');
    // 搜尋表單
    const searchForm = document.getElementById('searchForm');
    // 頁面body元素
    const body = document.body;

    // 檢查元素是否存在
    if (!searchButton || !navbarNav || !searchContainer || !searchCloseButton) {
        console.error('搜尋功能所需的DOM元素未找到');
        return;
    }

    // 點擊搜尋按鈕
    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        openSearch();
    });

    // 點擊關閉按鈕
    searchCloseButton.addEventListener('click', function () {
        closeSearch();
    });

    // 按ESC鍵也可以關閉搜尋框
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && searchContainer.style.display === 'flex') {
            closeSearch();
        }
    });

    // 打開搜尋框
    function openSearch() {

        // 添加 body 類，防止背景滾動 
        body.classList.add('search-active');

        // 顯示搜尋容器
        searchContainer.style.opacity = '0';
        searchContainer.style.display = 'flex';

        // 淡入動畫效果
        setTimeout(function () {
            searchContainer.style.opacity = '1';
        }, 10);

        // 聚焦搜索輸入框
        if (searchInput) {
            setTimeout(function () {
                searchInput.focus();
            }, 300);
        }
    }

    // 關閉搜尋框
    function closeSearch() {
        // 移除 body 類，防止背景滾動 
        body.classList.remove('search-active');

        // 淡出動畫效果
        searchContainer.style.opacity = '0';

        // 延遲隱藏搜尋框
        setTimeout(function () {
            searchContainer.style.display = 'none';
        }, 300);
    }

    // 處理搜尋表單提交
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const searchTerm = document.getElementById('searchInput').value.trim();

            if (searchTerm !== '') {
                // 這裡可以執行搜尋邏輯
                console.log('搜尋詞：', searchTerm);

                // 預設搜尋後跳轉到搜尋結果頁
                window.location.href = '/search?q=' + encodeURIComponent(searchTerm);

                // 或者使用AJAX執行搜尋...
            }
        });
    }
});