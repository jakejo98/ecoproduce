export function loadFile(callback) {
  // 로딩된 요소를 추적하기 위한 카운터
  let elementsLoaded = 0;

  // 두 요소가 모두 로드되었을 때 콜백을 호출하는 함수
  function checkCompletion() {
    elementsLoaded++;
    if (elementsLoaded === 4 && typeof callback === 'function') {
      callback();
    }
  }

  $('#header').load('./html/include/header.html', function(response, status, xhr) {
    if (status === "error") {
      console.error("헤더 로딩 오류:", xhr.statusText);
    } else {
      $(this).contents().unwrap();
      checkCompletion();
    }
  });

  $('#app').load('./html/include/app.html', function(response, status, xhr) {
    if (status === "error") {
      console.error("헤더 로딩 오류:", xhr.statusText);
    } else {
      $(this).contents().unwrap();
      checkCompletion();
    }
  });

  $('#footer').load('./html/include/footer.html', function(response, status, xhr) {
    if (status === "error") {
      console.error("풋터 로딩 오류:", xhr.statusText);
    } else {
      $(this).contents().unwrap();
      checkCompletion();
    }
  });

  $('#toolbar').load('./html/include/toolbar.html', function(response, status, xhr) {
    if (status === "error") {
      console.error("풋터 로딩 오류:", xhr.statusText);
    } else {
      $(this).contents().unwrap();
      checkCompletion();
    }
  });
}
