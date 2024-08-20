export function loadFile(callback) {
  // 로딩된 요소를 추적하기 위한 카운터
  let elementsLoaded = 0;

  // 총 로드해야 할 요소의 수 (존재하는 요소만 카운트)
  let totalElementsToLoad = 0;

  // 요소가 존재하는지 확인하고 존재하면 로드를 수행하는 함수
  function loadIfExists(selector, url) {
    const element = $(selector);
    if (element.length) {
      totalElementsToLoad++;
      element.load(url, function(response, status, xhr) {
        if (status === "error") {
          console.error(`${selector} 로딩 오류:`, xhr.statusText);
        } else {
          element.contents().unwrap();
          checkCompletion();
        }
      });
    }
  }

  // 두 요소가 모두 로드되었을 때 콜백을 호출하는 함수
  function checkCompletion() {
    elementsLoaded++;
    if (elementsLoaded === totalElementsToLoad && typeof callback === 'function') {
      callback();
    }
  }

  // 각 요소에 대해 로드 작업을 수행
  loadIfExists('#header', '/ecoproduce/html/include/header.html');
  loadIfExists('#app', '/ecoproduce/html/include/app.html');
  loadIfExists('#footer', '/ecoproduce/html/include/footer.html');
  loadIfExists('#toolbar', '/ecoproduce/html/include/toolbar.html');
}

