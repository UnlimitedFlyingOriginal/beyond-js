function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function extensionFile(file) {
  const fileSeperate = file.split(".");
  const fileExtension = fileSeperate[1];

  switch (fileExtension) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "bmp": {
      return "image";
    }
    case "mov":
    case "mp4":
    case "avi":
    case "wmv":
    case "mpg":
    case "mpeg":
    case "mkv": {
      return "video";
    }
    case "pdf":
    case "doc":
    case "docx": {
      return "doc";
    }
    default: {
      return "none";
    }
  }
}
