// searchInteraction.js - 搜尋互動處理

document.addEventListener('DOMContentLoaded', function () {
    // 獲取必要的元素
    const searchButton = document.querySelector('[data-bs-toggle="modal"][data-bs-target="#searchModal"]').parentElement;
    const navbarCollapse = document.getElementById('navbarNav');
    const closeButton = document.querySelector('#searchModal .btn-close');
    const searchModal = document.getElementById('searchModal');
    const navbarNav = document.querySelector('.navbar-nav');
    const navbarActions = document.querySelector('.navbar-actions');
    const searchInput = document.getElementById('siteSearch');

    // 創建內嵌搜索框
    const inlineSearchForm = document.createElement('form');
    inlineSearchForm.classList.add('d-flex', 'inline-search-form', 'w-100');
    inlineSearchForm.style.display = 'none';
    inlineSearchForm.setAttribute('role', 'search');
    inlineSearchForm.setAttribute('aria-label', '站內搜索');
    inlineSearchForm.innerHTML = `
        <div class="input-group w-100">
            <input type="text" class="form-control search-input" id="inlineSearch" placeholder="搜索應用...">
            <div class="input-group-append">
                <button class="btn btn-primary" type="submit" aria-label="搜索">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <button type="button" class="btn-close ms-2 align-self-center inline-search-close" aria-label="關閉"></button>
        </div>
    `;

    // 將搜索框插入到navbar
    navbarCollapse.appendChild(inlineSearchForm);

    // 獲取內嵌搜索框關閉按鈕
    const inlineSearchClose = inlineSearchForm.querySelector('.inline-search-close');

    // 點擊搜索按鈕處理
    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // 隱藏原始導航項目
        if (navbarNav) navbarNav.style.display = 'none';
        if (navbarActions) navbarActions.style.display = 'none';

        // 顯示內嵌搜索框
        inlineSearchForm.style.display = 'flex';

        // 將焦點設置到搜索輸入框
        document.getElementById('inlineSearch').focus();

        // 防止modal彈出
        return false;
    });

    // 關閉內嵌搜索框並恢復導航
    inlineSearchClose.addEventListener('click', function () {
        // 隱藏內嵌搜索框
        inlineSearchForm.style.display = 'none';

        // 顯示原始導航項目
        if (navbarNav) navbarNav.style.display = 'flex';
        if (navbarActions) navbarActions.style.display = 'flex';
    });

    // 處理內嵌搜索框的提交
    inlineSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchValue = document.getElementById('inlineSearch').value;
        // 這裡可以處理搜索提交，例如跳轉到搜索結果頁
        console.log('搜索: ' + searchValue);
        // 清空輸入並關閉
        document.getElementById('inlineSearch').value = '';
        inlineSearchClose.click();
    });

    // 響應式適配
    function handleResponsiveSearch() {
        if (window.innerWidth < 992) { // 在移動設備上使用modal
            searchButton.setAttribute('data-bs-toggle', 'modal');
            searchButton.setAttribute('data-bs-target', '#searchModal');
        } else { // 在桌面上使用內嵌搜索
            searchButton.removeAttribute('data-bs-toggle');
            searchButton.removeAttribute('data-bs-target');
        }
    }

    // 初始化檢查
    handleResponsiveSearch();

    // 監聽視窗大小變化
    window.addEventListener('resize', handleResponsiveSearch);

    // 在模態框隱藏時確保導航可見
    const bsSearchModal = new bootstrap.Modal(document.getElementById('searchModal'));
    searchModal.addEventListener('hidden.bs.modal', function () {
        // 確保導航可見
        if (navbarNav) navbarNav.style.display = 'flex';
        if (navbarActions) navbarActions.style.display = 'flex';
        // 確保內嵌搜索隱藏
        inlineSearchForm.style.display = 'none';
    });
});