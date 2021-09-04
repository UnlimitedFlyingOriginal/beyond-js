// 랜덤 숫자 만드는 함수 만들기
function getRandomNumber(a, b) {
  while (true) {
    const number = Math.floor(Math.random() * (b - a) + a);
    if (number !== a && number !== b) return number;
  }
}

// 확장자 구별 함수 만들기
// solution1
function checkFileExtension(file) {
  const splitedFile = file.split('.');
  const fileType = splitedFile[1];

  switch (fileType) {
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp': {
      return 'image';
    }
    case 'mov':
    case 'mp4':
    case 'avi':
    case 'wmv':
    case 'mpg':
    case 'mpeg':
    case 'mkv': {
      return 'video';
    }
    case 'pdf':
    case 'doc':
    case 'docx': {
      return 'doc';
    }
    default: {
      return 'none';
    }
  }
}

// solution2
function checkFileType(file) {
  const types = {
    image: ['png', 'jpg', 'jpeg', 'gif', 'bmp'],
    video: ['mov', 'mp4', 'avi', 'wmv', 'mpg', 'mpeg', 'mkv'],
    doc: ['pdf', 'doc', 'docx'],
  };

  const fileType = file.split('.')[1];

  for (let key in types) {
    if (types[key].includes(fileType)) return key;
  }
  return 'none';
}
